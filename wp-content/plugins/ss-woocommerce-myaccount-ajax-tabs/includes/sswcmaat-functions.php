<?php
/**
 * sswcmaat-functions
 *
 * Helper functions used in the plugin
 * @version 2.1.0
 */

// Set WooCommerce endpoint content
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
				add_action( 'woocommerce_account_' . $row->slug . '_endpoint', function() use( $row ) {
					$template_path = '/woocommerce/myaccount/';
					if ( locate_template( $template_path . esc_attr( $row->slug ) . '.php' ) ) {
						require( get_stylesheet_directory() . $template_path . esc_attr( $row->slug ) . '.php' );
					}
					elseif ( file_exists( dirname( dirname( __FILE__ ) ) . $template_path . esc_attr( $row->slug ) . '.php' ) ) {
						require( dirname( dirname( __FILE__ ) ) . $template_path . esc_attr( $row->slug ) . '.php' );
					}
					else {
						echo do_shortcode( $row->content );
					}
				});
			}
		}
	}
}

// Add rewrite endpoints
function sswcmaat_endpoints() {
	$opts_custom_tabs = get_option( 'sswcmaat_custom_tabs' );
	$sswcmaat_tab_data	= isset( $opts_custom_tabs['sswcmaat_tab_data'] ) ? json_decode( $opts_custom_tabs['sswcmaat_tab_data'], true ) : '';
	$sswcmaat_flush_rewrite = ( isset( $opts_custom_tabs['sswcmaat_flush_rewrite'] ) && 'on' == $opts_custom_tabs['sswcmaat_flush_rewrite'] ) ? true : false;

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
		if ( ! $sswcmaat_flush_rewrite ) {
			flush_rewrite_rules();
		}
	}
}

add_action( 'init', 'sswcmaat_endpoints' );


/**
 * Add new query var.
 *
 * @param array $vars
 * @return array
 */
function sswcmaat_query_vars( $vars ) {
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
					$vars[] = $row->slug;
				}
			}
		}
	}
	return $vars;
}

add_filter( 'query_vars', 'sswcmaat_query_vars', 0 );


/**
 * Insert the new endpoint into the My Account menu.
 *
 * @param array $items
 * @return array
 */
function sswcmaat_my_account_menu_items( $items ) {
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
					if ( in_array( $row->slug, array( 'dashboard', 'orders', 'downloads', 'edit-account', 'edit-address', 'customer-logout' ) ) ) {
						unset( $items[ $row->slug ] );
					}
					$items[ $row->slug ] = $row->name;
				}
			}
		}
	}
	return $items;
}

add_filter( 'woocommerce_account_menu_items', 'sswcmaat_my_account_menu_items' );