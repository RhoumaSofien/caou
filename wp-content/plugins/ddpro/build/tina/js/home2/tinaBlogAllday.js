!function(t){var a=1500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(a=5e3),t("body").hasClass("et-fb")&&(a=1e4),setTimeout(function(){0!==t(".tina_all_day_blog").length&&setInterval(function(){t(".tina_all_day_blog article").hasClass("done")||(t(".tina_all_day_blog article .post-meta").each(function(){var a=t(this).find("span.author")[0],n=t(this).find("span.published")[0],e=t(this).find('a[rel="tag"]').toArray();e=(e=t.map(e,function(t){return t.outerHTML})).join(", ");var i=a.outerHTML;i+=n.outerHTML,i+="<span class='categories'>"+e+"</span>",t(this).html(i)}),t(".tina_all_day_blog article").each(function(){if(0===t(this).find(".entry-featured-image-url").length&&t(this).addClass("no_image"),0!==t(this).find("dataavatar").length){var a=t(this).find("dataavatar").attr("data-avatar-url");t('<img alt="author avatar" src="'+a+'" class="avatar avatar-92 photo" height="92" width="92">').insertBefore(t(this).find(".author.vcard"));var n=t(this).find("h2.entry-title a").text();newHeaderText=n.replace(/<dataavatar.+?dataavatar>/g,""),t(this).find("h2.entry-title a").text(newHeaderText)}t('<div class="post_content_box"></div>').appendTo(t(this)),t(this).find(".categories").appendTo(t(this).find(".post_content_box")),t(this).find(".entry-title").appendTo(t(this).find(".post_content_box")),t(this).find(".post-meta").appendTo(t(this).find(".post_content_box")),t(this).find(".post-content").appendTo(t(this).find(".post_content_box"))}),t(".tina_all_day_blog article").addClass("done"))},100)},a)}(jQuery);