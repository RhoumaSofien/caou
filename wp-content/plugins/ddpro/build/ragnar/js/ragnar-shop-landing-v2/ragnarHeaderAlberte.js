!function(e){var r=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(r=5e3),e("body").hasClass("et-fb")&&(r=1e4),setTimeout(function(){if(0!=e(".ragnar_header_alberte").length){e(".ragnar_header_alberte .et_pb_button_module_wrapper a.et_pb_button.video-popup").each(function(){e(this).closest(".et_pb_button_module_wrapper").addClass("video_popup_wrap")}),e(".ragnar_header_alberte .et_pb_button_module_wrapper a.et_pb_button.scroll_button").each(function(){e(this).closest(".et_pb_button_module_wrapper").addClass("scroll_button_wrap")}),e(".ragnar_header_alberte .video-popup h4").each(function(){e(this).find("a").attr("href","")}),e(".ragnar_header_alberte .video-popup.et_pb_button").click(function(r){return r.preventDefault(),e.fancybox({padding:0,autoScale:!1,transitionIn:"none",transitionOut:"none",title:this.title,width:680,height:495,href:this.href,type:"swf",swf:{wmode:"transparent",allowfullscreen:"true"}}),!1}),e(".ragnar_header_alberte .et_pb_social_media_follow").each(function(){e(this).find("li").each(function(){var r=e(this).find("a").attr("title").replace("Follow on","");e(this).find("a .et_pb_social_media_follow_network_name").text(r)})});var r="product_tag-";var a=0;e(".ragnar_header_alberte .et_pb_shop li.product").each(function(){var t=[],_=e(this).find(".et_shop_image img").attr("src");e(this).find(".et_shop_image img").attr("srcset");(_=_.replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,"")).replace(/-([0-9][0-9][0-9]x[0-9][0-9])\w+/g,""),e(this).find(".et_shop_image").remove(),e(this).find("a.woocommerce-loop-product__link").wrapAll('<div class="product_wrap"></div>'),e(this).find(".product_wrap").css("background-image","url("+_+")"),e('<a class="more_button" href="'+e(this).find("a.woocommerce-loop-product__link").attr("href")+'"></a>').insertAfter(e(this).find(".woocommerce-loop-product__title"));for(var i=e(this).attr("class").split(" "),o=0;o<i.length;o++)i[o].indexOf(r)>-1&&(e(this).attr("id",i[o].slice(r.length,i[o].length)),t.push(i[o].slice(r.length,i[o].length)));t=function(e){for(var r={},a=0;a<e.length;a++)r[e[a]]=!0;var t=[];for(var _ in r)t.push(_);return t}(t);for(o=0;o<t.length;o++){var l=t[o].replace(/\-/g," ");e('<div class="tag_name">'+l+"</div>").appendTo(e(this).find("a.woocommerce-loop-product__link"))}e(this).height()>a&&(a=e(this).height())}),console.log(a),e(".ragnar_header_alberte .et_pb_shop li.product .product_wrap").height(a);var t=e(".ragnar_header_alberte .et_pb_shop li.product")[0].getBoundingClientRect();e(".ragnar_header_alberte .et_pb_shop li.product:first-child").addClass("active_item");e(".ragnar_header_alberte .et_pb_shop").width();var _=e(".ragnar_header_alberte .et_pb_shop li.product").length,i=e(".ragnar_header_alberte .et_pb_shop li.product").css("margin-right");i=parseInt(i,10),e(".ragnar_header_alberte .et_pb_shop li.product").css("cssText","width: "+t.width+"px !important; margin-right: "+i+"px !important;"),e(".ragnar_header_alberte .products").width((i+t.width)*_);console.log(_),e('<div class="alberte_header_slider_arrows_and_number"><div class="alberte_header_slider_arrows"><a class="arrow_prev" href="#"><span></span></a><a class="arrow_next" href="#"><span></span></a></div><div class="number">01</div></div>').insertAfter(e(".ragnar_header_alberte .et_pb_shop .woocommerce"));e(".ragnar_header_alberte .alberte_header_slider_arrows a.arrow_prev").on("click",function(){e(".ragnar_header_alberte .et_pb_shop li.product.active_item").prevAll().length<1?(e(".ragnar_header_alberte .et_pb_shop li.product.active_item").removeClass("active_item"),e(".ragnar_header_alberte .et_pb_shop li.product:nth-last-child(1)").addClass("active_item")):e(".ragnar_header_alberte .et_pb_shop li.product.active_item").removeClass("active_item").prev().addClass("active_item")}),e(".ragnar_header_alberte .alberte_header_slider_arrows a.arrow_next").on("click",function(){e(".ragnar_header_alberte .et_pb_shop li.product.active_item").nextAll().length<1?(e(".ragnar_header_alberte .et_pb_shop li.product.active_item").removeClass("active_item"),e(".ragnar_header_alberte .et_pb_shop li.product:first-child").addClass("active_item")):e(".ragnar_header_alberte .et_pb_shop li.product.active_item").removeClass("active_item").next().addClass("active_item")}),e(".ragnar_header_alberte .alberte_header_slider_arrows a").on("click",function(r){r.preventDefault();var a=e(".ragnar_header_alberte .et_pb_shop li.product.active_item").prevAll().length,_=a+1;_<=9?e(".ragnar_header_alberte .et_pb_shop .alberte_header_slider_arrows_and_number .number").text("0"+_):e(".ragnar_header_alberte .et_pb_shop .alberte_header_slider_arrows_and_number .number").text(_),e(".ragnar_header_alberte .et_pb_shop ul.products").css("transform","translate(-"+a*(i+t.width)+"px,0)")})}},r)}(jQuery);