jQuery.browser={},jQuery.browser.msie=!1,jQuery.browser.version=0,navigator.userAgent.match(/MSIE ([0-9]+)\./)&&(jQuery.browser.msie=!0,jQuery.browser.version=RegExp.$1),function(e){var t,i,n,a,o,r,s,c,l,d,h,p,f,g=0,u={},y=[],b=0,m={},x=[],w=null,v=new Image,k=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,C=/[^\.]\.(swf)\s*$/i,O=1,I=0,j="",S=!1,T=e.extend(e("<div/>")[0],{prop:0}),E=e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest,A=function(){i.hide(),v.onerror=v.onload=null,w&&w.abort(),t.empty()},W=function(){!1===u.onError(y,g,u)?(i.hide(),S=!1):(u.titleShow=!1,u.width="auto",u.height="auto",t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),P())},L=function(){var n,a,o,s,c,l,d=y[g];if(A(),u=e.extend({},e.fn.fancybox.defaults,void 0===e(d).data("fancybox")?u:e(d).data("fancybox")),!1===(l=u.onStart(y,g,u)))S=!1;else if("object"==typeof l&&(u=e.extend(u,l)),o=u.title||(d.nodeName?e(d).attr("title"):d.title)||"",d.nodeName&&!u.orig&&(u.orig=e(d).children("img:first").length?e(d).children("img:first"):e(d)),""===o&&u.orig&&u.titleFromAlt&&(o=u.orig.attr("alt")),n=u.href||(d.nodeName?e(d).attr("href"):d.href)||null,(/^(?:javascript)/i.test(n)||"#"===n)&&(n=null),u.type?(a=u.type,n||(n=u.content)):u.content?a="html":n&&(a=n.match(k)?"image":n.match(C)?"swf":e(d).hasClass("iframe")?"iframe":0===n.indexOf("#")?"inline":"ajax"),a)switch("inline"===a&&(d=n.substr(n.indexOf("#")),a=e(d).length>0?"inline":"ajax"),u.type=a,u.href=n,u.title=o,u.autoDimensions&&("html"===u.type||"inline"===u.type||"ajax"===u.type?(u.width="auto",u.height="auto"):u.autoDimensions=!1),u.modal&&(u.overlayShow=!0,u.hideOnOverlayClick=!1,u.hideOnContentClick=!1,u.enableEscapeButton=!1,u.showCloseButton=!1),u.padding=parseInt(u.padding,10),u.margin=parseInt(u.margin,10),t.css("padding",u.padding+u.margin),e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(r.children())}),a){case"html":t.html(u.content),P();break;case"inline":if(!0===e(d).parent().is("#fancybox-content")){S=!1;break}e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(d)).bind("fancybox-cleanup",function(){e(this).replaceWith(r.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())}),e(d).appendTo(t),P();break;case"image":S=!1,e.fancybox.showActivity(),(v=new Image).onerror=function(){W()},v.onload=function(){S=!0,v.onerror=v.onload=null,u.width=v.width,u.height=v.height,e("<img />").attr({id:"fancybox-img",src:v.src,alt:u.title}).appendTo(t),D()},v.src=n;break;case"swf":u.scrolling="no",s='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+u.width+'" height="'+u.height+'"><param name="movie" value="'+n+'"></param>',c="",e.each(u.swf,function(e,t){s+='<param name="'+e+'" value="'+t+'"></param>',c+=" "+e+'="'+t+'"'}),s+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+u.width+'" height="'+u.height+'"'+c+"></embed></object>",t.html(s),P();break;case"ajax":S=!1,e.fancybox.showActivity(),u.ajax.win=u.ajax.success,w=e.ajax(e.extend({},u.ajax,{url:n,data:u.ajax.data||{},error:function(e){e.status>0&&W()},success:function(e,a,o){if(200===("object"==typeof o?o:w).status){if("function"==typeof u.ajax.win){if(!1===(l=u.ajax.win(n,e,a,o)))return void i.hide();"string"!=typeof l&&"object"!=typeof l||(e=l)}t.html(e),P()}}}));break;case"iframe":D()}else W()},P=function(){var i=u.width,n=u.height;i=i.toString().indexOf("%")>-1?parseInt((e(window).width()-2*u.margin)*parseFloat(i)/100,10)+"px":"auto"===i?"auto":i+"px",n=n.toString().indexOf("%")>-1?parseInt((e(window).height()-2*u.margin)*parseFloat(n)/100,10)+"px":"auto"===n?"auto":n+"px",t.wrapInner('<div style="width:'+i+";height:"+n+";overflow: "+("auto"===u.scrolling?"auto":"yes"===u.scrolling?"scroll":"hidden")+';position:relative;"></div>'),u.width=t.width(),u.height=t.height(),D()},D=function(){var h,w;if(i.hide(),a.is(":visible")&&!1===m.onCleanup(x,b,m))e.event.trigger("fancybox-cancel"),S=!1;else{if(S=!0,e(r.add(n)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),a.is(":visible")&&"outside"!==m.titlePosition&&a.css("height",a.height()),x=y,b=g,(m=u).overlayShow?(n.css({"background-color":m.overlayColor,opacity:m.overlayOpacity,cursor:m.hideOnOverlayClick?"pointer":"auto",height:e(document).height()}),n.is(":visible")||(E&&e("select:not(#fancybox-tmp select)").filter(function(){return"hidden"!==this.style.visibility}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),n.show())):n.hide(),f=H(),j=m.title||"",I=0,c.empty().removeAttr("style").removeClass(),!1!==m.titleShow&&(h=e.isFunction(m.titleFormat)?m.titleFormat(j,x,b,m):!(!j||!j.length)&&("float"===m.titlePosition?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+j+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+m.titlePosition+'">'+j+"</div>"),(j=h)&&""!==j))switch(c.addClass("fancybox-title-"+m.titlePosition).html(j).appendTo("body").show(),m.titlePosition){case"inside":c.css({width:f.width-2*m.padding,marginLeft:m.padding,marginRight:m.padding}),I=c.outerHeight(!0),c.appendTo(o),f.height+=I;break;case"over":c.css({marginLeft:m.padding,width:f.width-2*m.padding,bottom:m.padding}).appendTo(o);break;case"float":c.css("left",-1*parseInt((c.width()-f.width-40)/2,10)).appendTo(a);break;default:c.css({width:f.width-2*m.padding,paddingLeft:m.padding,paddingRight:m.padding}).appendTo(a)}c.hide(),a.is(":visible")?(e(s.add(l).add(d)).hide(),h=a.position(),p={top:h.top,left:h.left,width:a.width(),height:a.height()},w=p.width===f.width&&p.height===f.height,r.fadeTo(m.changeFade,.3,function(){var i=function(){r.html(t.contents()).fadeTo(m.changeFade,1,_)};e.event.trigger("fancybox-change"),r.empty().removeAttr("filter").css({"border-width":m.padding,width:f.width-2*m.padding,height:u.autoDimensions?"auto":f.height-I-2*m.padding}),w?i():(T.prop=0,e(T).animate({prop:1},{duration:m.changeSpeed,easing:m.easingChange,step:M,complete:i}))})):(a.removeAttr("style"),r.css("border-width",m.padding),"elastic"===m.transitionIn?(p=F(),r.html(t.contents()),a.show(),m.opacity&&(f.opacity=0),T.prop=0,e(T).animate({prop:1},{duration:m.speedIn,easing:m.easingIn,step:M,complete:_})):("inside"===m.titlePosition&&I>0&&c.show(),r.css({width:f.width-2*m.padding,height:u.autoDimensions?"auto":f.height-I-2*m.padding}).html(t.contents()),a.css(f).fadeIn("none"===m.transitionIn?0:m.speedIn,_)))}},_=function(){var t;e.support.opacity||(r.get(0).style.removeAttribute("filter"),a.get(0).style.removeAttribute("filter")),u.autoDimensions&&r.css("height","auto"),a.css("height","auto"),j&&j.length&&c.show(),m.showCloseButton&&s.show(),(m.enableEscapeButton||m.enableKeyboardNav)&&e(document).bind("keydown.fb",function(t){27===t.keyCode&&m.enableEscapeButton?(t.preventDefault(),e.fancybox.close()):37!==t.keyCode&&39!==t.keyCode||!m.enableKeyboardNav||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName||"SELECT"===t.target.tagName||(t.preventDefault(),e.fancybox[37===t.keyCode?"prev":"next"]())}),m.showNavArrows?((m.cyclic&&x.length>1||0!==b)&&l.show(),(m.cyclic&&x.length>1||b!==x.length-1)&&d.show()):(l.hide(),d.hide()),m.hideOnContentClick&&r.bind("click",e.fancybox.close),m.hideOnOverlayClick&&n.bind("click",e.fancybox.close),e(window).bind("resize.fb",e.fancybox.resize),m.centerOnScroll&&e(window).bind("scroll.fb",e.fancybox.center),"iframe"===m.type&&e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="'+u.scrolling+'" src="'+m.href+'"></iframe>').appendTo(r),a.show(),S=!1,e.fancybox.center(),m.onComplete(x,b,m),x.length-1>b&&void 0!==(t=x[b+1].href)&&t.match(k)&&((new Image).src=t),b>0&&void 0!==(t=x[b-1].href)&&t.match(k)&&((new Image).src=t)},M=function(e){var t={width:parseInt(p.width+(f.width-p.width)*e,10),height:parseInt(p.height+(f.height-p.height)*e,10),top:parseInt(p.top+(f.top-p.top)*e,10),left:parseInt(p.left+(f.left-p.left)*e,10)};void 0!==f.opacity&&(t.opacity=e<.5?.5:e),a.css(t),r.css({width:t.width-2*m.padding,height:t.height-I*e-2*m.padding})},R=function(){return[e(window).width()-2*m.margin,e(window).height()-2*m.margin,e(document).scrollLeft()+m.margin,e(document).scrollTop()+m.margin]},H=function(){var e=R(),t={},i=m.autoScale,n=2*m.padding;return t.width=m.width.toString().indexOf("%")>-1?parseInt(e[0]*parseFloat(m.width)/100,10):m.width+n,t.height=m.height.toString().indexOf("%")>-1?parseInt(e[1]*parseFloat(m.height)/100,10):m.height+n,i&&(t.width>e[0]||t.height>e[1])&&("image"===u.type||"swf"===u.type?(i=m.width/m.height,t.width>e[0]&&(t.width=e[0],t.height=parseInt((t.width-n)/i+n,10)),t.height>e[1]&&(t.height=e[1],t.width=parseInt((t.height-n)*i+n,10))):(t.width=Math.min(t.width,e[0]),t.height=Math.min(t.height,e[1]))),t.top=parseInt(Math.max(e[3]-20,e[3]+.5*(e[1]-t.height-40)),10),t.left=parseInt(Math.max(e[2]-20,e[2]+.5*(e[0]-t.width-40)),10),t},F=function(){var t=!!u.orig&&e(u.orig),i={};return t&&t.length?((i=t.offset()).top+=parseInt(t.css("paddingTop"),10)||0,i.left+=parseInt(t.css("paddingLeft"),10)||0,i.top+=parseInt(t.css("border-top-width"),10)||0,i.left+=parseInt(t.css("border-left-width"),10)||0,i.width=t.width(),i.height=t.height(),i={width:i.width+2*m.padding,height:i.height+2*m.padding,top:i.top-m.padding-20,left:i.left-m.padding-20}):(t=R(),i={width:2*m.padding,height:2*m.padding,top:parseInt(t[3]+.5*t[1],10),left:parseInt(t[2]+.5*t[0],10)}),i},B=function(){i.is(":visible")?(e("div",i).css("top",-40*O+"px"),O=(O+1)%12):clearInterval(h)};e.fn.fancybox=function(t){return e(this).length?(e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault(),S||(S=!0,e(this).blur(),y=[],g=0,(t=e(this).attr("rel")||"")&&""!==t&&"nofollow"!==t?(y=e("a[rel="+t+"], area[rel="+t+"]"),g=y.index(this)):y.push(this),L())}),this):this},e.fancybox=function(t,i){var n;if(!S){if(S=!0,n=void 0!==i?i:{},y=[],g=parseInt(n.index,10)||0,e.isArray(t)){for(var a=0,o=t.length;a<o;a++)"object"==typeof t[a]?e(t[a]).data("fancybox",e.extend({},n,t[a])):t[a]=e({}).data("fancybox",e.extend({content:t[a]},n));y=jQuery.merge(y,t)}else"object"==typeof t?e(t).data("fancybox",e.extend({},n,t)):t=e({}).data("fancybox",e.extend({content:t},n)),y.push(t);(g>y.length||g<0)&&(g=0),L()}},e.fancybox.showActivity=function(){clearInterval(h),i.show(),h=setInterval(B,66)},e.fancybox.hideActivity=function(){i.hide()},e.fancybox.next=function(){return e.fancybox.pos(b+1)},e.fancybox.prev=function(){return e.fancybox.pos(b-1)},e.fancybox.pos=function(e){S||(e=parseInt(e),y=x,e>-1&&e<x.length?(g=e,L()):m.cyclic&&x.length>1&&(g=e>=x.length?0:x.length-1,L()))},e.fancybox.cancel=function(){S||(S=!0,e.event.trigger("fancybox-cancel"),A(),u.onCancel(y,g,u),S=!1)},e.fancybox.close=function(){function t(){n.fadeOut("fast"),c.empty().hide(),a.hide(),e.event.trigger("fancybox-cleanup"),r.empty(),m.onClosed(x,b,m),x=u=[],b=g=0,m=u={},S=!1}if(!S&&!a.is(":hidden"))if(S=!0,m&&!1===m.onCleanup(x,b,m))S=!1;else if(A(),e(s.add(l).add(d)).hide(),e(r.add(n)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),r.find("iframe").attr("src",E&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),"inside"!==m.titlePosition&&c.empty(),a.stop(),"elastic"===m.transitionOut){p=F();var i=a.position();f={top:i.top,left:i.left,width:a.width(),height:a.height()},m.opacity&&(f.opacity=1),c.empty().hide(),T.prop=1,e(T).animate({prop:0},{duration:m.speedOut,easing:m.easingOut,step:M,complete:t})}else a.fadeOut("none"===m.transitionOut?0:m.speedOut,t)},e.fancybox.resize=function(){n.is(":visible")&&n.css("height",e(document).height()),e.fancybox.center(!0)},e.fancybox.center=function(e){var t,i;S||(i=!0===e?1:0,t=R(),!i&&(a.width()>t[0]||a.height()>t[1])||a.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+.5*(t[1]-r.height()-40)-m.padding)),left:parseInt(Math.max(t[2]-20,t[2]+.5*(t[0]-r.width()-40)-m.padding))},"number"==typeof e?e:200))},e.fancybox.init=function(){e("#fancybox-wrap").length||(e("body").append(t=e('<div id="fancybox-tmp"></div>'),i=e('<div id="fancybox-loading"><div></div></div>'),n=e('<div id="fancybox-overlay"></div>'),a=e('<div id="fancybox-wrap"></div>')),(o=e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(a)).append(r=e('<div id="fancybox-content"></div>'),s=e('<a id="fancybox-close"></a>'),c=e('<div id="fancybox-title"></div>'),l=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),d=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),s.click(e.fancybox.close),i.click(e.fancybox.cancel),l.click(function(t){t.preventDefault(),e.fancybox.prev()}),d.click(function(t){t.preventDefault(),e.fancybox.next()}),e.fn.mousewheel&&a.bind("mousewheel.fb",function(t,i){S?t.preventDefault():0!==e(t.target).get(0).clientHeight&&e(t.target).get(0).scrollHeight!==e(t.target).get(0).clientHeight||(t.preventDefault(),e.fancybox[i>0?"prev":"next"]())}),e.support.opacity||a.addClass("fancybox-ie"),E&&(i.addClass("fancybox-ie6"),a.addClass("fancybox-ie6"),e('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o)))},e.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},e(document).ready(function(){})}(jQuery),function(e,t,i,n){var a=i("html"),o=i(e),r=i(t),s=i.fancybox=function(){s.open.apply(this,arguments)},c=navigator.userAgent.match(/msie/i),l=null,d=t.createTouch!==n,h=function(e){return e&&e.hasOwnProperty&&e instanceof i},p=function(e){return e&&"string"===i.type(e)},f=function(e){return p(e)&&0<e.indexOf("%")},g=function(e,t){var i=parseInt(e,10)||0;return t&&f(e)&&(i*=s.getViewport()[t]/100),Math.ceil(i)},u=function(e,t){return g(e,t)+"px"};i.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(c?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(i.isPlainObject(t)||(t={}),!1!==s.close(!0)))return i.isArray(e)||(e=h(e)?i(e).get():[e]),i.each(e,function(a,o){var r,c,l,d,f,g={};"object"===i.type(o)&&(o.nodeType&&(o=i(o)),h(o)?(g={href:o.data("fancybox-href")||o.attr("href"),title:o.data("fancybox-title")||o.attr("title"),isDom:!0,element:o},i.metadata&&i.extend(!0,g,o.metadata())):g=o),r=t.href||g.href||(p(o)?o:null),c=t.title!==n?t.title:g.title||"",!(d=(l=t.content||g.content)?"html":t.type||g.type)&&g.isDom&&((d=o.data("fancybox-type"))||(d=(d=o.prop("class").match(/fancybox\.(\w+)/))?d[1]:null)),p(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":p(o)&&(d="html",l=o)),"ajax"===d&&(r=(f=r.split(/\s+/,2)).shift(),f=f.shift())),l||("inline"===d?r?l=i(p(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):g.isDom&&(l=o):"html"===d?l=r:!d&&!r&&g.isDom&&(d="inline",l=o)),i.extend(g,{href:r,type:d,content:l,title:c,selector:f}),e[a]=g}),s.opts=i.extend(!0,{},s.defaults,t),t.keys!==n&&(s.opts.keys=!!t.keys&&i.extend({},s.defaults.keys,t.keys)),s.group=e,s._start(s.opts.index)},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&!0!==e?(s.isOpen=s.isOpened=!1,s.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},i=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},n=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")};!0===e||!s.player.isActive&&!1!==e?s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":n,"onUpdate.player":i,"beforeLoad.player":t}),i(),s.trigger("onPlayStart")):n()},next:function(e){var t=s.current;t&&(p(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(p(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var a=s.current;a&&(e=g(e),s.direction=t||a.direction[e>=a.index?"next":"prev"],s.router=i||"jumpto",a.loop&&(0>e&&(e=a.group.length+e%a.group.length),e%=a.group.length),a.group[e]!==n&&(s.cancel(),s._start(e)))},reposition:function(e,t){var n,a=s.current,o=a?a.wrap:null;o&&(n=s._getPosition(t),e&&"scroll"===e.type?(delete n.position,o.stop(!0,!0).animate(n,200)):(o.css(n),a.pos=i.extend({},a.dim,n)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(l),l=null),s.isOpen&&!l&&(l=setTimeout(function(){var n=s.current;n&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&n.autoResize)&&s._setDimension(),"scroll"===t&&n.canShrink||s.reposition(e),s.trigger("onUpdate"),l=null)},i&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===i.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,i={x:o.scrollLeft(),y:o.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=d&&e.innerWidth?e.innerWidth:o.width(),i.h=d&&e.innerHeight?e.innerHeight:o.height()),i},unbindEvents:function(){s.wrap&&h(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(o.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),(e=t.keys)&&r.bind("keydown.fb",function(a){var o=a.which||a.keyCode,r=a.target||a.srcElement;if(27===o&&s.coming)return!1;!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&(!r||!r.type&&!i(r).is("[contenteditable]"))&&i.each(e,function(e,r){return 1<t.group.length&&r[o]!==n?(s[e](r[o]),a.preventDefault(),!1):-1<i.inArray(o,r)?(s[e](),a.preventDefault(),!1):void 0})}),i.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,n,a,o){for(var r=i(e.target||null),c=!1;r.length&&!c&&!r.is(".fancybox-skin")&&!r.is(".fancybox-wrap");)c=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=i(r).parent();0!==n&&!c&&1<s.group.length&&!t.canShrink&&(0<o||0<a?s.prev(0<o?"down":"left"):(0>o||0>a)&&s.next(0>o?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var n,a=t||s.coming||s.current;if(a){if(i.isFunction(a[e])&&(n=a[e].apply(a,Array.prototype.slice.call(arguments,1))),!1===n)return!1;a.helpers&&i.each(a.helpers,function(t,n){n&&s.helpers[t]&&i.isFunction(s.helpers[t][e])&&s.helpers[t][e](i.extend(!0,{},s.helpers[t].defaults,n),a)}),r.trigger(e)}},isImage:function(e){return p(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return p(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,n,a={};if(e=g(e),!(t=s.group[e]||null))return!1;if(t=(a=i.extend(!0,{},s.opts,t)).margin,n=a.padding,"number"===i.type(t)&&(a.margin=[t,t,t,t]),"number"===i.type(n)&&(a.padding=[n,n,n,n]),a.modal&&i.extend(!0,a,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),a.autoSize&&(a.autoWidth=a.autoHeight=!0),"auto"===a.width&&(a.autoWidth=!0),"auto"===a.height&&(a.autoHeight=!0),a.group=s.group,a.index=e,s.coming=a,!1===s.trigger("beforeLoad"))s.coming=null;else{if(n=a.type,t=a.href,!n)return s.coming=null,!(!s.current||!s.router||"jumpto"===s.router)&&(s.current.index=e,s[s.router](s.direction));if(s.isActive=!0,"image"!==n&&"swf"!==n||(a.autoHeight=a.autoWidth=!1,a.scrolling="visible"),"image"===n&&(a.aspectRatio=!0),"iframe"===n&&d&&(a.scrolling="scroll"),a.wrap=i(a.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+n+" fancybox-tmp "+a.wrapCSS).appendTo(a.parent||"body"),i.extend(a,{skin:i(".fancybox-skin",a.wrap),outer:i(".fancybox-outer",a.wrap),inner:i(".fancybox-inner",a.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){a.skin.css("padding"+t,u(a.padding[e]))}),s.trigger("onReady"),"inline"===n||"html"===n){if(!a.content||!a.content.length)return s._error("content")}else if(!t)return s._error("href");"image"===n?s._loadImage():"ajax"===n?s._loadAjax():"iframe"===n?s._loadIframe():s._afterLoad()}},_error:function(e){i.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,!0!==e.complete&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){i(this).data("ready",1),d||i(this).bind("load.fb",s.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,i=s.group,n=s.current,a=i.length,o=n.preload?Math.min(n.preload,a-1):0;for(t=1;t<=o;t+=1)"image"===(e=i[(n.index+t)%a]).type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,n,a,o,r=s.coming,c=s.current;if(s.hideLoading(),r&&!1!==s.isActive)if(!1===s.trigger("afterLoad",r,c))r.wrap.stop(!0).trigger("onReset").remove(),s.coming=null;else{switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=r.content,t=r.type,n=r.scrolling,i.extend(s,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:c}),a=r.href,t){case"inline":case"ajax":case"html":r.selector?e=i("<div>").html(e).find(r.selector):h(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),r.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=r.tpl.image.replace("{href}",a);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',o="",i.each(r.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',o+=" "+t+'="'+i+'"'}),e+='<iframe src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+o+"></iframe></object>"}(!h(e)||!e.parent().is(r.inner))&&r.inner.append(e),s.trigger("beforeShow"),r.inner.css("overflow","yes"===n?"scroll":"no"===n?"hidden":n),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?r.nextMethod:r.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,n,a,o,r,c,l,d,h=s.getViewport(),p=0,y=!1,b=!1,m=(y=s.wrap,s.skin),x=s.inner,w=s.current,v=(b=w.width,w.height),k=w.minWidth,C=w.minHeight,O=w.maxWidth,I=w.maxHeight,j=w.scrolling,S=w.scrollOutside?w.scrollbarWidth:0,T=w.margin,E=g(T[1]+T[3]),A=g(T[0]+T[2]);if(y.add(m).add(x).width("auto").height("auto").removeClass("fancybox-tmp"),t=E+(T=g(m.outerWidth(!0)-m.width())),n=A+(e=g(m.outerHeight(!0)-m.height())),a=f(b)?(h.w-t)*g(b)/100:b,o=f(v)?(h.h-n)*g(v)/100:v,"iframe"===w.type){if(d=w.content,w.autoHeight&&1===d.data("ready"))try{d[0].contentWindow.document.location&&(x.width(a).height(9999),r=d.contents().find("body"),S&&r.css("overflow-x","hidden"),o=r.outerHeight(!0))}catch(e){}}else(w.autoWidth||w.autoHeight)&&(x.addClass("fancybox-tmp"),w.autoWidth||x.width(a),w.autoHeight||x.height(o),w.autoWidth&&(a=x.width()),w.autoHeight&&(o=x.height()),x.removeClass("fancybox-tmp"));if(b=g(a),v=g(o),l=a/o,k=g(f(k)?g(k,"w")-t:k),O=g(f(O)?g(O,"w")-t:O),C=g(f(C)?g(C,"h")-n:C),r=O,c=I=g(f(I)?g(I,"h")-n:I),w.fitToView&&(O=Math.min(h.w-t,O),I=Math.min(h.h-n,I)),t=h.w-E,A=h.h-A,w.aspectRatio?(b>O&&(v=g((b=O)/l)),v>I&&(b=g((v=I)*l)),b<k&&(v=g((b=k)/l)),v<C&&(b=g((v=C)*l))):(b=Math.max(k,Math.min(b,O)),w.autoHeight&&"iframe"!==w.type&&(x.width(b),v=x.height()),v=Math.max(C,Math.min(v,I))),w.fitToView)if(x.width(b).height(v),y.width(b+T),h=y.width(),E=y.height(),w.aspectRatio)for(;(h>t||E>A)&&b>k&&v>C&&!(19<p++);)v=Math.max(C,Math.min(I,v-10)),(b=g(v*l))<k&&(v=g((b=k)/l)),b>O&&(v=g((b=O)/l)),x.width(b).height(v),y.width(b+T),h=y.width(),E=y.height();else b=Math.max(k,Math.min(b,b-(h-t))),v=Math.max(C,Math.min(v,v-(E-A)));S&&"auto"===j&&v<o&&b+T+S<t&&(b+=S),x.width(b).height(v),y.width(b+T),h=y.width(),E=y.height(),y=(h>t||E>A)&&b>k&&v>C,b=w.aspectRatio?b<r&&v<c&&b<a&&v<o:(b<r||v<c)&&(b<a||v<o),i.extend(w,{dim:{width:u(h),height:u(E)},origWidth:a,origHeight:o,canShrink:y,canExpand:b,wPadding:T,hPadding:e,wrapSpace:E-m.outerHeight(!0),skinSpace:m.height()-v}),!d&&w.autoHeight&&v>C&&v<I&&!b&&x.height("auto")},_getPosition:function(e){var t=s.current,i=s.getViewport(),n=t.margin,a=s.wrap.width()+n[1]+n[3],o=s.wrap.height()+n[0]+n[2];n={position:"absolute",top:n[0],left:n[3]};return t.autoCenter&&t.fixed&&!e&&o<=i.h&&a<=i.w?n.position="fixed":t.locked||(n.top+=i.y,n.left+=i.x),n.top=u(Math.max(n.top,n.top+(i.h-o)*t.topRatio)),n.left=u(Math.max(n.left,n.left+(i.w-a)*t.leftRatio)),n},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&1<s.group.length)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){!i(t.target).is("a")&&!i(t.target).parent().is("a")&&(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&1<s.group.length&&((e.loop||0<e.index)&&i(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&i(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,i=e.orig,n={},a=50,o=50,r=e.hPadding,c=e.wPadding,l=s.getViewport();return!i&&e.isDom&&t.is(":visible")&&((i=t.find("img:first")).length||(i=t)),h(i)?(n=i.offset(),i.is("img")&&(a=i.outerWidth(),o=i.outerHeight())):(n.top=l.y+(l.h-o)*e.topRatio,n.left=l.x+(l.w-a)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(n.top-=l.y,n.left-=l.x),{top:u(n.top-r*e.topRatio),left:u(n.left-c*e.leftRatio),width:u(a+c),height:u(o+r)}},step:function(e,t){var i,n,a=t.prop,o=(n=s.current).wrapSpace,r=n.skinSpace;"width"!==a&&"height"!==a||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(i=1-i),n=e-(n="width"===a?n.wPadding:n.hPadding),s.skin[a](g("width"===a?n:n-o*i)),s.inner[a](g("width"===a?n:n-o*i-r*i)))},zoomIn:function(){var e=s.current,t=e.pos,n=e.openEffect,a="elastic"===n,o=i.extend({opacity:1},t);delete o.position,a?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===n&&(t.opacity=.1),s.wrap.css(t).animate(o,{duration:"none"===n?0:e.openSpeed,easing:e.openEasing,step:a?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,i="elastic"===t,n={opacity:.1};i&&(n=this.getOrigPosition(),e.closeOpacity&&(n.opacity=.1)),s.wrap.animate(n,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,i=t.nextEffect,n=t.pos,a={opacity:1},o=s.direction;n.opacity=.1,"elastic"===i&&(e="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(n[e]=u(g(n[e])-200),a[e]="+=200px"):(n[e]=u(g(n[e])+200),a[e]="-=200px")),"none"===i?s._afterZoomIn():s.wrap.css(n).animate(a,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,n={opacity:.1},a=s.direction;"elastic"===t&&(n["down"===a||"up"===a?"top":"left"]=("up"===a||"left"===a?"-":"+")+"=200px"),e.wrap.animate(n,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){if(i(e.target).hasClass("fancybox-overlay"))return s.isActive?s.close():t.close(),!1}),this.overlay.css(e.css).show()},close:function(){var e,t;o.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),e=o.scrollTop(),t=o.scrollLeft(),this.el.removeClass("fancybox-lock"),o.scrollTop(e).scrollLeft(t)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),c?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>o.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(e,t){var n=this.overlay;i(".fancybox-overlay").stop(!0,!0),n||this.create(e),e.locked&&this.fixed&&t.fixed&&(n||(this.margin=r.height()>o.height()&&i("html").css("margin-right").replace("px","")),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var n,a;t.locked&&(!1!==this.margin&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),n=o.scrollTop(),a=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(n).scrollLeft(a)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=s.current,n=t.title,a=e.type;if(i.isFunction(n)&&(n=n.call(t.element,t)),p(n)&&""!==i.trim(n)){switch(t=i('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+n+"</div>"),a){case"inside":a=s.skin;break;case"outside":a=s.wrap;break;case"over":a=s.inner;break;default:a=s.skin,t.appendTo("body"),c&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(g(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](a)}}},i.fn.fancybox=function(e){var t,n=i(this),a=this.selector||"",o=function(o){var r,c,l=i(this).blur(),d=t;!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!o.metaKey&&!l.is(".fancybox-wrap")&&(r=e.groupAttr||"data-fancybox-group",(c=l.attr(r))||(r="rel",c=l.get(0)[r]),c&&""!==c&&"nofollow"!==c&&(d=(l=(l=a.length?i(a):n).filter("["+r+'="'+c+'"]')).index(this)),e.index=d,!1!==s.open(l,e)&&o.preventDefault())};return t=(e=e||{}).index||0,a&&!1!==e.live?r.undelegate(a,"click.fb-start").delegate(a+":not('.fancybox-item, .fancybox-nav')","click.fb-start",o):n.unbind("click.fb-start").bind("click.fb-start",o),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,o;if(i.scrollbarWidth===n&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=(t=e.children()).innerWidth()-t.height(99).innerWidth();return e.remove(),t}),i.support.fixedPosition===n){t=i.support;var r=20===(o=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop||15===o[0].offsetTop;o.remove(),t.fixedPosition=r}i.extend(s.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),a.addClass("fancybox-lock-test"),o=i(e).width(),a.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(o-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery);