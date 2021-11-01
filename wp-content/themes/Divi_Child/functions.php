<?php

/**
 * Loading the parent theme css.
 */
add_action( 'wp_enqueue_scripts', 'divi_child_load_parent_css' );

function divi_child_load_parent_css() {
	wp_enqueue_style( 'divi-parent-style', get_template_directory_uri() . '/style.css', false, '' );
}

// Add Custom CSS Files
function my_enqueue_front_scripts(){  
    // Main JS
    wp_enqueue_script('main-js', get_stylesheet_directory_uri().'/assets/js/main.js', array('jquery'), '0', true);
    // Global CHECKBOX & RADIO BUTTONS 
    wp_enqueue_style( 'mep', get_stylesheet_directory_uri() . '/assets/css/mep.css');
    // WOOCOMMERCE
    wp_enqueue_style( 'mon-compte', get_stylesheet_directory_uri() . '/assets/css/layout/mon-compte.css');
    wp_enqueue_style( 'panier', get_stylesheet_directory_uri() . '/assets/css/layout/panier.css');
    wp_enqueue_style( 'wishlist', get_stylesheet_directory_uri() . '/assets/css/layout/wishlist.css');
    wp_enqueue_style( 'boutique', get_stylesheet_directory_uri() . '/assets/css/layout/boutique.css');
    // Owl Carousel
    wp_enqueue_style( 'owl-carousel', get_stylesheet_directory_uri() . '/assets/css/owl.carousel.min.css');
    wp_enqueue_style( 'owl-theme-default', get_stylesheet_directory_uri() . '/assets/css/owl.theme.default.min.css');
    wp_enqueue_script('owl-carousel', get_stylesheet_directory_uri().'/assets/js/owl.carousel.min.js', array('jquery'), '0', true);
}

add_action('wp_enqueue_scripts', 'my_enqueue_front_scripts');

// Add Counter 
function iconic_cart_count_fragments( $fragments ) {
    $fragments['.counter'] = ' <span class="counter">' . WC()->cart->get_cart_contents_count() . '</span>';
    return $fragments;
}

add_filter( 'woocommerce_add_to_cart_fragments', 'iconic_cart_count_fragments', 10, 1 );

// Add "Add to Cart" buttons in Divi shop pages
add_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 20 );

// PlaceHolders for Woocommerce inputs
add_filter('woocommerce_default_address_fields', 'override_address_fields');
function override_address_fields( $address_fields ) {
  $address_fields['first_name']['placeholder'] = 'Prenom *';
  $address_fields['last_name']['placeholder'] = 'Nom *';
  $address_fields['company']['placeholder'] = 'Nom de l\'entreprise (facultatif)';
  $address_fields['address_1']['placeholder'] = 'Numéro et nom de la rue *';
  $address_fields['postcode']['placeholder'] = 'Code postal *';
  $address_fields['city']['placeholder'] = 'Ville *';
  $address_fields['state']['placeholder'] = 'Région / Département  *';
  return $address_fields;
}

add_filter( 'woocommerce_billing_fields' , 'override_billing_fields' );
function override_billing_fields( $fields ) {
  $fields['billing_phone']['placeholder'] = 'Téléphone *';
  $fields['billing_email']['placeholder'] = 'Email *';
  return $fields;
}

/*
function wpse_287488_product_thumbnail_size( $size ) {
	global $product;
	if ( is_page(110) ) {
    	$size = 'full';
	}	
return $size;
}
add_filter( 'single_product_archive_thumbnail_size', 'wpse_287488_product_thumbnail_size' );
*/

// Disable responsive wishlist view
add_filter( 'yith_wcwl_is_wishlist_responsive', '__return_false' );

// hide divi den pro 
add_action('admin_head', 'my_custom_fonts');
function my_custom_fonts() {
  echo '<style>
 #main_options_form #epanel-mainmenu a {
    color: #6c2eb9;
}
li#toplevel_page_divi_den_pro_dashboard {
    display: none;
}
.ddp-assistant button.et-common-button.ddp-tb-main-button {
    display: none;
}
.ddp-assistant h3#divi-tb-header {
    display: none;
}
iframe#ondemanIframe {
    display: none !important;
}
#main_options_form #epanel-mainmenu li.ui-state-active a {
    color: #fff;
}
#et-fb-app .et-fb-settings-tabs-nav li:last-child {
    display:none !important;
}
#main_options_form~#epanel-mainmenu li:hover a {
    color: #fff;
}
#main_options_form #epanel-mainmenu li:hover a{
    color:#fff;
}
  </style>';
}
