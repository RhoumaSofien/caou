jQuery(document).ready(function($) {
    if (!jQuery('iframe.et-core-frame', window.parent.document).length) {
        var ElWidth = jQuery(window).width();
        if (ElWidth < 981) {
            setTimeout(function() {
                let destination = jQuery('#mobile_menu1');
                let socialLinks = jQuery('#header-links')
                destination.prepend(socialLinks);
                socialLinks.clone().appendTo("#mobile_menu1");
            }, 1000);
        }
    }
});