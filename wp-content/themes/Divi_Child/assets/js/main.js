jQuery(document).ready(function($) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        //Remove Hover Text From All Images Using Code
        $("img").mouseenter(function() {
            let $lwp_title = $(this).attr("title");
            $(this).attr("lwp_title", $lwp_title);
            $(this).attr("title", "");
        }).mouseleave(function() {
            let $lwp_title = $(this).attr("lwp_title");
            $(this).attr("title", $lwp_title);
            $(this).removeAttr("lwp_title");
        });

        //Homepage testimonial
        jQuery('.home__testimonial .et_pb_blurb_content').each(function() {
            let $this = jQuery(this);
            $this.find('.et_pb_main_blurb_image').insertAfter($this.find('.et_pb_blurb_container'));
            $this.find('.et_pb_blurb_container>*').wrapAll('<div class="new__height" />');
        });
        jQuery('#testimonial .et_pb_column > .et_pb_blurb.home__testimonial').wrapAll('<div class="testimonial__carrousel owl-carousel owl-theme" />');

        setInterval(function() {
            if ((".testimonial__carrousel.owl-carousel").length) {
                jQuery('.testimonial__carrousel.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    autoplay: false,
                    autoplayTimeout: 10000,
                    autoplayHoverPause: false,
                    dots: false,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        500: {
                            items: 1,
                        },
                        768: {
                            items: 1,
                        }
                    }
                })
            }
        }, 1000);

        //Re-orginize petits-cadeaux elements order
        jQuery('.petits__cadeaux .et_pb_module.et_pb_blurb').each(function() {
            let $this = jQuery(this);
            let contentDestination = $this.find('.et_pb_image_wrap');
            let contentToMove = $this.find('.et_pb_blurb_container');
            contentDestination.prepend(contentToMove);
        });
        //Re-orginize papeterie elements order
        jQuery('.papeterie .et_pb_module.et_pb_blurb').each(function() {
            let $this = jQuery(this);
            let contentDestination = $this.find('.et_pb_image_wrap');
            let contentToMove = $this.find('.et_pb_blurb_container');
            contentDestination.prepend(contentToMove);
        });

        //Re-orginize résumer elements order page sur mesure
        jQuery('.disponible__section > div .et_pb_module.et_pb_blurb').each(function() {
            let $this = jQuery(this);
            let contentDestination = $this.find('.et_pb_image_wrap');
            let contentToMove = $this.find('.et_pb_blurb_container');
            contentDestination.prepend(contentToMove);
        });

        //Re-orginize articles content
        jQuery('.nos__articles .et_pb_ajax_pagination_container>article.et_pb_post:not(:first-child)').each(function() {
            let $this = jQuery(this);
            $this.find('>*:not(:first-child)').wrapAll('<div class="new_elements" />');
        });
        jQuery('.nos__articles .et_pb_ajax_pagination_container>article.et_pb_post:first-child>*:not(:first-child').wrapAll('<div class="new_elements" />');


        //Nos Article carrousel tablet mobile 
        jQuery('.nos__articles > .et_pb_ajax_pagination_container').addClass('owl-carousel');
        var ElWidth = jQuery(window).width();
        if (ElWidth < 981) {
            if ((".nos__articles > .et_pb_ajax_pagination_container.owl-carousel").length) {
                jQuery('.nos__articles > .et_pb_ajax_pagination_container.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    autoplay: false,
                    autoplayTimeout: 10000,
                    autoplayHoverPause: false,
                    dots: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        500: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        }
                    }
                })
            }
        }

        //Checkbox Validator
        /*
        jQuery('input#sib-email-checkbox').on("click", function() {
            var sibcheckbox = jQuery('input#sib-email-checkbox').is(':checked');
            if (sibcheckbox) {
                // it is checked
                jQuery('.sib-default-btn').prop("disabled", false);
                jQuery('.sib-default-btn').removeClass('disabled');
            } else {
                // it isn't checked	
                jQuery('.sib-default-btn').prop("disabled", true);
                jQuery('.sib-default-btn').addClass('disabled');
            }
        });
        */
        //Rearrange blurb position in html
        /*
        jQuery('#chaque__besoin .et_pb_module').each(function() {
            var currentColumn = jQuery(this);
            currentColumn.find('.et_pb_image_wrap').append(currentColumn.find('.et_pb_blurb_container'));
        });
        */

        //Dynamic Width contact left section
        /*
        let imgWidth = (jQuery('#contact_dynamic__image img').width());
        jQuery('#contact_dynamic__infos').css('max-width', imgWidth);
        */

        //Trigger input click when label click
        /*
        jQuery('#filtre-left-section .wpf_item_pa_matieres .wpf_column_vertical >li,#filtre-left-section .wpf_item_pa_collections .wpf_column_vertical >li').each(function() {
            var $this = jQuery(this);
            var currentLabel = $this.find('label');
            var currentInput = $this.find('input');
            currentLabel.click(function() {
                currentInput.click();
            });
        });
        */

        // order_review
        /*
        jQuery('#order_review').prepend(jQuery('h3#order_review_heading'));
        */

        // Wrap two prodcuts in one div homepage
        /*
        jQuery('.home__products__right .et_pb_shop_2, .home__products__right .et_pb_shop_3').wrapAll('<div class="wraped__products" />');
        */

        // Home Carrousel a chaque besoin
        /*
        jQuery('.section__besoin__mobile > div').addClass('owl-carousel owl-theme');
        var ElWidth = jQuery(window).width();
        if (ElWidth < 981) {
            setInterval(function() {
                if ((".section__besoin__mobile > div.owl-carousel").length > 0) {
                    jQuery('.section__besoin__mobile > div.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: false,
                        autoplay: false,
                        autoplayTimeout: 10000,
                        autoplayHoverPause: false,
                        dots: true,
                        responsive: {
                            0: {
                                items: 1,
                            },
                            500: {
                                items: 2,
                            },
                            768: {
                                items: 2,
                            }
                        }
                    })
                }
            }, 1000);
        }
        */


        // Rearrange wishlist & viewbutton place in HTML
        /*
        jQuery('.products .product').each(function() {
            let singleProduct = jQuery(this);
            let locationPoint = singleProduct.find('.et_shop_image');
            let addButton = singleProduct.find('a.button.add_to_cart_button');
            let wishlistButton = singleProduct.find('.yith-wcwl-add-to-wishlist');
            locationPoint.append(addButton, wishlistButton);
        });
        */

        //Images for filtre boutique
        /*
        if (jQuery('.woocommerce')[0]) {
            jQuery("#filtre-right-section .wpf_item > .wpf_column_horizontal > li").each(function() {
                var styleLabel = jQuery(this).find('label').attr('style');
                console.log(styleLabel);
                styleLabel = jQuery.trim(styleLabel.split(";")[0]);
                var urlpicture = "" + styleLabel.split(":")[1] + ':' + styleLabel.split(":")[2] + "";
                var tempId = jQuery(this).find('input').attr('id');
                var htmlTemp = "#filtre-right-section #" + tempId + ":before{background-image: " + urlpicture + " !important;}";
                jQuery("<style>")
                    .prop("type", "text/css")
                    .html(htmlTemp)
                    .appendTo("head");
            });
        }
        */
    }

});

jQuery(document).ajaxComplete(function(event, request, settings) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        // Rearrange wishlist & viewbutton place in HTML When Ajax change with Check!
        /*
        if (jQuery('.products .product .et_shop_image > a.button.yith-wcqv-button').length <= 0) {
            // Rearrange wishlist & viewbutton place in HTML
            jQuery('.products .product').each(function() {
                let singleProduct = jQuery(this);
                let locationPoint = singleProduct.find('.et_shop_image');
                let addButton = singleProduct.find('a.button.add_to_cart_button');
                let wishlistButton = singleProduct.find('.yith-wcwl-add-to-wishlist');
                locationPoint.append(addButton, wishlistButton);
            });
        }
        */
    }
});

jQuery(window).resize(function($) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {}
});