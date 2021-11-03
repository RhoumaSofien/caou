<?php
/**
 * Plugin Name: SS WooCommerce Myaccount Ajax Tabs
 * Author:      SaurabhSharma
 * Author URI: 	http://codecanyon.net/user/saurabhsharma
 * Version:     2.1.0
 * Text Domain: sswcmaat
 * Domain Path: /languages/
 * Description: Convert WooCommerce My Account tabs into ajax tabs. i.e. show tab content without page refresh.
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'SS_WC_MA_AT' ) ) {

	class SS_WC_MA_AT {

		function __construct() {

			// Include required files
			add_action( 'plugins_loaded', array( &$this, 'sswcmaat_includes' ) );

			// Load translation
			add_action( 'init', array( &$this, 'sswcmaat_init' ) );

			// admin script and styles
			add_action( 'admin_enqueue_scripts', array( &$this, 'sswcmaat_admin_scripts' ) );

			// Load scripts and stylesheets
			add_action( 'wp_enqueue_scripts', array( &$this, 'sswcmaat_scripts' ) );

			// Add body class on theme
			add_filter( 'body_class', array( &$this, 'sswcmaat_body_class' ) );

			// Show admin notice if WooCommerce is not installed
			add_action('admin_notices', array( &$this, 'sswcmaat_install_woocommerce_notice' ) );

			add_filter( 'woocommerce_locate_template', array( &$this, 'sswcmaat_woocommerce_locate_template' ), 10, 3 );

			register_activation_hook( __FILE__, array( &$this, 'sswcmaat_custom_flush_rewrite_rules' ) );
			register_deactivation_hook( __FILE__, array( &$this, 'sswcmaat_custom_flush_rewrite_rules' ) );

		}

		function sswcmaat_admin_scripts() {
			wp_enqueue_style( 'sswcmaat-admin-styles', plugin_dir_url( __FILE__ ) . 'assets/css/sswcmaat.admin.css' );
			wp_enqueue_script( 'jquery-ui-sortable' );
			wp_enqueue_script( 'sswcmaat-admin-js', plugin_dir_url( __FILE__ ) . 'assets/js/sswcmaat.admin.js', array( 'jquery' ), '', true );

			// Localize text strings and variables used in sd.admin.js file
			$opts_custom_tabs = get_option( 'sswcmaat_custom_tabs' );
			$sswcmaat_tab_data	= isset( $opts_custom_tabs['sswcmaat_tab_data'] ) ? json_decode( $opts_custom_tabs['sswcmaat_tab_data'], true ) : '';

			// Get all available user roles
			$roles = get_editable_roles();
			$roles_arr = array();
			foreach( $roles as $key => $val ) {
				$roles_arr[ $key ] = $val['name'];
			}

			$localization = array(
				'name_label'		=> __( 'Tab Name', 'sswcmaat' ),
				'endpoint_label'		=> __( 'Endpoint Slug', 'sswcmaat' ),
				'content_label'		=> __( 'Tab Content', 'sswcmaat' ),
				'new_tab_label'		=> _x( 'Untitled tab %num%', 'Untitled tab followed by number', 'sswcmaat' ),
				'delete_text' 		=> __( 'Delete', 'sswcmaat' ),
				'name_desc'			=> __( 'The tab name as it appears in my account menu. E.g. My Offers', 'sswcmaat'),
				'endpoint_desc'		=> __( 'The endpoint slug of tab name. E.g. my-offers', 'sswcmaat'),
				'content_desc'		=> __( 'The tab content. It can contain HTML and shortcodes. If you wish to use php markup, create a new file inside /wp-content/your_theme/woocommerce/myaccount/slug-name.php/ and place your custom code in the file. That will override the content placed in this textarea.', 'sswcmaat'),
				'roles'				=> json_encode( $roles_arr ),
				'roles_label'		=> __( 'Hide this tab for', 'sswcmaat' ),
				'roles_desc'		=> __( 'Select user roles for which this tab shall be hidden. You can multi select using Ctrl + Click.', 'sswcmaat' )
			);

			wp_localize_script( 'sswcmaat-admin-js', 'sswcmaat_localize', $localization );
		}


		/**
		 * Flush rewrite rules on plugin activation.
		 */
		function sswcmaat_custom_flush_rewrite_rules() {
			$opts_custom_tabs = get_option( 'sswcmaat_custom_tabs' );
			$sswcmaat_tab_data	= isset( $opts_custom_tabs['sswcmaat_tab_data'] ) ? json_decode( $opts_custom_tabs['sswcmaat_tab_data'], true ) : '';

			if ( isset ( $sswcmaat_tab_data ) && is_array( $sswcmaat_tab_data ) ) {
				foreach( $sswcmaat_tab_data as $key => $v ) {
					$row = json_decode( $v );
					$selected_roles = isset( $row->roles ) ? $row->roles : array();
					if ( is_user_logged_in() ) {
						global $current_user;
						$user_role = $current_user->roles[0];
						if ( isset( $user_role ) && ! in_array( $user_role, $selected_roles ) ) {
							add_rewrite_endpoint( $row->slug, EP_ROOT | EP_PAGES );
						}
					}
				}
			}

			flush_rewrite_rules();
		}

		function sswcmaat_includes() {
			require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/class.settings-api.php' );
			require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/sswcmaat-settings.php' );
			require_once( trailingslashit( plugin_dir_path( __FILE__ ) ) . 'includes/sswcmaat-functions.php' );
		}

		function sswcmaat_init() {
			load_plugin_textdomain( 'sswcmaat', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}

		function sswcmaat_scripts() {

			if ( ! is_admin() ) {

				$opts_general = get_option( 'sswcmaat_general' );
				$opts_display = get_option( 'sswcmaat_display' );
				$sswcmaat_disable_plugin_styles	= ( isset( $opts_display['sswcmaat_disable_plugin_styles'] ) && 'on' == $opts_display['sswcmaat_disable_plugin_styles'] ) ? true : false;
				$sswcmaat_limit_pages 	= ! empty( $opts_general['sswcmaat_limit_pages'] ) ? $opts_general['sswcmaat_limit_pages'] : false;

				// Load scripts and styles only on selected pages
				if ( isset( $sswcmaat_limit_pages ) && is_array( $sswcmaat_limit_pages ) ) {
					if ( is_page( $sswcmaat_limit_pages) ){
						if ( ! $sswcmaat_disable_plugin_styles ) {
							wp_enqueue_style( 'sswcmaat-styles', plugin_dir_url( __FILE__ ) . 'assets/css/sswcmaat.plugin.css', array(), null );
						}
						wp_enqueue_script( 'sswcmaat-plugin-functions', plugin_dir_url( __FILE__ ) . 'assets/js/sswcmaat.plugin.js', array( 'jquery' ), '', true );
					}
				}
				else {
					// Load on all pages
					if ( ! $sswcmaat_disable_plugin_styles ) {
						wp_enqueue_style( 'sswcmaat-styles', plugin_dir_url( __FILE__ ) . 'assets/css/sswcmaat.plugin.css', array(), null );
					}
					wp_enqueue_script( 'sswcmaat-plugin-functions', plugin_dir_url( __FILE__ ) . 'assets/js/sswcmaat.plugin.js', array( 'jquery' ), '', true );
				}

				// Localize text strings and variables used in sswcmaat.plugin.js file
				$sswcmaat_disable_ajax 	= ( isset( $opts_general['sswcmaat_disable_ajax'] ) && 'on' == $opts_general['sswcmaat_disable_ajax'] ) ? true : false;
				$sswcmaat_disable_history 	= ( isset( $opts_general['sswcmaat_disable_history'] ) && 'on' == $opts_general['sswcmaat_disable_history'] ) ? true : false;
				$sswcmaat_disable_cache	= ( isset( $opts_general['sswcmaat_disable_cache'] ) && 'on' == $opts_general['sswcmaat_disable_cache'] ) ? true : false;
				$sswcmaat_doc_title 	= ( isset( $opts_general['sswcmaat_doc_title'] ) && 'on' == $opts_general['sswcmaat_doc_title'] ) ? true : false;
				$sswcmaat_disable_more	= ( isset( $opts_display['sswcmaat_disable_more'] ) && 'on' == $opts_display['sswcmaat_disable_more'] ) ? true : false;
				$sswcmaat_preloader 	= ! empty( $opts_general['sswcmaat_preloader'] ) ? $opts_general['sswcmaat_preloader'] : '';
				$sswcmaat_not_loaded 	= ! empty( $opts_general['sswcmaat_not_loaded'] ) ? $opts_general['sswcmaat_not_loaded'] : '';
				$sswcmaat_ajax_timeout 	= ! empty( $opts_general['sswcmaat_ajax_timeout'] ) ? $opts_general['sswcmaat_ajax_timeout'] : 30000;
				$sswcmaat_heading 		= ! empty( $opts_general['sswcmaat_heading'] ) ? $opts_general['sswcmaat_heading'] : '';
				$sswcmaat_extra_links		= ! empty( $opts_general['sswcmaat_extra_links'] ) ? $opts_general['sswcmaat_extra_links'] : '';
				$sswcmaat_exclude_links		= ! empty( $opts_general['sswcmaat_exclude_links'] ) ? $opts_general['sswcmaat_exclude_links'] : '';

				$custom_css = '.sswcmaat-loading { background: transparent url(' . esc_url( $sswcmaat_preloader ) . ') center center no-repeat; }';
				$sswcmaat_enable_internal_links 	= ( isset( $opts_general['sswcmaat_enable_internal_links'] ) && 'on' == $opts_general['sswcmaat_enable_internal_links'] ) ? true : false;

				if ( '' != $sswcmaat_preloader ) {
					wp_add_inline_style( 'sswcmaat-styles', $custom_css );
				}

				// Tell JS if the browser is Internet Explorer
				$ie_check = preg_match( '/MSIE/i', $_SERVER['HTTP_USER_AGENT'] ) ? true : false;

				$localization = array(
					'disable_ajax'		=> $sswcmaat_disable_ajax,
					'internal_links'	=> $sswcmaat_enable_internal_links,
					'loading_error'	 	=> sanitize_text_field( $sswcmaat_not_loaded ),
					'ajax_timeout'		=> sanitize_text_field( (int)$sswcmaat_ajax_timeout ),
					'title_selector'	=> sanitize_text_field( $sswcmaat_heading ),
					'extra_links'		=> sanitize_text_field( $sswcmaat_extra_links ),
					'exclude_links'		=> sanitize_text_field( $sswcmaat_exclude_links ),
					'change_doc_title'	=> $sswcmaat_doc_title,
					'disable_history'	=> $sswcmaat_disable_history,
					'disable_cache'		=> $sswcmaat_disable_cache,
					'site_name'			=> esc_attr( get_bloginfo( 'name' ) ),
					'custom_preloader'	=> '' != $sswcmaat_preloader ? 'true' : '',
					'disable_css'		=> $sswcmaat_disable_plugin_styles,
					'disable_more'		=> $sswcmaat_disable_more,
					'ie_check'			=> $ie_check,
					'more_text'			=> __( 'More', 'sswcmaat' )
				);

				wp_localize_script( 'sswcmaat-plugin-functions', 'sswcmaat_localize', $localization );

			}
		}

		function sswcmaat_body_class( $classes ) {

			$opts_general 					= get_option( 'sswcmaat_general' );
			$opts_display 					= get_option( 'sswcmaat_display' );
			$sswcmaat_disable_plugin_styles	= ( isset( $opts_display['sswcmaat_disable_plugin_styles'] ) && 'on' == $opts_display['sswcmaat_disable_plugin_styles'] ) ? true : false;
			$sswcmaat_enable_round_corner 	= ( isset( $opts_display['sswcmaat_enable_round_corner'] ) && 'on' == $opts_display['sswcmaat_enable_round_corner'] ) ? true : false;
			$sswcmaat_tab_style 			= isset( $opts_display['sswcmaat_tab_style'] ) ? $opts_display['sswcmaat_tab_style'] : 'default';
			$sswcmaat_tab_orientation 		= isset( $opts_display['sswcmaat_tab_orientation'] ) ? $opts_display['sswcmaat_tab_orientation'] : 'horizontal';

			if ( ! $sswcmaat_disable_plugin_styles ) {
				$classes[] = 'sswcmaat tabs-' . $sswcmaat_tab_style;

				if ( $sswcmaat_enable_round_corner ) {
					$classes[] = 'tabs-rounded';
				}

				if ( 'vertical' == $sswcmaat_tab_orientation ) {
					$classes[] = 'tabs-vertical';
				}

				if ( is_rtl() ) {
					$classes[] = 'rtl';
				}
			}

			return $classes;
		}

		function sswcmaat_install_woocommerce_notice() {
			if ( ! class_exists( 'woocommerce' ) ) {
				echo sprintf( '<div class="error"><p>%s</p></div>', esc_attr__( 'SS WooCommerce Myaccount Ajax Tabs Plugin requires WooCommerce plugin. Kindly install and activate WooCommerce plugin.', 'sswcmaat' ) );
			}
			else {
				return;
			}
		}

		function sswcmaat_plugin_path() {
			return untrailingslashit( plugin_dir_path( __FILE__ ) );
		}

		function sswcmaat_woocommerce_locate_template( $template, $template_name, $template_path ) {

			global $woocommerce;

			$_template = $template;

			if ( ! $template_path ) $template_path = $woocommerce->template_url;

			$plugin_path  = $this->sswcmaat_plugin_path() . '/woocommerce/';

			// Find templates in theme
			$template = locate_template(
				array(
					$template_path . $template_name,
					$template_name
				)
			);

			// Find in plugin (if exists)

			if ( ! $template && file_exists( $plugin_path . $template_name ) ) {
				$template = $plugin_path . $template_name;
			}

			// Else use native one
			if ( ! $template ) {
				$template = $_template;
			}

			return $template;
		}
	}

	$ss_wc_ma_at = new SS_WC_MA_AT();
} // If not class exists
?>