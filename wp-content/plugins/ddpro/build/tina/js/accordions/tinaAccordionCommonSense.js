!function(e){var t=3e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){0!==e(".tina_accordion_common_sense").length&&(e(".tina_accordion_common_sense .et_pb_accordion .et_pb_toggle_open").addClass("et_pb_toggle_close").removeClass("et_pb_toggle_open"),e(".tina_accordion_common_sense .et_pb_toggle").each(function(){e(this).find(".et_pb_toggle_content").html('<div class="content_inner">'+e(this).find(".et_pb_toggle_content").html()+"</div>"),e(this).find(".et_pb_toggle_content").attr("height",e(this).find(".et_pb_toggle_content").height()),e(this).find(".et_pb_toggle_content").css("cssText","max-height: 0 !important;");var t=e(this).css("background-image");e(this).css("background-image","none"),"none"!==(t=t.replace("url(","").replace(")","").replace(/\"/gi,""))&&e('<div class="image_box"><img src="'+t+'"></div>').insertBefore(e(this).find(".et_pb_toggle_title"))}),e(".tina_accordion_common_sense .et_pb_toggle_title").click(function(e){e.preventDefault()}),e(".tina_accordion_common_sense .et_pb_toggle").click(function(t){var o=e(this);o.hasClass("opened")||(e(".tina_accordion_common_sense .et_pb_toggle .et_pb_toggle_content").css("cssText"," max-height: 0 !important;"),e(".tina_accordion_common_sense .et_pb_toggle").removeClass("et_pb_toggle_close"),e(".tina_accordion_common_sense .et_pb_toggle").removeClass("et_pb_toggle_open"),e(".tina_accordion_common_sense .et_pb_toggle").removeClass("opened"),e(".tina_accordion_common_sense .et_pb_toggle").addClass("closed"),o.addClass("opened"),setTimeout(function(){o.find(".et_pb_toggle_content").css("cssText","max-height: "+o.find(".et_pb_toggle_content").attr("height")+"px !important;")},50))}),setTimeout(function(){e(".tina_accordion_common_sense .et_pb_toggle:first-child .et_pb_toggle_content").css("cssText","max-height: "+e(".tina_accordion_common_sense .et_pb_toggle:first-child .et_pb_toggle_content").attr("height")+"px !important;"),e(".tina_accordion_common_sense .et_pb_toggle:first-child").addClass("opened"),e(".tina_accordion_common_sense .accordion_col").css("min-height",e(".tina_accordion_common_sense .et_pb_accordion").height()),e(".tina_accordion_common_sense .et_pb_accordion").css("opacity",1)},1e3))},t)}(jQuery);