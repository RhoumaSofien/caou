!function(t){t("input,textarea").focus(function(){""!==t(this).attr("placeholder")&&(t(this).attr("data-placeholder",t(this).attr("placeholder")),t(this).attr("placeholder",""))}),t("input,textarea").blur(function(){""===t(this).attr("placeholder")&&t(this).attr("placeholder",t(this).attr("data-placeholder"))}),t(' .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,  .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea').focus(function(){t(this).parent("p").addClass("focus")}),t('.et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,  .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea').blur(function(){t(this).val()?t(this).parent().addClass("filled"):t(this).parent().removeClass("filled"),t(this).parent("p").removeClass("focus")}),t(" .et_pb_newsletter .et_pb_newsletter_form  p input").focus(function(){t(this).parent("p").addClass("focus"),t(this).closest(".et_pb_newsletter_form").addClass("focus")}),t(".et_pb_newsletter .et_pb_newsletter_form  p input").blur(function(){t(this).val()?(t(this).closest(".et_pb_newsletter_form").addClass("filled"),t(this).parent().addClass("filled")):(t(this).closest(".et_pb_newsletter_form").removeClass("filled"),t(this).parent().removeClass("filled")),t(this).closest(".et_pb_newsletter_form").removeClass("focus"),t(this).parent("p").removeClass("focus")})}(jQuery),function(t){t.fn.succinct=function(e){var i=t.extend({size:240,omission:"...",ignore:!0},e);return this.each(function(){var e,s,n=/[!-\/:-@\[-`{-~]$/;t(this).each(function(){(e=t(this).html()).length>i.size&&(s=t.trim(e).substring(0,i.size).split(" ").slice(0,-1).join(" "),i.ignore&&(s=s.replace(n,"")),t(this).html(s+i.omission))})})};var e=0;t(".jamie_blog .et_pb_posts  article.et_pb_post").each(function(){var i=t(this).height();i>e&&(e=i)}),t(".jamie_blog .et_pb_posts  article.et_pb_post").height(e);var i=0;t(".jamie_blog .et_pb_posts  article.et_pb_post").each(function(){var e=t(this).find("h2.entry-title").height();e>i&&(i=e)}),t(".jamie_blog .et_pb_posts  article.et_pb_post h2.entry-title").height(i),t(".jamie_blog .et_pb_posts  .et_pb_post  .post-meta").each(function(){var e=t(this).find('a[rel="category tag"]').toArray(),i=t(this).find(".published").text(),s=i.replace(/\d+/g,""),n=parseInt(i);n<=9&&(n="0"+n),date='<span class="published"><span class="day"> '+n+'</span><span class="month"> '+s+"</span></span>",e=(e=t.map(e,function(t){return t.outerHTML})).join(", ");var a=date;a+="<span class='categories'>"+e+"</span>",t(this).html(a)}),t(".jamie_blog_6 .entry-featured-image-url").each(function(){t("<div class='text_read_more'></div>").appendTo(t(this))}),setInterval(function(){t(".jamie_blog_6 .entry-featured-image-url").each(function(){t(".jamie_blog_6 .entry-featured-image-url").hasClass("div_added")||(t("<div class='text_read_more'></div>").appendTo(t(this)),t(this).addClass("div_added"))}),t("body.et-fb .et_pb_posts  .et_pb_post").each(function(){t(this).hasClass("div_added")||(t('<div class="post_info"></div>').appendTo(t(this)),t(this).find("h2.entry-title").appendTo(t(this).find(".post_info")),t(this).find(".post-meta").appendTo(t(this).find(".post_info")),t(this).find(".post-content").appendTo(t(this).find(".post_info")),t(this).find(".more-link").appendTo(t(this).find(".post_info .post-content")),t(this).addClass("div_added"))})},200),t(".jamie_blog_6 .et_pb_posts .et_pb_post .post-meta").each(function(){var e=t(this).find("span.author")[0],i=t(this).find("span.published")[0],s=t(this).find('a[rel="tag"]').toArray(),n=t(this).find(".published").text(),a=n.replace(/\d+/g,""),o=parseInt(n);if(o<=9&&(o="0"+o),n&&(i='<span class="published"><span class="day"> '+o+'</span><span class="month"> '+a+"</span></span>"),s){s=(s=t.map(s,function(t){return t.outerHTML})).join(", ");var l=i}e?(l='<span class="auther_posted">Posted</span> '+e.outerHTML+" / ",l+=i):l=i,l+="<span class='categories a'>"+s+"</span>",t(this).html(l)}),setInterval(function(){t(".jamie_blog_6 .et_pb_posts  .et_pb_post  .post-meta, .jamie_home_blog  .et_pb_posts  .et_pb_post  .post-meta").each(function(){if(!t(this).hasClass("div_added")){var e=t(this).find("span.author")[0],i=t(this).find("span.published")[0],s=t(this).find('a[rel="tag"]').toArray(),n=t(this).find(".published").text(),a=n.replace(/\d+/g,""),o=parseInt(n);if(o<=9&&(o="0"+o),n&&(i='<span class="published"><span class="day"> '+o+'</span><span class="month"> '+a+"</span></span>"),s&&(s=(s=t.map(s,function(t){return t.outerHTML})).join(", ")),e){var l='<span class="auther_posted">Posted</span> '+e.outerHTML+" / ";l+=i}else l=i;l+="<span class='categories'>"+s+"</span>",t(this).html(l),t(this).find(".categories").insertBefore(t(this).find(".published")),t(this).prependTo(t(this).parent(".et_pb_post")),t(this).addClass("div_added")}})},200),setInterval(function(){t(".jamie_blog_6 .et_pb_ajax_pagination_container").hasClass("div_added")||(t('<div class="gutter_blog_width"></div>').appendTo(".jamie_blog_6 .et_pb_ajax_pagination_container"),t(".jamie_blog_6 .et_pb_ajax_pagination_container").masonry({columnWidth:".et_pb_post",itemSelector:".et_pb_post",gutter:".gutter_blog_width"}),t(".jamie_blog_6 .et_pb_ajax_pagination_container").addClass("div_added"))},200),setTimeout(function(){t(".jamie_blog_6 .et_pb_ajax_pagination_container").masonry({columnWidth:".et_pb_post",itemSelector:".et_pb_post",gutter:".gutter_blog_width"})},2500),setTimeout(function(){t(".jamie_blog_6 .et_pb_posts  .et_pb_post").each(function(){t(this).find(".post_info .post-meta").prependTo(t(this))}),t(".jamie_blog_6 article").each(function(){t(this).find("h2.entry-title a").succinct({size:50}),t(this).find(".post-content p").succinct({size:100})})},800)}(jQuery),function(t){t.fn.isInViewport=function(){var e=t(this).offset().top,i=e+t(this).outerHeight(),s=t(window).scrollTop(),n=s+t(window).height();return i>s&&e<n},setTimeout(function(){t(".animation").each(function(){if(t(this).isInViewport()){t(this).addClass("animate_section");var e=t(".animate_section .et_pb_image").length,i=1;setInterval(function(){i<=e&&(t(".animation.animate_section .et_pb_image:nth-child("+i+")").addClass("view_port_animation"),i++)},60)}else t(this).removeClass("animate_section"),t(this).find(".et_pb_image").removeClass("view_port_animation")})},100),t(window).on("resize scroll",function(){t(".animation").each(function(){if(t(this).isInViewport()){t(this).addClass("animate_section");var e=t(".animate_section .et_pb_image").length,i=1;setInterval(function(){i<=e&&(t(".animation.animate_section .et_pb_image:nth-child("+i+")").addClass("view_port_animation"),i++)},60)}}),t(".animation_col.elementor-section").each(function(){if(t(this).isInViewport()){t(this).addClass("animate_section_col");var e=t(".animate_section_col .elementor-column").length,i=1;setInterval(function(){i<=e&&(t(".animation_col.elementor-section.animate_section_col .elementor-column:nth-child("+i+")").addClass("view_port_animation_col"),i++)},150)}else t(this).removeClass("animate_section_col"),t(this).find(".elementor-column").removeClass("view_port_animation_col")})}),t(".animation.et_pb_section").each(function(){if(t(this).isInViewport()){t(this).addClass("animate_section");var e=t(".animate_section .et_pb_blurb ").length,i=1;setInterval(function(){i<=e&&(t(".animation.et_pb_section.animate_section .et_pb_blurb:nth-child("+i+")").addClass("view_port_animation"),i++)},150)}else t(this).removeClass("animate_section"),t(this).find(".et_pb_blurb").removeClass("view_port_animation")}),t(window).on("resize scroll",function(){t(".animation.et_pb_section").each(function(){if(t(this).isInViewport()){t(this).addClass("animate_section");var e=t(".animate_section .et_pb_blurb ").length,i=1;setInterval(function(){i<=e&&(t(".animation.et_pb_section.animate_section .et_pb_blurb:nth-child("+i+")").addClass("view_port_animation"),i++)},150)}})})}(jQuery),function(t){var e=1e3;t("body").hasClass("et-fb")&&(e=7e3),setTimeout(function(){if(0!==t(".jamie-home-hotel-rooms").length){t(".jamie-home-hotel-rooms .et_pb_slider").each(function(){t(window).width()>=481&&(t(this).find(".et_pb_slide:nth-child(2)").clone().insertAfter(t(this).find(".et_pb_slide:last-child")),t(this).find(".et_pb_slide:nth-child(3)").clone().insertAfter(t(this).find(".et_pb_slide:last-child")))});var e=3;t(window).width()>=768?e=3:t(window).width()<=767&&t(window).width()>=481?e=2:t(window).width()<=480&&(e=1),t(".jamie-home-hotel-rooms .et_pb_slider").each(function(){var i=t(this).closest(".et_pb_row.slider_row").width(),s=t(this).find(".et_pb_slide").length,n=i/e;t(this).width(i),t(this).find(".et_pb_slides").width(s*n),t(this).find(".et_pb_slide").width(n)}),t(".jamie-home-hotel-rooms .et-pb-slider-arrows a, .jamie-home-hotel-rooms .et-pb-controllers a").on("click",function(i){i.preventDefault();var s=t(this),n=t(this).closest(".et_pb_row.slider_row").width()/e;t(window).width()<=480?setTimeout(function(){sliderSlideSize1Rooms=s.closest(".et_pb_slider").find(".et_pb_slide.et-pb-active-slide").prevAll().length,sliderSlideSize2Rooms=sliderSlideSize1Rooms*n,s.closest(".et_pb_slider").find(".et_pb_slides").css("transform","translate(-"+sliderSlideSize2Rooms+"px, 0)")},200):setTimeout(function(){var t=s.closest(".et_pb_slider").find(".et_pb_slide.et-pb-active-slide").prevAll().length*n;s.closest(".et_pb_slider").find(".et_pb_slides").css("transform","translate(-"+t+"px, 0)")},200)}),setInterval(function(){t(".jamie-home-hotel-rooms .et_pb_slider").each(function(){if(t(this).hasClass("et_slider_auto")){var i=t(this),s=t(this).closest(".et_pb_row.slider_row").width()/e;t(window).width()<=480?setTimeout(function(){sliderSlideSize1Rooms=i.find(".et_pb_slide.et-pb-active-slide").prevAll().length,sliderSlideSize2Rooms=sliderSlideSize1Rooms*s,i.find(".et_pb_slides").css("transform","translate(-"+sliderSlideSize2Rooms+"px, 0)")},200):setTimeout(function(){var t=(i.find(".et_pb_slide.et-pb-active-slide").prevAll().length-1)*s;i.find(".et_pb_slides").css("transform","translate(-"+t+"px, 0)")},200)}})},50)}if(0!==t(".jamie-home-hotel-offers").length){t(window).width()>=481&&t(".jamie-home-hotel-offers .et_pb_slider").each(function(){t(this).find(".et_pb_slide:nth-child(2)").clone().insertAfter(t(this).find(".et_pb_slide:last-child")),t(this).find(".et_pb_slide:nth-child(3)").clone().insertAfter(t(this).find(".et_pb_slide:last-child"))});var i=4;t(window).width()>=981?(t(".jamie-home-hotel-offers .et_pb_slider").each(function(){t(this).find(".et_pb_slide:nth-child(4)").clone().insertAfter(t(this).find(".et_pb_slide:last-child"))}),i=4):t(window).width()<=980&&t(window).width()>=768?i=3:t(window).width()<=767&&t(window).width()>=481?i=2:t(window).width()<=480&&(i=1),t(".jamie-home-hotel-offers").each(function(){var e=t(this).find(".et_pb_row.slider_row").width(),s=t(this).find(".et_pb_slider .et_pb_slide").length,n=e/i;t(this).find(".et_pb_slider").width(e),t(this).find(".et_pb_slider .et_pb_slides").width(s*n),t(this).find(".et_pb_slider .et_pb_slide").width(n)}),t(".jamie-home-hotel-offers .et-pb-slider-arrows a, .jamie-home-hotel-offers .et-pb-controllers a").on("click",function(e){e.preventDefault();var i=t(this),s=t(this).parent().parent().find(".et_pb_slide").width();t(this).parent().parent().find(".et_pb_slide").length,setTimeout(function(){var t=i.closest(".et_pb_slider").find(".et_pb_slide.et-pb-active-slide").prevAll().length*s;i.closest(".et_pb_slider").find(".et_pb_slides").css("transform","translate(-"+t+"px, 0)")},200)}),setInterval(function(){t(".jamie-home-hotel-offers .et_pb_slider").hasClass("et_slider_auto")&&(t(window).width()<=480?setTimeout(function(){sliderSlideSize1=t(".jamie-home-hotel-offers .et_pb_slider .et_pb_slide.et-pb-active-slide").prevAll().length,sliderSlideSize2=sliderSlideSize1*showItemsWidth,t(".jamie-home-hotel-offers .et_pb_slider .et_pb_slides").css("transform","translate(-"+sliderSlideSize2+"px, 0)")},200):setTimeout(function(){var e=(t(".jamie-home-hotel-offers .et_pb_slider .et_pb_slide.et-pb-active-slide").prevAll().length-1)*showItemsWidth;t(".jamie-home-hotel-offers .et_pb_slider .et_pb_slides").css("transform","translate(-"+e+"px, 0)")},200))},50)}},e)}(jQuery);