!function(t){var e=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".freddie_pretty_lights_tabs").length){var e=1;t(".freddie_pretty_lights_tabs .et_pb_tabs .et_pb_tabs_controls li").each(function(){var a=t(".freddie_pretty_lights_tabs  .et_pb_all_tabs .et_pb_tab:nth-child("+e+")").css("background-image");a&&(t(".freddie_pretty_lights_tabs .et_pb_all_tabs .et_pb_tab:nth-child("+e+")").css("background-image","none"),a=a.replace("url(","").replace(")","").replace(/\"/gi,""),t(this).find("a").html(t('<img src="'+a+'">'))),e++}),t(".freddie_pretty_lights_tabs .et_pb_all_tabs .et_pb_tab:first-child").addClass("et_pb_active_content et-pb-active-slide")}},e)}(jQuery);