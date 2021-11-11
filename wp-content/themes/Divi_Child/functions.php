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
    //wp_enqueue_style( 'mon-compte', get_stylesheet_directory_uri() . '/assets/css/layout/mon-compte.css');
    wp_enqueue_style( 'panier', get_stylesheet_directory_uri() . '/assets/css/layout/panier.css');
    wp_enqueue_style( 'wishlist', get_stylesheet_directory_uri() . '/assets/css/layout/wishlist.css');
    wp_enqueue_style( 'boutique', get_stylesheet_directory_uri() . '/assets/css/layout/boutique.css');
    // Owl Carousel
    wp_enqueue_style( 'owl-carousel', get_stylesheet_directory_uri() . '/assets/css/owl.carousel.min.css');
    wp_enqueue_style( 'owl-theme-default', get_stylesheet_directory_uri() . '/assets/css/owl.theme.default.min.css');
    wp_enqueue_script('owl-carousel', get_stylesheet_directory_uri().'/assets/js/owl.carousel.min.js', array('jquery'), '0', true);
    // Fancybox
    wp_enqueue_script('fancybox', get_stylesheet_directory_uri().'/assets/js/fancybox.js', array('jquery'), '', true);
    wp_enqueue_style( 'fancyboxcss', get_stylesheet_directory_uri() . '/assets/css/jquery.fancybox.css' );
    // Detail produit
    wp_enqueue_script('tous-les-produits-js', get_stylesheet_directory_uri().'/assets/js/layout/tous_les_produits.js', array('jquery'), '0', true);
    wp_enqueue_style( 'detailproduit', get_stylesheet_directory_uri() . '/assets/css/layout/detailproduit.css' );
     // Menu Mobile
     wp_enqueue_script('menu-mobile-js', get_stylesheet_directory_uri().'/assets/js/layout/menu-mobile.js', array('jquery'), '0', true);
     wp_enqueue_style( 'menu-mobile', get_stylesheet_directory_uri() . '/assets/css/layout/menu-mobile.css' );
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


// Counter whishlist
if ( defined( 'YITH_WCWL' ) && ! function_exists( 'yith_wcwl_get_items_count' ) ) {
function yith_wcwl_get_items_count() {
   ob_start();
   ?>
   <span class="yith-wcwl-items-count counter">
       
     <?php echo esc_html( yith_wcwl_count_all_products() ); ?>
       
   </span>
   <?php
   return ob_get_clean();
  }
  add_shortcode( 'yith_wcwl_items_count', 'yith_wcwl_get_items_count' );
 }
 
 if ( defined( 'YITH_WCWL' ) && ! function_exists( 'yith_wcwl_ajax_update_count' ) ) {
  function yith_wcwl_ajax_update_count() {
   wp_send_json( array(
       'count' => yith_wcwl_count_all_products()
   ) );
  }
  add_action( 'wp_ajax_yith_wcwl_update_wishlist_count', 'yith_wcwl_ajax_update_count' );
  add_action( 'wp_ajax_nopriv_yith_wcwl_update_wishlist_count', 'yith_wcwl_ajax_update_count' );
 }
 
 if ( defined( 'YITH_WCWL' ) && ! function_exists( 'yith_wcwl_enqueue_custom_script' ) ) {
  function yith_wcwl_enqueue_custom_script() {
   wp_add_inline_script(
       'jquery-yith-wcwl',
       "
         jQuery( function( $ ) {
           $( document ).on( 'added_to_wishlist removed_from_wishlist', function() {
             $.get( yith_wcwl_l10n.ajax_url, {
               action: 'yith_wcwl_update_wishlist_count'
             }, function( data ) {
               $('.yith-wcwl-items-count').html( data.count );
             } );
           } );
         } );
       "
   );
  }
  add_action( 'wp_enqueue_scripts', 'yith_wcwl_enqueue_custom_script', 20 );
 }

// Page Product 

add_shortcode('prev_next_product', 'prev_next_product_shortcode');
 
function prev_next_product_shortcode(){
 
$output= '<div class="prev_next_buttons">';
 
    global $wp_query, $post;
    //$prev_post = get_adjacent_post( true, '', true, 'product_cat' );
    $prev_post = ( is_attachment() ) ? get_post( $post->post_parent ) : get_adjacent_post( false, '', true, 'product_cat' );
    $next_post = get_adjacent_post( true, '', false, 'product_cat' );


    if(!empty($prev_post)) {
        $output.= '<a class="leftthumb"  href="'. get_permalink($prev_post->ID) . '">'.get_the_post_thumbnail( $prev_post->ID, 'thumbnail', array( 'alt' => esc_html($prev_post->post_title) ) ).'<span>'.$prev_post->post_title.'</span>

        </a>';
    }

        if(!empty($next_post)) {
        $output.= '<a class="rightthumb" href="'. get_permalink($next_post->ID) . '">'.get_the_post_thumbnail( $next_post->ID, 'thumbnail', array( 'alt' => esc_html($next_post->post_title) ) ).'<span>'.$next_post->post_title.'</span>


        </a>';
    }


$output.= '</div>';      
return $output;
}


function product_gallery_images_shortcode(){
    $product = wc_get_product();
    $attachment_ids = $product->get_gallery_image_ids();
  $n=sizeof($attachment_ids);
  $limit=300;
    $output='<div class="product-gallery addclasscarousel">';
  $i= 0;
  for($i= 0;$i<$limit && $i<$n;$i++)
    {
     $attachment_id= $attachment_ids[$i];
      // Display the image URL
       $Original_image_url = wp_get_attachment_url( $attachment_id );
     $output .='<a class="view-gallery" rel="group'.$product->id.'" class="view-gallery" rel="group'.$product->id.'">
                '.wp_get_attachment_image($attachment_id, 'full', false, array(
                'itemprop'    => 'image',
            )).'
      </a>';
 
    }
    $output .= '</div>';
$output .= '<script>
        jQuery(document).ready(function(){
          jQuery("body.single-product #detail-produit .product-gallery a.view-gallery").fancybox();
        });
        </script>';
		
		 
 	$max_percentage = 0;
	if ($product->is_on_sale() )
	
	{
	   if ( $product->is_type( 'simple' ) ) {
		  $max_percentage = ( ( $product->get_regular_price() - $product->get_sale_price() ) / $product->get_regular_price() ) * 100;
	   } elseif ( $product->is_type( 'variable' ) ) {
		  $max_percentage = 0;
		  foreach ( $product->get_children() as $child_id ) {
			 $variation = wc_get_product( $child_id );
			 $price = $variation->get_regular_price();
			 $sale = $variation->get_sale_price();
			 if ( $price != 0 && ! empty( $sale ) ) $percentage = ( $price - $sale ) / $price * 100;
			 if ( $percentage > $max_percentage ) {
				$max_percentage = $percentage;
			 }
		  }
	   }
	}
	
	if ( $max_percentage > 0 ) $output .= "<span class='onsale'>PROMO -" . round($max_percentage) . "%</span>"; // If you would like to show -40% off then add text after % sign
	
	$product = wc_get_product();
   $title=$product->name;
   $post_link="http://localhost/caou/produit/".$product->slug;
	
	 $output .= '<div class="product-share"><div class="sharing-popup heateor_sss_sharing_container heateor_sss_vertical_sharing" heateor-sss-data-href="'.esc_attr($post_link).'"><ul class="heateor_sss_sharing_ul"><li class=""><i style="width:50px;height:50px;margin:0;" alt="Facebook" title="Facebook" class="heateorSssSharing heateorSssFacebookBackground" onclick="heateorSssPopup(&quot;https://www.facebook.com/sharer/sharer.php?u='.esc_attr($post_link).'&quot;)"><ss style="display:block;" class="heateorSssSharingSvg heateorSssFacebookSvg"></ss></i></li><li class=""><i style="width:50px;height:50px;margin:0;" alt="Twitter" title="Twitter" class="heateorSssSharing heateorSssTwitterBackground" onclick="heateorSssPopup(&quot;http://twitter.com/intent/tweet?text='.esc_html($title).'&amp;url='.esc_attr($post_link).'&quot;)"><ss style="display:block;" class="heateorSssSharingSvg heateorSssTwitterSvg"></ss></i></li><li class=""><i style="width:50px;height:50px;margin:0;" alt="Telegram" title="Telegram" class="heateorSssSharing heateorSssTelegramBackground" onclick="heateorSssPopup(&quot;https://telegram.me/share/url?url='.esc_attr($post_link).'&amp;text='.esc_html($title).'&quot;)"><ss style="display:block;" class="heateorSssSharingSvg heateorSssTelegramSvg"></ss></i></li><li class=""><i style="width:50px;height:50px;margin:0;" title="More" alt="More" class="heateorSssSharing heateorSssMoreBackground" onclick="heateorSssMoreSharingPopup(this, \''.esc_attr($post_link).'\', \''.esc_html($title).'\', \'\' )"><ss style="display:block" class="heateorSssSharingSvg heateorSssMoreSvg"></ss></i></li></ul><div class="heateorSssClear"></div></div></div>';

    return $output;
	
 
}
add_shortcode('product_gallery_images', 'product_gallery_images_shortcode');

function product_gallery_images_mobile_shortcode(){
    $product = wc_get_product();
    $attachment_ids = $product->get_gallery_image_ids();
  $n=sizeof($attachment_ids);
  $limit=300;
    $output='<div class="product-gallery owl-carousel carsouselfullproduct">';
  $i= 0;
  for($i= 0;$i<$limit && $i<$n;$i++)
    {

     $attachment_id= $attachment_ids[$i];
      // Display the image URL
       $Original_image_url = wp_get_attachment_url( $attachment_id );
     $output .='<a class="view-gallery" rel="group'.$product->id.'" class="view-gallery" rel="group'.$product->id.'">
            '.wp_get_attachment_image($attachment_id, 'full', false, array(
                'itemprop'    => 'image',
            )).'
      </a>';
      // Display Image instead of URL
      //$output .= wp_get_attachment_image($attachment_id, 'full');
    }
    $output .= '</div>';
$output .= '<script>
        jQuery(document).ready(function(){
          jQuery("body.single-product #detail-produit .product-gallery a.view-gallery").fancybox();
        });
        </script>';
    return $output;
	
	
}
add_shortcode('product_gallery_images_mobiles', 'product_gallery_images_mobile_shortcode');

//get year

function get_year_shortcode () {
  $year = date_i18n('Y');
  return $year;
}
add_shortcode ('year', 'get_year_shortcode');