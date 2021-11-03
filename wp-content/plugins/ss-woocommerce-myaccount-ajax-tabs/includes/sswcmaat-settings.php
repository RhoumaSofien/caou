<?php
/**
 * SS WooCommerce Myaccount Ajax Tabs Settings
 *
 * Uses SS_WeDevs_Settings_API Class
 */

if ( ! class_exists( 'Generate_SSWCMAAT_Settings' ) ) :

	class Generate_SSWCMAAT_Settings {

		private $settings_api;

		function __construct() {
			$this->settings_api = new SS_WeDevs_Settings_API;

			add_action( 'admin_init', array($this, 'admin_init') );
			add_action( 'admin_menu', array($this, 'admin_menu') );
		}

		function admin_init() {

			//set the settings
			$this->settings_api->set_sections( $this->get_settings_sections() );
			$this->settings_api->set_fields( $this->get_settings_fields() );

			//initialize settings
			$this->settings_api->admin_init();
		}

		function admin_menu() {
			add_options_page( 'SS WooCommerce Myaccount Ajax Tabs Settings', 'SS Ajax Tabs Settings', 'manage_options', 'sswcmaat_settings', array($this, 'plugin_page') );
			add_submenu_page( 'woocommerce', __( 'SS Ajax Tabs Settings', 'woocommerce' ),  __( 'SS Ajax Tabs Settings', 'woocommerce' ) , 'manage_woocommerce', 'sswcmaat_settings', array( $this, 'plugin_page' ), 10 );
		}

		function get_settings_sections() {
			$sections = array(
				array(
					'id' => 'sswcmaat_general',
					'title' => esc_attr__( 'General', 'sswcmaat' )
				),
				array(
					'id' => 'sswcmaat_display',
					'title' => esc_attr__( 'Display', 'sswcmaat' )
				),
				array(
					'id' => 'sswcmaat_custom_tabs',
					'title' => esc_attr__( 'Custom Tabs', 'sswcmaat' )
				)
			);
			return $sections;
		}

		/**
		 * Returns all the settings fields
		 *
		 * @return array settings fields
		 */
		function get_settings_fields() {
			$pages = get_pages();
			$page_arr = array();
			if ( isset( $pages ) && is_array( $pages ) ) {
				foreach( $pages as $page ) {
					$page_id = apply_filters( 'wpml_object_id', $page->ID, 'page', true );
					$page_arr[ $page_id ] = $page->post_title;
				}
			}
			$settings_fields = array(
				'sswcmaat_general' => array(
					array(
						'name'  => 'sswcmaat_disable_ajax',
						'title' => esc_attr__( 'Ajax tabs feature', 'sswcmaat' ),
						'label'  => esc_attr__( 'Disable ajax tabs feature of this plugin.', 'sswcmaat' ),
						'type'  => 'checkbox'
					),
					array(
						'name'              => 'sswcmaat_preloader',
						'title'             => esc_attr__( 'Custom preloader image', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Browse a custom preloader gif image for the tabbed content. If left blank, the plugin will use default image.', 'sswcmaat' ),
						'type'              => 'file',
						'default'           => '',
						'sanitize_callback' => ''
					),
					array(
						'name'              => 'sswcmaat_not_loaded',
						'title'             => esc_attr__( 'Content not loaded text', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Provide a custom text message that shall appear if content fails to load.', 'sswcmaat' ),
						'type'              => 'textarea',
						'default'           =>  esc_attr__( 'The content could not be loaded.', 'sswcmaat' ),
						'sanitize_callback' => ''
					),

					array(
						'name'              => 'sswcmaat_heading',
						'title'             => esc_attr__( 'Tab heading selector', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Provide a heading selector for page on which tabs are shown. E.g. .entry-title', 'sswcmaat' ),
						'type'              => 'text',
						'default'           => '',
						'sanitize_callback' => ''
					),

					array(
						'name'              => 'sswcmaat_extra_links',
						'title'             => esc_attr__( 'Extra ajax link selectors', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Provide any extra link selector on which ajax loading shall be enabled. The link should be within my account tabs. E.g. .my-link', 'sswcmaat' ),
						'type'              => 'text',
						'default'           => '',
						'sanitize_callback' => ''
					),

					array(
						'name'              => 'sswcmaat_exclude_links',
						'title'             => esc_attr__( 'Exclude links from ajax', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Provide link selectors that shall be excluded from ajax feature. E.g. .woocommerce-MyAccount-navigation-link--downloads > a', 'sswcmaat' ),
						'type'              => 'text',
						'default'           => '',
						'sanitize_callback' => ''
					),

					array(
						'name'  => 'sswcmaat_doc_title',
						'title' => esc_attr__( 'Update document title after ajax load', 'sswcmaat' ),
						'label'  => esc_attr__( 'Update document title after ajax load', 'sswcmaat' ),
						'type'  => 'checkbox'
					),

					array(
						'name'  => 'sswcmaat_disable_history',
						'title' => esc_attr__( 'Tab URL update', 'sswcmaat' ),
						'label'  => esc_attr__( 'Disable changing of tab URL in browser address bar', 'sswcmaat' ),
						'type'  => 'checkbox'
					),

					array(
						'name'  => 'sswcmaat_disable_cache',
						'title' => esc_attr__( 'Disable tab cache', 'sswcmaat' ),
						'label'  => esc_attr__( 'Disable caching of tab contents after ajax load', 'sswcmaat' ),
						'type'  => 'checkbox',
						'desc'  => esc_attr__( 'If checked, tab contents will not be cached. Each time you click on the tab link, the content will be loaded with a new ajax call.', 'sswcmaat' ),
					),

					array(
						'name'              => 'sswcmaat_ajax_timeout',
						'title'             => esc_attr__( 'Ajax timeout delay', 'sswcmaat' ),
						'desc'              => esc_attr__( 'Provide ajax timeout delay in miliseconds. E.g. 30000 (for 30 seconds)', 'sswcmaat' ),
						'type'              => 'number',
						'default' 			=> '50000',
						'min'				=> '1000'
					),
					array(
						'name'  => 'sswcmaat_enable_internal_links',
						'title' => esc_attr__( 'Ajax links in tab content', 'sswcmaat' ),
						'label' => esc_attr__( 'Enable ajax internal links in tab content', 'sswcmaat' ),
						'desc'  => esc_attr__( 'If checked, the links inside dashboard tab will be ajaxified (except the signout link). If your theme overrides woocommerce/myaccount/dashboard.php file, make sure the links contain "sswcmaat-ajax-link" class name. e.g. <a class="sswcmaat-ajax-link" href="xx">', 'sswcmaat' ),
						'type'  => 'checkbox'
					),

					array(
						'name'    => 'sswcmaat_limit_pages',
						'title'   => esc_attr__( 'Load plugin scripts on these pages only', 'sswcmaat' ),
						'desc'    => esc_attr__( 'Choose pages on which plugin CSS and JS shall be loaded. It can be the "My Account" page, or multiple pages. If left unselected, scripts will be loaded on entire site.', 'sswcmaat' ),
						'type'    => 'select_multiple',
						'options' => $page_arr
					)
				),
				'sswcmaat_display' => array(
					array(
						'name'    => 'sswcmaat_tab_style',
						'title'   => esc_attr__( 'Tab display style', 'sswcmaat' ),
						'desc'    => esc_attr__( 'Choose a tab display style.', 'sswcmaat' ),
						'type'    => 'select',
						'options' => array(
							'default' => 'Default',
							'classic'  => 'Classic',
							'flat'  => 'Flat'
						)
					),
					array(
						'name'    => 'sswcmaat_tab_orientation',
						'title'   => esc_attr__( 'Tab Orientation', 'sswcmaat' ),
						'desc'    => esc_attr__( 'Choose a tab orientation.', 'sswcmaat' ),
						'type'    => 'select',
						'options' => array(
							'horizontal' => 'Horizontal',
							'vertical'  => 'Vertical'
						)
					),
					array(
						'name'  => 'sswcmaat_enable_round_corner',
						'title' => esc_attr__( 'Round corners', 'sswcmaat' ),
						'label'  => esc_attr__( 'Enable round corners on tab links', 'sswcmaat' ),
						'type'  => 'checkbox'
					),
					array(
						'name'  => 'sswcmaat_disable_plugin_styles',
						'title' => esc_attr__( 'Plugin\'s CSS styles', 'sswcmaat' ),
						'label'	=> __( 'Disable plugins CSS styles on tabs', 'sswcmaat' ),
						'desc'  => esc_attr__( 'If checked, tabs will show styles inherited from WooCommerce plugin or the current theme. Important: The more link feature depends on plugin\'s CSS. So disabling this will also disable more link.', 'sswcmaat' ),
						'type'  => 'checkbox'
					),

					array(
						'name'  => 'sswcmaat_disable_more',
						'title' => esc_attr__( 'More link', 'sswcmaat' ),
						'label'	=> __( 'Disable more link with dropdown on tabs', 'sswcmaat' ),
						'desc'  => esc_attr__( 'If checked, more link dropdown will be removed. Any extra tabs will overflow on next line.', 'sswcmaat' ),
						'type'  => 'checkbox'
					)
				),

				'sswcmaat_custom_tabs' => array(
					array(
						'name'    => 'sswcmaat_tab_data',
						'title'   => esc_attr__( 'Add custom tabs', 'sswcmaat' ),
						'desc'    => esc_attr__( 'Add or modify new tabs', 'sswcmaat' ),
						'type'    => 'sortable_data',
						'std'	=> ''
					),
					array(
						'name'  => 'sswcmaat_flush_rewrite',
						'title' => esc_attr__( 'Auto flush rewrite rules', 'sswcmaat' ),
						'label'  => esc_attr__( 'Disable auto flushing of rewrite rules.', 'sswcmaat' ),
						'desc'    => esc_attr__( 'If checked, it will be required to manually update permalink structure inside Settings > Permalinks > Save Changes. Permalink needs to be updated when new endpoints are added. If this option is un checked, permalinks will be updated automatically upon each load, which is server resource consuming.', 'sswcmaat' ),
						'type'  => 'checkbox'
					),
				)
			);

			return $settings_fields;
		}

		function plugin_page() {
			echo '<div class="wrap">';
			echo '<h1>' . esc_attr__( 'SS WooCommerce Myaccount Ajax Tabs Settings', 'sswcmaat' ) . '</h1>';
			$this->settings_api->show_navigation();
			$this->settings_api->show_forms();

			echo '</div>';
		}

		/**
		 * Get all the pages
		 *
		 * @return array page names with key value pairs
		 */
		function get_pages() {
			$pages = get_pages();
			$pages_options = array();
			if ( $pages ) {
				foreach ($pages as $page) {
					$pages_options[$page->ID] = $page->post_title;
				}
			}

			return $pages_options;
		}
	}

	$generate_sswcmaat_settings = new Generate_SSWCMAAT_Settings();

endif;