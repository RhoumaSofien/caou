!function(n){var a=200;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(a=5e3),n("body").hasClass("et-fb")&&(a=5e3),setTimeout(function(){0!=n(".ragnar_menu_giants").length&&n("#custom-ddp-menu").css("cssText","z-index: 99 !important;     position: relative;"),n(".ragnar_menu_giants_container").append('<div id="ragnar_menu_giants_overlay"></div>'),n(".ragnar_menu_giants .fullwidth-menu > li > a").wrapInner("<span></span>"),n(".ragnar_menu_giants .et_pb_menu ul.et-menu > li > a").wrapInner("<span></span>"),n(".ragnar_menu_giants_container .ragnar_menu_icon").on("click",function(){var a,e,t,i,s,r;n(".ragnar_menu_giants_container").hasClass("opened")?n(".ragnar_menu_giants_container").hasClass("opened")&&(a=n(".ragnar_menu_giants"),e=n(".ragnar_menu_giants .fullwidth-menu"),t=n("#ragnar_menu_giants_overlay"),n(".ragnar_menu_giants_container").removeClass("opened"),n(".ragnar_menu_giants ").removeClass("opened_menu"),n(".ragnar_menu_giants .fullwidth-menu li").css("transition-delay","0s"),TweenMax.to(a,0,{y:"-150%",top:"0%"}),TweenMax.to(e,0,{display:"none"}),TweenMax.to(t,.3,{top:"101%"}),TweenMax.to(t,0,{top:"-101%",delay:.5}),function(){var a=n(".line_01"),e=n(".line_02"),t=n(".line_03");TweenMax.to(a,.3,{rotation:"0",y:0}),TweenMax.to(e,.3,{rotation:"0",y:0}),TweenMax.to(t,.3,{opacity:1})}()):(!function(){n(".ragnar_menu_giants_container").addClass("opened"),n(".ragnar_menu_giants ").addClass("opened_menu");for(var a=.3,e=n(".ragnar_menu_giants.opened_menu .fullwidth-menu li").length;e>0;e--)n(".ragnar_menu_giants.opened_menu .fullwidth-menu li:nth-last-child("+e+")").css("transition-delay",a+"s"),a+=.13;var t=n(".ragnar_menu_giants"),i=n(".ragnar_menu_giants .fullwidth-menu"),s=n("#ragnar_menu_giants_overlay");TweenMax.to(t,.4,{y:"0%",top:"0%"}),TweenMax.to(i,.3,{display:"block"}),TweenMax.to(s,.3,{top:"0%"});var r=n(window).height(),_=n(".ragnar_menu_giants").css("margin-top");_=parseInt(_,10),n(".ragnar_menu_giants").css("max-height",r-_+"px")}(),i=n(".line_01"),s=n(".line_02"),r=n(".line_03"),TweenMax.to(i,.3,{rotation:"-45",y:7}),TweenMax.to(s,.3,{rotation:"45",y:1}),TweenMax.to(r,.3,{opacity:0}))});var a=1;n(".ragnar_menu_giants .et_pb_blurb").each(function(){n(this).prepend(n('<div class="astrid-content-shapes-'+a+'"><div class="astrid-content-shapes-'+a+'-shape-1"></div><div class="astrid-content-shapes-'+a+'-shape-2"></div></div>')),4===a&&(n('<div class="astrid-4-inner-shape"></div>').appendTo(n(this).find(".astrid-content-shapes-4-shape-1")),n('<div class="astrid-4-inner-shape"></div>').appendTo(n(this).find(".astrid-content-shapes-4-shape-2"))),a+=1}),setTimeout(function(){n(window).width()<=980&&n(window).width()>767?n(".ragnar_menu_giants .et_pb_column:first-child").insertAfter(n(".ragnar_menu_giants .menu_col ")):n(window).width()<=767&&n(".ragnar_menu_giants .et_pb_row").prepend(n(".ragnar_menu_giants .menu_col "))},1e3)},a)}(jQuery);