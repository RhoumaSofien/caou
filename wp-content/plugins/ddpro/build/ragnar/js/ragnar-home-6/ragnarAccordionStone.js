!function(t){var e=200;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){0!=t(".ragnar_accordion_stone").length&&(t(".ragnar_accordion_stone .et_pb_accordion .et_pb_toggle_open").addClass("et_pb_toggle_close").removeClass("et_pb_toggle_open"),t(".ragnar_accordion_stone .et_pb_toggle").each(function(){t(this).find(".et_pb_toggle_content").html('<div class="content_inner">'+t(this).find(".et_pb_toggle_content").html()+"</div>"),t(this).find(".et_pb_toggle_content").attr("height",t(this).find(".et_pb_toggle_content").height()),t(this).find(".et_pb_toggle_content").css("cssText","max-height: 1px !important;")}),t(".ragnar_accordion_stone .et_pb_toggle_title").click(function(t){t.preventDefault()}),t(".ragnar_accordion_stone .et_pb_toggle").click(function(e){t(this).closest(".et_pb_accordion").find(".et_pb_toggle").each(function(){t(this).removeClass("et_pb_toggle_close"),t(this).removeClass("et_pb_toggle_open"),t(this).find(".et_pb_toggle_content").css("cssText"," max-height: 1px !important;")});var o=t(this);o.hasClass("opened")?(t(this).closest(".et_pb_accordion").find(".et_pb_toggle").removeClass("closed"),o.removeClass("opened"),o.find(".et_pb_toggle_content").css("cssText","max-height: 1px !important;")):(t(this).closest(".et_pb_accordion").find(".et_pb_toggle").removeClass("opened"),t(this).closest(".et_pb_accordion").find(".et_pb_toggle").addClass("closed"),o.addClass("opened"),setTimeout(function(){o.find(".et_pb_toggle_content").css("cssText","max-height: "+o.find(".et_pb_toggle_content").attr("height")+"px !important;")},50))}),t(".ragnar_accordion_stone .et_pb_accordion").css("opacity",1))},e)}(jQuery);