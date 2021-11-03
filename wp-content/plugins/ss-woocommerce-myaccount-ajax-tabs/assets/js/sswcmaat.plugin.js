/**
 * sswcmaat.plugin.js
 * Custom JavaScript code required by the plugin
 *
 * @version 2.1.0
 */
jQuery(function ($) {

    'use strict';

    /**
     * Adds more link to the tabs when narrow layout
     *
     * https://css-tricks.com/container-adapting-tabs-with-more-button/
     */
    function sswcmaat_morelink() {
        var container = $('.woocommerce-MyAccount-navigation'),
            primary = container.find(' > ul'),
            primaryHTML = primary.html(),
            primaryItems = container.find('ul > li:not(.-more)'),
            secondary,
            secondaryItems,
            allItems,
            moreLi,
            moreBtn,
            stopWidth,
            hiddenItems,
            primaryWidth;

        container.addClass('--jsfied');

        // insert "more" button and duplicate the list
        primary.append('<li class="-more"><button type="button" aria-haspopup="true" aria-expanded="false">' + sswcmaat_localize.more_text + '<span class="arrow"></span></button><ul class="-secondary">' + primaryHTML + '</ul></li>');

        $(document).trigger("sswcmaat-morelink-added");

        secondary = container.find('.-secondary');
        secondaryItems = secondary.find('li');
        allItems = container.find('li');
        moreLi = primary.find('.-more');
        moreBtn = moreLi.find('button');

        moreBtn.on('click', function (e) {
            e.preventDefault();
            container.toggleClass('--show-secondary');
            moreBtn.attr('aria-expanded', container.hasClass('--show-secondary'));
        });

        function doAdapt() {
            // Remove hidden class
            allItems.removeClass('--hidden');

            /* Set the matchMedia */
            if ($('body').hasClass('tabs-vertical')) {
                if (window.matchMedia('(min-width: 768px)').matches) {
                    moreBtn.hide();
                    container.removeClass('--show-secondary');
                } else {
                    moreBtn.show();
                    container.addClass('--show-secondary');
                }
            }

            // hide items that won't fit in the Primary
            stopWidth = moreBtn.outerWidth();
            hiddenItems = [];
            primaryWidth = primary.outerWidth();
            $.each(primaryItems, function (i) {
                var item = $(this),
                    itemWidth = item.outerWidth();
                if (primaryWidth >= stopWidth + itemWidth) {
                    stopWidth += itemWidth;
                } else {
                    item.addClass('--hidden');
                    hiddenItems.push(i);
                }
            });

            // toggle the visibility of More button and items in Secondary
            if (!hiddenItems.length) {
                moreLi.addClass('--hidden');
                container.removeClass('--show-secondary');
                moreBtn.attr('aria-expanded', false);
            } else {
                $.each(secondaryItems, function (i) {
                    if (($.inArray(i, hiddenItems) === -1)) {
                        $(this).addClass('--hidden');
                    }
                });
            }
        }

        doAdapt();

        $(window).on('resize', function () {
            doAdapt();
        });

        // Close submenu when clicking on body
        $(document).on('click', function () {
            container.removeClass('--show-secondary');
            moreBtn.attr('aria-expanded', false);
        });

        // Stop propagation for more link and submenu
        $(document).on('click', '.woocommerce-MyAccount-navigation > ul > li.-more > .-secondary, .woocommerce-MyAccount-navigation > ul > li.-more > button', function (e) {
            e.stopPropagation();
        });
    }

    if (!sswcmaat_localize.disable_css && !sswcmaat_localize.disable_more) {
        sswcmaat_morelink();
    }

    function sswcmaat() {
        var requestRunning = false,
            links = (sswcmaat_localize !== 'undefined' && sswcmaat_localize.internal_links) ? ".woocommerce-MyAccount-navigation > ul > li:not('.woocommerce-MyAccount-navigation-link--back-to-memberships') > a, .myaccount-menu > li > a, .myaccount-submenu li a, a.sswcmaat-ajax-link, .my_account_orders a:not('.track-button, .ywcars_button_refund, .mwb_track_order'), .woocommerce-Addresses a.edit, .woocommerce-order-details a:not('.ywcars_button_refund, .button-primary'), .woocommerce-order-details > p > a:not('.order-again'), .woodmart-my-account-links > div:not('.logout-link') > a" : ".woocommerce-MyAccount-navigation > ul > li:not('.woocommerce-MyAccount-navigation-link--back-to-memberships') > a, .myaccount-menu > li > a, .myaccount-submenu li a, .woodmart-my-account-links > div:not('.logout-link') > a",
            exclude = (sswcmaat_localize !== 'undefined' && sswcmaat_localize.exclude_links) ? sswcmaat_localize.exclude_links : '',
            default_container = $('.woocommerce-MyAccount-content'),
            yith_container = $('#my-account-content'),
            container = $(yith_container).length ? yith_container : default_container,
            endpoint = $(yith_container).length ? ' #my-account-content' : ' .woocommerce-MyAccount-content',
            link_text = $('.woocommerce-MyAccount-navigation > ul > li.is-active > a, .myaccount-menu > li.active > a, .myaccount-submenu > li.active > a').text(),
            account_nav = $('.woocommerce-MyAccount-navigation > ul, .myaccount-menu, .myaccount-submenu, .woocommerce-MyAccount-navigation .-secondary'),
            list_items = $(account_nav).find('li'),
            id = 'sswcmaat-' + $.trim(link_text).replace(/\s/g, "%20"),
            title_selector = (sswcmaat_localize !== 'undefined' && sswcmaat_localize.title_selector) ? sswcmaat_localize.title_selector : '.entry-title',
            morelinks;

        morelinks = $('.woocommerce-MyAccount-navigation > ul > li > ul.-secondary li a');

        links = links + ',.woocommerce-MyAccount-navigation > ul > li > ul.-secondary li a';

        if (sswcmaat_localize !== 'undefined' && sswcmaat_localize.extra_links) {
            links = links + ',' + sswcmaat_localize.extra_links;
        }

        $(list_items).each(function () {
            var txt = $(this).find('> a').text(),
                idd = 'sswcmaat-' + $.trim(txt).replace(/\s/g, "%20");
            $(this).addClass(idd);
        });
        // Set data loaded to true for first tab
        if (!sswcmaat_localize.disable_cache) {
            $('.woocommerce-MyAccount-navigation > ul > li.is-active > a, .myaccount-menu > li.active > a, .myaccount-submenu > li.active > a').attr('data-loaded', 'true');
        }
        // Update page heading text with current tab
        if (link_text) {
            $(title_selector).text(link_text);
        }

        // Update document title
        if (sswcmaat_localize.change_doc_title && link_text) {
            $(document).find('title').html(link_text + ' &ndash; ' + sswcmaat_localize.site_name);
        }

        // Wrap tab container
        $(container).wrapInner('<div class="sswcmaat-tab">');
        $(container).find('.sswcmaat-tab').attr('data-heading', link_text);

        // create dummy holder
        $(container).append('<div class="sswcmaat-loader">');
        $('.sswcmaat-tab').attr('id', id);

        if (links.length) {
            $(document).on('click', links, function (e) {
                // Do not ajaxify if it is a logout link
                if ($(this).parent().hasClass('woocommerce-MyAccount-navigation-link--customer-logout')) {
                    return;
                }
                if ($(this).is(exclude)) {
                    return;
                }
                e.preventDefault();
                var href = $(this).attr('href'),
                    btn = $(this),
                    btn_text = $(this).text(),
                    order_btn_txt = '',
                    id = 'sswcmaat-' + $.trim(btn_text).replace(/\s/g, "%20"),
                    to_show = '',
                    h_text = $(document).find(title_selector).text(),
                    target_class = '',
                    woo_info_msgs = '.woocommerce > .woocommerce-message, .woocommerce > .woocommerce-info, .woocommerce > .woocommerce-error';

                /**
                 * Check if it is a "View order" link
                 * The text for "View" order button is same in all buttons
                 * So append a unique order number
                 */
                if ($(this).is('.button.view')) {
                    order_btn_txt = sswcmaat_find_order_number($(this).attr('href'));
                    id = 'sswcmaat-view-' + order_btn_txt;
                }

                to_show = $(document.getElementById(id));

                if (!$(btn).data('loaded')) {

                    if (container.length) {
                        $(container).find('.sswcmaat-tab').hide();
                        $(container).addClass('sswcmaat-loading');
                        if (!sswcmaat_localize.custom_preloader && !sswcmaat_localize.ie_check) {
                            $(container).css({
                                "background-image": "none"
                            }).append('<div class="sswcmaat-loading-spinner"/>');
                        }
                        if (requestRunning) { // return if an ajax request is already running
                            return;
                        }
                        requestRunning = true;

                        // Remove error messages upon tab click
                        $(woo_info_msgs).hide();
                        $('.sswcmaat-tab').find(woo_info_msgs).show();
                        $('.load-error').remove();

                        $.ajax({
                            url: href,
                            timeout: (sswcmaat_localize !== 'undefined' && sswcmaat_localize.ajax_timeout) ? sswcmaat_localize.ajax_timeout : 30000,
                            error: function (response, jqXHR, textStatus) {

                                var not_loaded = sswcmaat_localize !== 'undefined' ? sswcmaat_localize.loading_error : '';

                                $(container).append('<div class="woocommerce-error load-error">' + not_loaded + ' ' + textStatus + '</div>');
                                $(container).removeClass('sswcmaat-loading');
                                /*$(account_nav).find('> li').removeClass('is-active active');
                                $(account_nav).find('a[href="' + active_li + '"]').parent('li').addClass('is-active active');*/
                                requestRunning = false;
                                return;

                            },
                            success: function (response) {

                                var content = $(response).find(endpoint),
                                    active_li = $(response).find('.woocommerce-MyAccount-navigation > ul > li.is-active > a').attr('href');

                                // Set data loaded to true only if caching enabled
                                if (!sswcmaat_localize.disable_cache) {
                                    $(btn).attr('data-loaded', 'true');
                                }
                                $(account_nav).find('> li').removeClass('is-active active');
                                $(account_nav).find('a[href="' + active_li + '"]').parent('li').addClass('is-active active');

                                if ($(this).is('.sswcmaat-ajax-link,.button.view')) {
                                    target_class = $(this).closest('.sswcmaat-tab').attr('id');
                                    $(account_nav).find('li.' + target_class).addClass('is-active active');
                                }

                                h_text = $(response).find(title_selector).text();

                                // Load response into container
                                $(container).find('.sswcmaat-loader').html($(content).html());

                                // extract loaded content and convert into tab
                                if ($(yith_container).length) {
                                    $(container).find('.sswcmaat-loader').addClass('sswcmaat-tab').removeClass('sswcmaat-loader').attr('id', id).attr('data-heading', btn_text);
                                } else {
                                    $(container).find('.sswcmaat-loader').addClass('sswcmaat-tab').removeClass('woocommerce-MyAccount-content').removeClass('sswcmaat-loader').attr('id', id).attr('data-heading', btn_text);
                                }

                                // add dummy holder for next content
                                $(container).append('<div class="sswcmaat-loader">');


                                // Update page heading text
                                $(title_selector).text(h_text);

                                // Update document title
                                if (sswcmaat_localize.change_doc_title) {
                                    $(document).find('title').html(btn_text + ' &ndash; ' + sswcmaat_localize.site_name);
                                }

                                // Update browser URL
                                if (sswcmaat_localize !== 'undefined' && !sswcmaat_localize.disable_history && history.pushState) {
                                    history.pushState({}, '', href);
                                }

                                requestRunning = false;

                                // Remove loading spinner
                                $(container).removeClass('sswcmaat-loading');

                                // trigger an event
                                $(document).trigger("sswcmaat-loaded");

                            } // success

                        });
                    } // container.length
                } // if not btn.data('loaded')
                else {

                    $(account_nav).find('> li').removeClass('is-active active');
                    $(account_nav).find('a[href="' + href + '"]').parent('li').addClass('is-active active');
                    if ($(this).is('.sswcmaat-ajax-link,.button.view')) {
                        target_class = $(this).closest('.sswcmaat-tab').attr('id');
                        $(account_nav).find('li.' + target_class).addClass('is-active active');
                    }
                    // hide all tabs and show the one whose link is clicked
                    $('.sswcmaat-tab').hide();
                    $(to_show).show();

                    // Update page heading text
                    $(title_selector).text(to_show.data('heading'));

                    // Update document title
                    if (sswcmaat_localize.change_doc_title) {
                        $(document).find('title').html(to_show.data('heading') + ' &ndash; ' + sswcmaat_localize.site_name);
                    }

                    // Update browser URL
                    if (sswcmaat_localize !== 'undefined' && !sswcmaat_localize.disable_history && history.pushState) {
                        history.pushState({}, '', href);
                    }
                }
            });
        } // links.length
    } // sswcmat

    if (sswcmaat_localize !== 'undefined' && !sswcmaat_localize.disable_ajax) {
        sswcmaat();
    }

    /**
     * Add support for YITH WooCommerce order tracking plugin
     * https://wordpress.org/plugins/yith-woocommerce-order-tracking/
     *
     * Re initiates the YITH JavaScript code on sswcmaat-loaded event
     */
    $(document).on('sswcmaat-loaded', function () {
        sswcmaat_yith_tracking_support();
    });

    function sswcmaat_yith_tracking_support() {
        if (jQuery().tooltipster) {

            $('.track-button').tooltipster();

            $(document).on('mouseover', 'a.track-button', (function () {
                $(this).tooltipster('content', $(this).attr('data-title'));
            }));

            if (typeof ywot !== 'undefined' && 1 !== ywot.p) {
                $(document).on('click', "a.track-button", (function (e) {
                    e.preventDefault();

                    $(this).tooltipster('content', $(this).attr('data-title'));
                }));
            }
        }

        var originalDefaultLabel = $("label[for='ywot_tracking_code']").text();
        var originalDefaultPlaceholder = $("#ywot_tracking_code").attr('placeholder');

        /*
        Change label and placeholder for BRT_WITH_PACKAGE_NUMBER carrier
         */
        jQuery('#ywot_carrier_id').on('change', function () {
            var label = '';
            var placeholder = '';
            var currentCarrier = $(this).val();
            if (currentCarrier === 'BRT_WITH_PACKAGE_NUMBER') {
                label = 'Package Number';
                placeholder = 'Enter package number';
            } else {
                label = originalDefaultLabel;
                placeholder = originalDefaultPlaceholder;
            }
            $("label[for='ywot_tracking_code']").text(label);
            $("#ywot_tracking_code").attr('placeholder', placeholder);
        });
    }

    function sswcmaat_find_order_number(href) {
        var url = href.split("/"),
            isLastSlash = (url[url.length - 1] == "/") ? true : false,
            order_num = url[url.length - (isLastSlash ? 2 : 1)];
        return order_num;
    }

}); //$