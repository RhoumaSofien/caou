!function(e){var _=100;e("body").hasClass("et-fb")&&(_=1e4),ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(_=5e3),setTimeout(function(){0!==e("body .freddie_album").length&&(e(".freddie_album .et_pb_audio_module ").each(function(){var _=e(this).find("h2.et_pb_module_header").text(),d=e(this).find(".et_audio_module_meta strong").text();e(this).find("h2.et_pb_module_header").remove(),e(this).find(".et_audio_module_meta strong").remove();var i=e(this).find(".et_audio_module_meta").text().replace(/\s/g,"").replace("by|","");e(this).find(".et_audio_module_meta").html("<p class='audio_name'>"+_+"</p><p class='artist_name'>"+d+"</p><p class='genre_name'>"+i+"</p>")}),e(".freddie_album .et_pb_audio_module ").on("click",function(){e(".freddie_album .et_pb_audio_module ").removeClass("played"),e(this).find(".mejs-playpause-button").hasClass("mejs-play")?e(this).addClass("played"):e(this).removeClass("played")}),setTimeout(function(){var _=4;e(window).width()<=980&&(_=2),e(window).width()<=480&&(_=1);var d=e(".freddie_album .freddie_album_more_by_name .et_pb_slider").width(),i=e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide").length,s=d/_,l=i*s;if(e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide").width(s),e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slides").width(l+30),e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slides .et_pb_slide:first-child").addClass("active_slide"),e(".freddie_album .freddie_album_more_by_name .et-pb-slider-arrows a.et-pb-arrow-next").on("click",function(d){d.preventDefault();var i=e(this);setTimeout(function(){i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").nextAll().length>=_?i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").next().addClass("active_slide"):(i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),i.closest(".et_pb_slider").find(".et_pb_slide:first-child").addClass("active_slide"))},50)}),e(".freddie_album .freddie_album_more_by_name .et-pb-slider-arrows a.et-pb-arrow-prev").on("click",function(d){d.preventDefault();var i=e(this);setTimeout(function(){0!==i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length?i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide").prev().addClass("active_slide"):(i.closest(".et_pb_slider").find(".et_pb_slide.active_slide").removeClass("active_slide"),i.closest(".et_pb_slider").find(".et_pb_slide:nth-last-child("+_+")").addClass("active_slide"))},50)}),e(".freddie_album .freddie_album_more_by_name .et-pb-slider-arrows a").on("click",function(_){_.preventDefault();var d=e(this);setTimeout(function(){var e=d.closest(".et_pb_slider").find(".et_pb_slide.active_slide").prevAll().length;d.closest(".et_pb_slider").find(".et_pb_slides").css("transform","translate(-"+e*s+"px, 0)")},50)}),e(".freddie_album .freddie_album_more_by_name .et_pb_slider").hasClass("et_slider_auto")){var t=[];e(".freddie_album .freddie_album_more_by_name .et_pb_slider[class*='et_slider_speed_']").removeClass(function(){var e=this.className.match(/et_slider_speed_\d+/);if(e)return t.push(e[0]),e[0]});var a=t[0];a=a.replace(/[^\d]+/,""),setInterval(function(){e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide.active_slide").nextAll().length>=_?e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide.active_slide").removeClass("active_slide").next().addClass("active_slide"):(e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide.active_slide").removeClass("active_slide"),e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide:first-child").addClass("active_slide"));var d=e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slide.active_slide").prevAll().length;e(".freddie_album .freddie_album_more_by_name .et_pb_slider .et_pb_slides").css("transform","translate(-"+d*s+"px, 0)")},a)}},1500))},_)}(jQuery);