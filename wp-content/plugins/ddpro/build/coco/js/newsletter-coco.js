!function(e){e(" .et_pb_newsletter .et_pb_newsletter_form p").each(function(){e(this).find("input").insertBefore(e(this).find("label")),e(this).find("input.et_pb_signup_firstname").required=!1}),e(" .et_pb_newsletter .et_pb_newsletter_form input").focus(function(){e(this).parent("p").addClass("focus")}),e(" .et_pb_newsletter .et_pb_newsletter_form input").blur(function(){e(this).val()?e(this).parent().addClass("filled"):e(this).parent().removeClass("filled"),e(this).parent("p").removeClass("focus")})}(jQuery);