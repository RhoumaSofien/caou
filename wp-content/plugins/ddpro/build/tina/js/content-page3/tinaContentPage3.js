!function(t){var e=500;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(e=5e3),t("body").hasClass("et-fb")&&(e=1e4),setTimeout(function(){0!==t(".tina_content3_header").length&&t(".tina_content3_header .video-popup.et_pb_button").click(function(e){return e.preventDefault(),t.fancybox({padding:0,autoScale:!1,transitionIn:"none",transitionOut:"none",title:this.title,width:680,height:495,href:this.href,type:"swf",swf:{wmode:"transparent",allowfullscreen:"true"}}),!1})},e)}(jQuery);