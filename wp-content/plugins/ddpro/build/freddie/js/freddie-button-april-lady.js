!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout(function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_april_lady ").each(function(){var t=e(this).text();e(this).html("<span>"+t+"</span>"),e('<div class="arrow"><div class="middle_line"></div></div>').appendTo(e(this));new SplitText(e(this).find(" span"),{type:"chars",charsClass:"char char++",position:"relative"});for(var a=e(this).find(".char"),i=0;i<a.length;i++)a[i].style.display="inline-block";TweenLite.set(e(this).find(" span"),{perspective:800})}),e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_april_lady ").hover(function(){var t=new TimelineLite,a=e(this).find(".char").toArray();t.staggerFromTo(a,1,{rotationY:0},{rotationY:"-180deg",ease:Power3.easeOut},0).to(e(this).find("span"),1.1,{x:0,ease:Power3.easeOut},0).to(e(this).find(".arrow"),1.1,{x:0,opacity:1,ease:Power3.easeOut},0)},function(){var t=new TimelineLite,a=e(this).find(".char").toArray();t.staggerFromTo(a,.5,{rotationY:"-180deg"},{rotationY:"0",ease:Power3.easeOut},0).to(e(this).find("span"),1.1,{x:15,ease:Power3.easeOut},0).to(e(this).find(".arrow"),1.1,{x:15,opacity:0,ease:Power3.easeOut},0)})},t)}(jQuery);