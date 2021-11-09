(function ($) {
    function isIE() {
        ua = navigator.userAgent;
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }

    var ragnarTabsCarine  = 1000;

    if (isIE()) {
        ragnarTabsCarine = 10000;
    }

    if ($('body').hasClass('et-fb')) {
        ragnarTabsCarine = 10000;
    }

    setTimeout(function () {


        if($('.ragnar_tabs_carine').length !== 0) {
            // if ($(window).width() > 980) {
            //     var navheight = $('.ragnar_tabs_carine_navigation').height();
            //     $('.carine_tabs_tab').css('top', '-' + navheight + 'px');
            // }

            $('.carine-blog .et_pb_post').each(function () {
                $(this).find('a[rel="tag"]').wrapAll('<div class="carine-cat-moved post-meta"></div>');
                $(this).find('.carine-cat-moved').insertBefore($(this).find('.entry-title'));
            });

            $('.ragnar_tabs_carine_navigation a').on('click touchstart', function () {
                $('.ragnar_tabs_carine_navigation a').removeClass('active');
                $(this).addClass('active');
            });


            function ragnarTabsCarine() {
                var windowHeight = $(window).height();
                var scrollTopSize = $(window).scrollTop();


                $('.ragnar_tabs_carine .et_pb_row:not(.ragnar_tabs_carine_navigation )').each(function () {
                    var rowId = $(this).attr('id')

                    var elementTop = $(this).offset().top;
                    if (rowId && parseInt(elementTop) <= parseInt(scrollTopSize) + parseInt(windowHeight) / 2) {


                        $('.ragnar_tabs_carine .ragnar_tabs_carine_navigation .et_pb_text a').each(function () {
                            var liText = $(this).attr('href').replace(/\#/g, '');

                            if (rowId === liText) {
                                if ($(this).attr('active-item') != 'active') {
                                    $('.ragnar_tabs_carine .ragnar_tabs_carine_navigation .et_pb_text a').attr('active-item', '');
                                    $(this).attr('active-item', 'active');
                                }
                            }
                        })
                    }
                })

                $('.ragnar_tabs_carine .ragnar_tabs_carine_navigation .et_pb_text a').removeClass('active');
                $('.ragnar_tabs_carine .ragnar_tabs_carine_navigation .et_pb_text a[active-item="active"]').addClass('active');
            }

            ragnarTabsCarine()

            $(window).scroll(function () {
                ragnarTabsCarine();
            });



            var offset = $('.ragnar_tabs_carine').offset();
            var navParent = $('.ragnar_tabs_carine .et_pb_row.ragnar_tabs_carine_navigation');
            var nav = navParent.find('.et_pb_text');
            var tmp = navParent.find('.et_pb_text').clone().attr('class', 'tmp').css('visibility', 'hidden');

            window.addEventListener('scroll', function() {

                if ($(window).scrollTop() > offset.top  && $('.ragnar_tabs_carine .et_pb_row:nth-last-child(1)').offset().top  >= $(window).scrollTop()) {
                    navParent.append(tmp);
                    nav.css({'position': 'fixed', 'top': 0, 'transform': 'translate(0, 120px)'});
                } else if($('.ragnar_tabs_carine .et_pb_row:nth-last-child(1)').offset().top  < $(window).scrollTop()){
                    var rowsHeight = $('.ragnar_tabs_carine .et_pb_row:nth-last-child(1)').outerHeight()
                    navParent.append(tmp);
                    nav.css({'position': 'static', 'top': '', 'transform': 'translate(0, '+ ($('.ragnar_tabs_carine').outerHeight() - rowsHeight) +'px)'});
                } else {
                    navParent.find('.tmp').remove();
                    nav.css({'position': 'static', 'top': '', 'transform': 'translate(0, 0px)'});
                }
            });

        }
        }, ragnarTabsCarine);

})(jQuery);