!function(e){var n=1500;e("body").hasClass("et-fb")&&(n=1e4),ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(n=8e3),setTimeout(function(){if(0!==e(".freddie_funny_love_menu").length){if(e("#custom-ddpdm-menu").css("cssText","z-index: 99 !important;     position: relative;"),e(".freddie_funny_love_menu_content ").each(function(){e(this).insertBefore(e(".freddie_funny_love_menu .et_pb_fullwidth_menu "))}),e(".freddie_funny_love_menu_content .et_pb_blurb ").hover(function(){e(".freddie_funny_love_menu").addClass("hovered")},function(){e(".freddie_funny_love_menu").removeClass("hovered")}),e("body:not(.et-fb) .freddie_funny_love_menu_container").hasClass("fixed")){e("body:not(.et-fb) .freddie_funny_love_menu").addClass("fixed");var n=e(".freddie_funny_love_menu_container").outerHeight();e("#et-main-area").css("padding-top",n+"px")}e(".freddie_funny_love_menu_container .freddie_menu_icon");var t=e(".freddie_funny_love_menu_container .line.line_01_btn_menu"),o=e(".freddie_funny_love_menu_container .line.line_02_btn_menu"),_=e(".freddie_funny_love_menu_container .line.line_03_btn_menu");function i(){TweenMax.to(o,.2,{delay:1,scale:1}),TweenMax.to(t,.2,{y:0,rotation:0,ease:Back.easeOut,delay:.5}),TweenMax.to(_,.3,{top:17,y:0,rotation:0,ease:Back.easeOut,delay:.7})}i();var a=e(".freddie_funny_love_menu .et_pb_fullwidth_menu .fullwidth-menu > li.menu-item").toArray(),d=e(".freddie_funny_love_menu .et_pb_blurb").toArray();e(".freddie_funny_love_menu .et_pb_fullwidth_menu .fullwidth-menu-nav ul li").on("click",function(){var n=e(this).find("a").attr("href");window.location.href=n}),e(".freddie_funny_love_menu_container .freddie_menu_icon").on("click",function(){e(".freddie_funny_love_menu_container").hasClass("opened")?e(".freddie_funny_love_menu_container").hasClass("opened")&&(!function(){e(".freddie_funny_love_menu_container").removeClass("opened");var n=e(".freddie_funny_love_menu");TweenMax.staggerTo(a,.2,{y:"100px",opacity:0},.05),TweenMax.staggerTo(d,.2,{y:"100px",opacity:0},.05),TweenMax.to(n,.2,{top:"101%",opacity:0,delay:0},0),TweenMax.to(".freddie_funny_love_menu .et_pb_promo",.3,{opacity:0}),setTimeout(function(){e("body").removeClass("menu_opened")},500)}(),i()):(!function(){e(".freddie_funny_love_menu_container").addClass("opened");var n=e(".freddie_funny_love_menu");TweenMax.to(n,.4,{top:0,opacity:1}),TweenMax.to(".freddie_funny_love_menu .et_pb_promo",.8,{opacity:1,delay:1}),TweenMax.staggerTo(a,.3,{y:"0",opacity:1},.2),TweenMax.staggerTo(d,.4,{y:"0",opacity:1},.2),e("body").addClass("menu_opened")}(),TweenMax.to(o,.2,{delay:1,scale:0}),TweenMax.to(t,.2,{y:8.5,rotation:45,ease:Back.easeOut,delay:1.3}),TweenMax.to(_,.3,{top:0,y:8.5,rotation:-45,ease:Back.easeOut,delay:1.5}))}),e(".freddie_funny_love_menu .et_pb_promo_description").each(function(){0!==e(this).find("p").length?e(this).find("p").addClass("circle_text"):(e(this).contents().filter(function(){return 3===this.nodeType}).wrap("<div class='circle_text'></div>"),e(this).find(".circle_text:nth-child(1)").remove())});for(var r=new SplitText(".freddie_funny_love_menu .et_pb_promo_description .circle_text",{type:"chars",charsClass:"char char++",position:"absolute"}),u=e(".freddie_funny_love_menu .char"),f=0;f<u.length;f++)u[f].style.display="inline",u[f].style.width="100%",u[f].style.top=0,u[f].style.left=0;var l=new TimelineLite,s=(r.chars,e(".freddie_funny_love_menu .et_pb_promo_description .circle_text"));TweenLite.set(".freddie_funny_love_menu .et_pb_promo_description .circle_text",{perspective:400});var c=u.length,y=350/c;for(f=1;f<=c;f++)e(".freddie_funny_love_menu .et_pb_promo_description .char:nth-child("+f+")").css("transform","rotate("+y*f+"deg)");l.to(s,30,{rotation:"360",repeat:-1,ease:Linear.easeNone},0)}},n)}(jQuery);