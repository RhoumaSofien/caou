!function(t){var e=3e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t(".tina_blurbs_me_and_you").length){var e=0;t(".tina_blurbs_me_and_you .et_pb_blurb").each(function(){e<t(this).find(".et_pb_blurb_content").outerHeight()&&(e=t(this).find(".et_pb_blurb_content").outerHeight())}),t(".tina_blurbs_me_and_you .et_pb_blurb .et_pb_blurb_content").outerHeight(e)}},e)}(jQuery);