!function(e){var o=1500;e("body").hasClass("et-fb")&&(o=1e4),ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(o=8e3),setTimeout(function(){if(0!==e("body .freddie_lover_boy_menu_container").length){if(e("#custom-ddpdm-menu").css("cssText","z-index: 99 !important;     position: relative;"),e(".freddie_earth_menu_content ").each(function(){e(this).insertAfter(e(".freddie_lover_boy_menu .et_pb_fullwidth_menu"))}),e("body:not(.et-fb) .freddie_lover_boy_menu_container").hasClass("fixed")){e("body:not(.et-fb) .freddie_earth_menu").addClass("fixed");var o=e(".freddie_lover_boy_menu_container").outerHeight();e("#et-main-area").css("padding-top",o+"px")}e(".freddie_lover_boy_menu_container .freddie_menu_icon");var n=e(".freddie_lover_boy_menu_container .line.line_01_btn_menu"),t=e(".freddie_lover_boy_menu_container .line.line_02_btn_menu"),_=e(".freddie_lover_boy_menu_container .line.line_03_btn_menu");function r(){TweenMax.to(t,.2,{delay:.6,scale:1}),TweenMax.to(n,.2,{y:0,rotation:0,ease:Back.easeOut,delay:.2}),TweenMax.to(_,.3,{top:14,y:0,rotation:0,ease:Back.easeOut,delay:.4})}r();var i=e(".freddie_lover_boy_menu .et_pb_fullwidth_menu .fullwidth-menu > li.menu-item").toArray();0!==e(".freddie_lover_boy_menu .et_pb_promo_description p").length?e(".freddie_lover_boy_menu .et_pb_promo_description p").addClass("circle_text"):(e(".freddie_lover_boy_menu .et_pb_promo_description").contents().filter(function(){return 3===this.nodeType}).wrap("<div class='circle_text'></div>"),e(".freddie_lover_boy_menu .et_pb_promo_description").find(".circle_text:nth-child(1)").remove());var a=e(".freddie_lover_boy_menu .et_pb_promo_description .circle_text").text();a=a.replace(/ /g,"&nbsp;"),e(".freddie_lover_boy_menu .et_pb_promo_description .circle_text").html(a);for(var d=new SplitText(".freddie_lover_boy_menu .et_pb_promo_description .circle_text",{type:"chars",charsClass:"char char++",position:"absolute"}),l=e(".freddie_lover_boy_menu .char"),s=0;s<l.length;s++)l[s].style.display="inline",l[s].style.width="100%",l[s].style.top=0,l[s].style.left=0;var c=new TimelineLite,u=d.chars,m=e(".freddie_lover_boy_menu .et_pb_promo_description .circle_text");TweenLite.set(".freddie_lover_boy_menu .et_pb_promo_description .circle_text",{perspective:400});var p=l.length,f=350/p;for(s=1;s<=p;s++)e(".freddie_lover_boy_menu .et_pb_promo_description .char:nth-child("+s+")").css("transform","rotate("+f*s+"deg)");c.to(m,30,{rotation:"360",repeat:-1,ease:Linear.easeNone},0),e(".freddie_lover_boy_menu_container .freddie_menu_icon").on("click",function(){e(".freddie_lover_boy_menu_container").hasClass("opened")?e(".freddie_lover_boy_menu_container").hasClass("opened")&&(!function(){e(".freddie_lover_boy_menu_container").removeClass("opened");var o=e(".freddie_lover_boy_menu");TweenMax.to(o,.2,{x:"310px",delay:0},0),TweenMax.staggerTo(i,.3,{marginLeft:"100px",opacity:0},.1),(new TimelineLite).staggerTo(u,1.5,{opacity:0,scale:.8,ease:Back.easeOut},.02),setTimeout(function(){e("body").removeClass("menu_opened")},500)}(),r()):(!function(){e(".freddie_lover_boy_menu_container").addClass("opened");var o=e(".freddie_lover_boy_menu");TweenMax.to(o,.4,{x:0}),TweenMax.staggerTo(i,.3,{marginLeft:"0",opacity:1},.1),(new TimelineLite).staggerTo(u,1.5,{opacity:1,scale:1,ease:Back.easeOut},.02),e("body").addClass("menu_opened")}(),TweenMax.to(t,.2,{delay:.2,scale:0}),TweenMax.to(n,.2,{y:7,rotation:45,ease:Back.easeOut,delay:.5}),TweenMax.to(_,.3,{top:0,y:7,rotation:-45,ease:Back.easeOut,delay:.7}))}),setTimeout(function(){var o=e(".freddie_lover_boy_menu_container ").outerHeight();e(".freddie_lover_boy_menu").css("padding-top",o+"px")},1e3)}},o)}(jQuery);