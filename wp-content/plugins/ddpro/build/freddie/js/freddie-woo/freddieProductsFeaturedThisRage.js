!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){if(0!==e(".freddie_products_featured_this_rage ").length){var t=e(".freddie_products_featured_this_rage .et_pb_shop li.product")[0].getBoundingClientRect();e(".freddie_products_featured_this_rage .et_pb_shop li.product:first-child").addClass("active_item");e(".freddie_products_featured_this_rage .et_pb_shop").width();var r=e(".freddie_products_featured_this_rage .et_pb_shop li.product").length,_=e(".freddie_products_featured_this_rage .et_pb_shop li.product").css("margin-right");_=parseInt(_,10),e(".freddie_products_featured_this_rage .et_pb_shop li.product").css("cssText","width: "+t.width+"px !important; margin-right: "+_+"px !important;"),e(".freddie_products_featured_this_rage .products").width((_+t.width)*r),e('<div class="this_rage_slider_arrows"><a class="arrow_prev" href="#"><span></span></a><a class="arrow_next" href="#"><span></span></a></div>').insertAfter(e(".freddie_products_featured_this_rage .et_pb_shop .woocommerce")),e(".freddie_products_featured_this_rage .this_rage_slider_arrows a").prepend(e(' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><circle cx="17" cy="17" r="15.5" class="circle__progress"/> </svg>')),TweenMax.set(".freddie_products_featured_this_rage .this_rage_slider_arrows a .circle__progress",{drawSVG:"82%"}),e(".freddie_products_featured_this_rage .this_rage_slider_arrows a").hover(function(){this.tl=new TimelineLite,this.tl.to(e(this).find(".circle__progress"),.5,{drawSVG:"100%",ease:Power3.easeInOut},0),this.tl.play()},function(){this.tl.reverse()});var i=5;e(window).width()<981&&(i=3),e(window).width()<768&&(i=2),e(window).width()<481&&(i=1),e(".freddie_products_featured_this_rage .this_rage_slider_arrows a.arrow_prev").on("click",function(){e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").prevAll().length<1?(e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").removeClass("active_item"),e(".freddie_products_featured_this_rage .et_pb_shop li.product:nth-last-child("+i+")").addClass("active_item")):e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").removeClass("active_item").prev().addClass("active_item")}),e(".freddie_products_featured_this_rage .this_rage_slider_arrows a.arrow_next").on("click",function(){e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").nextAll().length<i?(e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").removeClass("active_item"),e(".freddie_products_featured_this_rage .et_pb_shop li.product:first-child").addClass("active_item")):e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").removeClass("active_item").next().addClass("active_item")}),e(".freddie_products_featured_this_rage .this_rage_slider_arrows a").on("click",function(r){r.preventDefault();var i=e(".freddie_products_featured_this_rage .et_pb_shop li.product.active_item").prevAll().length;e(".freddie_products_featured_this_rage .et_pb_shop ul.products").css("transform","translate(-"+i*(_+t.width)+"px,0)")})}},t)}(jQuery);