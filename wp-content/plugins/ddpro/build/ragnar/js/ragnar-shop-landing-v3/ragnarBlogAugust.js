!function(e){var a=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(a=5e3),e("body").hasClass("et-fb")&&(a=1e4),setTimeout(function(){if(0!==e(".ragnar_blog_august").length){e(".ragnar_blog_august .et_pb_slide .post-meta").each(function(){var a=e(this).find("span.author")[0],s=e(this).find("span.published")[0],t=e(this).find('a[rel="category tag"]').toArray(),i=e(this).find(".published").text(),n=i.replace(/\d+/g,"").replace(/\,/g,"").replace(/ /g,""),r=i.slice(i.length-4),l=i.replace(n,"").replace(r,"").replace(/ /g,"").replace(/\,/g,"");if(l<=9&&(l="0"+l),i&&(s='<span class="published"><span class="day"> '+l+'</span><span class="month_year"> '+n+" "+r+"</span></span>"),t&&(t=(t=e.map(t,function(e){return e.outerHTML})).join(", ")),a){var p='<span class="auther_posted">By</span> '+a.outerHTML;p+=s}else p=s;p+="<span class='categories'>"+t+"</span>",e(this).html(p)}),setInterval(function(){e("body.et-fb .ragnar_blog_august .et_pb_slide .post-meta").each(function(){if(!e(this).hasClass("div_added")){var a=e(this).find("span.author")[0],s=e(this).find("span.published")[0],t=e(this).find('a[rel="category tag"]').toArray(),i=e(this).find(".published").text(),n=i.replace(/\d+/g,"").replace(/\,/g,"").replace(/ /g,""),r=i.slice(i.length-4),l=i.replace(n,"").replace(r,"").replace(/ /g,"").replace(/\,/g,"");if(l<=9&&(l="0"+l),i&&(s='<span class="published"><span class="day"> '+l+'</span><span class="month_year"> '+n+" "+r+"</span></span>"),t&&(t=(t=e.map(t,function(e){return e.outerHTML})).join(", ")),a){var p='<span class="auther_posted">By</span> '+a.outerHTML;p+=s}else p=s;p+="<span class='categories'>"+t+"</span>",e(this).html(p),e(this).addClass("div_added")}})},200),e(".ragnar_blog_august .et_pb_slide").each(function(){e(this).find(".post-meta .published").insertBefore(e(this).find("h2.et_pb_slide_title")),e(this).find(".post-meta .categories").insertBefore(e(this).find("h2.et_pb_slide_title"))});var a=0;e(".ragnar_blog_august .et_pb_slide").each(function(){var s=e(this).find("h2.et_pb_slide_title a").height();s>a&&(a=s)}),e(".ragnar_blog_august .et_pb_slide h2.et_pb_slide_title a").height(a),e(".ragnar_blog_august .et_pb_slide").each(function(){e('<div class="date"></div>').insertBefore(e(this).find(".et_pb_slide_title")),e(this).find(".published").appendTo(e(this).find(".date")),e(this).find(".categories").appendTo(e(this).find(".date"));var a=e(this).find(".et_pb_slide_image img").attr("src");e(this).css("background-image","url("+a+")"),e(this).find(".et_pb_slide_image").remove(),e(".ragnar_blog_august").css("opacity",1)});var s=0;setTimeout(function(){e(".ragnar_blog_august .et_pb_slide").each(function(){var a=e(this).height();a>s&&(s=a)}),e(".ragnar_blog_august .et_pb_slide ").height(s)},500)}},a)}(jQuery);