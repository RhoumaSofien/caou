!function(e){var t=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){if(0!==e(".tina_testimonial_one_can").length){e(".tina_testimonial_one_can  .et_pb_slider").each(function(){e(this).find(".et-pb-controllers").insertBefore(e(this).find(".et-pb-arrow-next"))});var t=1;e(".tina_testimonial_one_can .et_pb_slider .et_pb_slide").each(function(){var n=e(this).find(".et_pb_slide_image img").attr("src");e(".tina_testimonial_one_can .et-pb-controllers a:nth-child("+t+")").css("background-image","url("+n+")"),t++})}},t)}(jQuery);