!function(e){var _=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(_=7e3),e("body").hasClass("et-fb")&&(_=1e4),setTimeout(function(){if(0!==e(".diana_goodbye_blurbs").length){var _=e(".diana_goodbye_blurbs .first_text.et_pb_text").outerHeight(),b=_+e(".diana_goodbye_blurbs .second_text.et_pb_text").outerHeight();e(".diana_goodbye_blurbs .column_nth_2").css("margin-top",b+"px"),e(".diana_goodbye_blurbs .column_nth_3").css("margin-top",_+"px");var t=0;e(".diana_goodbye_blurbs .et_pb_blurb ").each(function(){e(this).find("h4.et_pb_module_header").height()>t&&(t=e(this).find("h4.et_pb_module_header").height()+1)}),e("body:not(.ie) .diana_goodbye_blurbs .et_pb_blurb h4.et_pb_module_header").height(t);var d=0;e("body.ie .diana_goodbye_blurbs .et_pb_blurb ").each(function(){console.log(e(this).find("h4.et_pb_module_header span").width()),e(this).find("h4.et_pb_module_header span").width()>d&&(d=e(this).find("h4.et_pb_module_header span").width()+1)}),e("body.ie .diana_goodbye_blurbs .et_pb_blurb h4.et_pb_module_header").height(d),e("body.ie .diana_goodbye_blurbs .et_pb_blurb h4.et_pb_module_header span").width(d)}},_)}(jQuery);