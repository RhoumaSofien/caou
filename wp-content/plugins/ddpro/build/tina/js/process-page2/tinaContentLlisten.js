!function(t){var n=3e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(n=1e4),t("body").hasClass("et-fb")&&(n=1e4),setTimeout(function(){if(0!==t("body:not(.et-fb) .tina_content_listen").length){t(".tina_content_listen .et_pb_row.circles_row").prepend(t('<div class="animation_dot"></div>'));var n=t(".tina_content_listen .et_pb_row.circles_row").height(),e=t(".tina_content_listen .et_pb_row.circles_row .et_pb_column ").css("margin-right");e=parseFloat(e.replace(/-/g,"")),e=parseInt(e,10);var i=n/2*(n/2)*2;i=Math.sqrt(i)-n/2;var o=(i*=i)/2;o=Math.sqrt(o),t(".tina_content_listen .et_pb_row.circles_row .animation_dot").css("top",n/2);var c=t(".tina_content_listen .et_pb_row.circles_row .animation_dot");TweenMax.to(c,4,{bezier:{curviness:0,values:[{left:0,top:n/2},{left:n/2,top:0},{left:n,top:n/2},{left:n-e/2,top:n/2+e/2},{left:n-e,top:n/2},{left:1.5*n-e,top:0},{left:2*n-e,top:n/2},{left:2*n-1.5*e,top:n/2+e/2},{left:2*n-2*e,top:n/2},{left:2.5*n-2*e,top:0},{left:3*n-2*e,top:n/2},{left:3*n-2.5*e,top:n/2+e/2},{left:3*n-3*e,top:n/2},{left:3.5*n-3*e,top:0},{left:4*n-3*e,top:n/2},{left:3.5*n-3*e,top:n},{left:3*n-3*e,top:n/2},{left:3*n-2.5*e,top:n/2-e/2},{left:3*n-2*e,top:n/2},{left:2.5*n-2*e,top:n},{left:2*n-2*e,top:n/2},{left:2*n-1.5*e,top:n/2-e/2},{left:2*n-e,top:n/2},{left:1.5*n-e,top:n},{left:n-e,top:n/2},{left:n-e/2,top:n/2-e/2},{left:n,top:n/2},{left:n/2,top:n},{left:0,top:n/2}]},ease:Linear.easeNone,repeat:-1}),t(".tina_content_listen .et_pb_row.circles_row .animation_dot").css("opacity",1),t('<div class="scroll_circle"></div>').appendTo(".tina_content_listen .top_row"),t('<div class="circles_container"><div class="circles_container_inner"></div></div>').appendTo(t(".tina_content_listen")),t(".tina_content_listen .middle_row").appendTo(".tina_content_listen .circles_container .circles_container_inner"),t(".tina_content_listen .circles_row ").appendTo(".tina_content_listen .circles_container .circles_container_inner");var s=t(".tina_content_listen .et_pb_row.top_row").outerHeight();s=parseInt(s,10);var _=t(".tina_content_listen .circles_container").outerHeight(),l=t(".tina_content_listen .top_row").outerHeight();t(".tina_content_listen").css("cssText","padding-bottom: "+_+"px; padding-top: "+l+"px");var r=35;t(window).width()<=980&&(r=85);var a=t(".tina_content_listen .circles_row ").offset().top-t(".tina_content_listen").offset().top+(n/2-e/2);t(".tina_content_listen .scroll_circle").css("cssText","width: "+e+"px; top: "+a+"px; transform: translate(-50%, 0) scale("+r+");"),t(window).scroll(function(){if(t(window).scrollTop()>t(".tina_content_listen").offset().top&&t(window).scrollTop()+t(window).height()<t(".tina_content_listen").offset().top+t(".tina_content_listen").outerHeight()){t(".tina_content_listen .circles_container").css("position","fixed"),t(".tina_content_listen .top_row").css("position","fixed"),t(".tina_content_listen .circles_container").css("top","0px"),t(".tina_content_listen .top_row").css("top","0px");var n=r-r/(t(".tina_content_listen").outerHeight()-t(window).height())*(t(window).scrollTop()-t(".tina_content_listen").offset().top);t(".tina_content_listen .scroll_circle").css("cssText","width: "+e+"px; top: "+a+"px; transform: translate(-50%, 0) scale("+(n+1)+");"),n+1<=1.05?t(".tina_content_listen .circles_container .circles_container_inner").css("opacity",1):t(".tina_content_listen .circles_container .circles_container_inner").css("opacity",0)}else t(window).scrollTop()+t(window).height()>t(".tina_content_listen").offset().top+t(".tina_content_listen").outerHeight()?(t(".tina_content_listen .circles_container").css("position","absolute"),t(".tina_content_listen .top_row").css("position","absolute"),t(".tina_content_listen .circles_container").css("top",t(".tina_content_listen").outerHeight()-t(".tina_content_listen .top_row").outerHeight()+"px"),t(".tina_content_listen .top_row").css("top",t(".tina_content_listen").outerHeight()-t(".tina_content_listen .circles_container").outerHeight()+"px"),t(".tina_content_listen .scroll_circle").css("cssText","width: "+e+"px; top: "+a+"px; transform: translate(-50%, 0) scale(1);"),t(".tina_content_listen .circles_container .circles_container_inner").css("opacity",1)):(t(".tina_content_listen .circles_container").css("top","0px"),t(".tina_content_listen .top_row").css("top","0px"),t(".tina_content_listen .circles_container").css("position","absolute"),t(".tina_content_listen .top_row").css("position","absolute"),t(".tina_content_listen .scroll_circle").css("cssText","width: "+e+"px; top: "+a+"px; transform: translate(-50%, 0) scale("+r+");"),t(".tina_content_listen .circles_container .circles_container_inner").css("opacity",0))}),t(".tina_content_listen .et_pb_promo .et_pb_button_wrapper .et_pb_button").prepend(t('<div class="circle"></div><div class="line"></div>'));var p=new TimelineLite;t(".tina_content_listen .et_pb_promo .et_pb_button_wrapper .et_pb_button").hover(function(){var n=t(this).find(".line"),e=t(this).find(".circle");p.to(n,.4,{height:"19px"},0).to(e,.4,{scale:1.1,rotation:25,opacity:1},0)},function(){p.clear();var n=t(this).find(".line"),e=t(this).find(".circle");(new TimelineLite).to(n,.4,{height:"58px"},0).to(e,.4,{scale:1,rotation:0,opacity:.2},0)}),t(".tina_content_listen").css("opacity",1)}},n)}(jQuery);