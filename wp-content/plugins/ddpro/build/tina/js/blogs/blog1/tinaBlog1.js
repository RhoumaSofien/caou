!function(t){var e=2e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){if(0!==t("body .tina_blog_1_navigate").length&&(t(".tina_blog_1_navigate .et_pb_posts_nav > span").each(function(){var e=t(this).find("a").attr("href");e=e.substring(0,e.length-1).split("/").pop().replace(/\-/g," "),t('<div class="post-title">'+e+"</div>").appendTo(t(this))}),t("#page-container .tina_blog_1_navigate form.comment-form p input, #page-container .tina_blog_1_navigate form.comment-form p textarea").focus(function(){t(this).parent("p").addClass("focus")}),t("#page-container .tina_blog_1_navigate form.comment-form p input, #page-container .tina_blog_1_navigate form.comment-form p textarea").blur(function(){t(this).val()===t(this).closest("p").find("label").text()&&t(this).val(""),t(this).val()?t(this).parent().addClass("filled"):t(this).parent().removeClass("filled"),t(this).parent("p").removeClass("focus")})),0!==t("body .tina_blog_1_optin").length){var e=t(".tina_blog_1_optin p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").length;t(".tina_blog_1_optin p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").addClass("form_field"),e>1&&(t(".tina_blog_1_optin .et_pb_newsletter_form form").addClass("form_fields_count"),t(".tina_blog_1_optin p.et_pb_newsletter_field:not(.et_pb_signup_custom_field)").addClass("form_field fields_count_"+e))}if(0!==t("body .tina_blog_1_recent_posts").length){t(".tina_blog_1_recent_posts article .post-meta").each(function(){var e=t(this).find("span.author")[0],n=t(this).find("span.published")[0],i=t(this).find('a[rel="tag"]').toArray();i=(i=t.map(i,function(t){return t.outerHTML})).join(", ");var a=e.outerHTML;a+=n.outerHTML,a+="<span class='categories'>"+i+"</span>",t(this).html(a)}),t(".tina_blog_1_recent_posts article").each(function(){t(this).find(".author").insertBefore(t(this).find(".entry-title"))});var n=0;t(".tina_blog_1_recent_posts article .entry-title").each(function(){t(this).outerHeight()>n&&(n=t(this).outerHeight())}),t(".tina_blog_1_recent_posts article .entry-title").outerHeight(n),t(".tina_blog_1_recent_posts article").on("click",function(){var e=t(this).find(".entry-title a").attr("href");e&&(window.location.href=e)})}},e)}(jQuery);