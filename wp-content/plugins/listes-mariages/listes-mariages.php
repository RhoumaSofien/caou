<?php
/**
* Plugin Name: Listes Mariages
* Plugin URI: https://e-voluer.com/
* Description: Le plugin permet à vos clients de créer des listes de mariages
* Version: 1.0
* Author: e-voluer.com
* Author URI: https://e-voluer.com/
**/


function cptui_register_my_cpts_listes_mariages() {

	/**
	 * Post Type: Listes mariages.
	 */

	$labels = [
		"name" => __( "Listes mariages", "custom-post-type-ui" ),
		"singular_name" => __( "Liste mariage", "custom-post-type-ui" ),
	];

	$args = [
		"label" => __( "Listes mariages", "custom-post-type-ui" ),
		"labels" => $labels,
		"description" => "Créer une liste de mariage",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => true,
		"rewrite" => [ "slug" => "listes_mariages", "with_front" => true ],
		"query_var" => true,
		"menu_icon" => "dashicons-list-view",
		"supports" => [ "title", "editor", "thumbnail", "excerpt", "trackbacks", "custom-fields", "revisions", "author", "page-attributes" ],
		"taxonomies" => [ "category", "post_tag" ],
		"show_in_graphql" => false,
	];

	register_post_type( "listes_mariages", $args );
}

add_action( 'init', 'cptui_register_my_cpts_listes_mariages' );

function cptui_register_my_taxes() {

	/**
	 * Taxonomy: listes mariages.
	 */

	$labels = [
		"name" => __( "listes mariages", "custom-post-type-ui" ),
		"singular_name" => __( "liste mariage", "custom-post-type-ui" ),
	];

	
	$args = [
		"label" => __( "listes mariages", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => false,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'listes_mariages', 'with_front' => true, ],
		"show_admin_column" => true,
		"show_in_rest" => true,
		"show_tagcloud" => false,
		"rest_base" => "listes_mariages",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
		"show_in_graphql" => false,
	];
	register_taxonomy( "listes_mariages", [ "listes_mariages" ], $args );
}
add_action( 'init', 'cptui_register_my_taxes' );

function cptui_register_my_taxes_listes_mariages() {

	/**
	 * Taxonomy: listes mariages.
	 */

	$labels = [
		"name" => __( "listes mariages", "custom-post-type-ui" ),
		"singular_name" => __( "liste mariage", "custom-post-type-ui" ),
	];

	
	$args = [
		"label" => __( "listes mariages", "custom-post-type-ui" ),
		"labels" => $labels,
		"public" => true,
		"publicly_queryable" => true,
		"hierarchical" => false,
		"show_ui" => true,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"query_var" => true,
		"rewrite" => [ 'slug' => 'listes_mariages', 'with_front' => true, ],
		"show_admin_column" => true,
		"show_in_rest" => true,
		"show_tagcloud" => false,
		"rest_base" => "listes_mariages",
		"rest_controller_class" => "WP_REST_Terms_Controller",
		"show_in_quick_edit" => false,
		"show_in_graphql" => false,
	];
	register_taxonomy( "listes_mariages", [ "listes_mariages" ], $args );
}
add_action( 'init', 'cptui_register_my_taxes_listes_mariages' );
