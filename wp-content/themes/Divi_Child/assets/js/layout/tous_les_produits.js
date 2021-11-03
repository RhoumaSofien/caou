jQuery(document).ready(function($) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        // Product modal popup
        if (jQuery("#detail-produit").length) {
            jQuery("span.close").click(function() {
                jQuery("#myModal").css("display", "none");
                jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
                jQuery("#myBtn").css("opacity", "0");
                jQuery(".single-product,html").removeClass("autorizescoll");
                jQuery('#et-main-area').removeClass('higher-index');
                jQuery('header').removeClass('lower-index');
                jQuery("button#myBtn").css("display", "none");
                history.pushState("", document.title, window.location.pathname);
                // parent.location.hash = ''
            });

            $(window).click(function(e) {
                if (e.target == "#myModal") {
                    jQuery("#myModal").css("display", "none");
                    jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
                }
            });


            jQuery('.single-product .et_pb_all_tabs .et_pb_tab ').hide();
            jQuery(".single-product .et_pb_tabs_controls  li").click(function() {
                jQuery("button#myBtn").css("display", "block");
                jQuery("#myModal").css("display", "block");
                jQuery("#myModal").css("display", "block");
                jQuery("#myBtn").css("opacity", "1");
                jQuery(".single-product,html").addClass("autorizescoll");
                jQuery('#et-main-area').addClass('higher-index');
                jQuery('header').addClass('lower-index');
                jQuery('.modal-content p').empty();

                var index = jQuery(".single-product .et_pb_tabs_controls  li").index(this);
                var tab0 = jQuery('.single-product .et_pb_all_tabs .et_pb_tab ').eq(index).first("div").get(0).outerHTML;
                jQuery('.modal-content p').append(tab0);

                jQuery('.modal-content p .et_pb_tab ').css("opacity", "1");
                jQuery('#myModal .modal-content p .et_pb_tab').css("display", "block");

            });

        }
    }
});

//js modal tabs product*/

jQuery(document).mousedown(function(e) {
    if (jQuery("#detail-produit").length) {

        var element = jQuery("#myModal");
        if (!element.is(e.target) && element.has(e.target).length === 0) {
            jQuery("#myModal").css("display", "none");
            jQuery("button#myBtn").css("display", "none");
            jQuery(".single-product,html").removeClass("autorizescoll");
            jQuery('#et-main-area').removeClass('higher-index');
            jQuery('header').removeClass('lower-index');
            jQuery('.et_pb_all_tabs .et_pb_tab ').hide();
            parent.location.hash = '';
        }
    }
});

jQuery(window).resize(function() {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        let imgWidth = (jQuery('#contact_dynamic__image img').width());
        jQuery('#contact_dynamic__infos').css('max-width', imgWidth);
    }
});

// Position product in middle 
jQuery(document).ready(function() {
    adjustElement(jQuery(window).width() > 980);
});
jQuery(window).resize(function() {
    adjustElement(jQuery(window).width() > 980);
});

function adjustElement(bool) {
    if (bool) {
        let imgHeight = (jQuery('.product-gallery.addclasscarousel a.view-gallery:first-child > img').outerHeight() / 2);
        let prodShare = (jQuery('.product-share'));
        let pnButtons = (jQuery('.prev_next_buttons').outerHeight() / 2);
        let newTop = imgHeight - pnButtons;
        let newShareTop = (imgHeight * 2) - 80;
        jQuery('.prev_next_buttons').css('top', newTop);
        prodShare.css('top', newShareTop);
    } else {
        let imgHeight = (jQuery('.product-gallery.owl-carousel a.view-gallery:first-child > img').outerHeight() / 2);
        let prodShare = (jQuery('.product-share'));
        let pnButtons = (jQuery('.prev_next_buttons').outerHeight() / 2);
        let newTop = imgHeight - pnButtons;
        let newShareTop = (imgHeight * 2) - 80;
        jQuery('.prev_next_buttons').css('top', newTop);
        prodShare.css('top', newShareTop);
    }
}