$(document).ready(function(){$.bookshelfSlider=function(t,i){function e(){if(!f)switch(r.buttons_align){case"left":u.css("float","left");break;case"center":var i=0;$(t+" .button_bar").each(function(){i+=$(this).width()+r.buttons_margin}),i+=20;var e=parseInt(i/h.width()*100);u.css("width",e+"%");break;case"right":u.css("float","right"),u.css("margin-right",r.buttons_margin)}}function a(){if($(t+" #products_box_"+v+" .product:last-child").length){var i=$(t+" #products_box_"+v+" .product:last-child"),e=i.height()+i.offset().top,a=h.height()+h.offset().top;return a>e-143&&k.css("opacity",.3),e>a?!0:!1}}function n(){var i=$(t+" #products_box_"+v+" .product:first-child"),e=i.offset().top,a=h.offset().top;return e+143>a&&I.css("opacity",.3),a>e?!0:!1}function s(){new Date-O<Q?setTimeout(s,Q):(M=!1,v=0,x[0]=void 0,$(t+" .slide_animate").css("top",0),$(t+" #btn1").trigger("click"))}function o(){$(t).trigger("resize")}i&&$.extend($.bookshelfSlider.config,i);var r=$.bookshelfSlider.config,h=$(t+" .panel_slider"),d=$(t+" #arrow_menu"),c=$(t+" .slide_animate"),p=$(t+" .button_bar"),u=$(t+" .buttons_container");if(navigator.userAgent.match(/msie/i)&&navigator.userAgent.match(/7/))var f=!0;if(navigator.userAgent.match(/msie/i)&&navigator.userAgent.match(/8/))var l=!0;h.width(r.item_width),h.height(r.item_height),c.width(h.width()),c.height(r.item_height+15e3),p.css("margin-left",r.buttons_margin),e(),$(t+" .panel_bar").width(r.item_width),$(t+" .panel_title").width(r.item_width),$(t+" .product").css("margin-right",r.product_margin);var _=parseInt(p.css("margin-left")),g=$(t+" #btn1").position().left+_+$(t+" #btn1").width()/2-10;d.css("left",g),d.show(),$(t+" .panel_items").css("width","99999"),r.show_selected_title&&($(t+" .selected_title_box").show(),$(t+" .selected_title").text($("#btn1").text())),$(t+" .products_box").css("margin-left",r.products_box_margin_left),folderAssets=""!==r.folder?r.folder+"/assets":"assets",$(t+" .product").each(function(i){var e=$(this);if(""!=e.attr("title")&&"undefined"!=e.attr("title"))var a=!0;else var a=!1;var n=e.children("img");if(i++,a&&r.product_show_title){e.append("<div class='product_title' id='title_"+i+"'><p>"+e.attr("title")+"</p></div>");var s=$(t+" #title_"+i),o=n.height()-$(s).height()/2;s.css({left:(e.width()-s.width()-6)/2,top:o}),s.css({color:r.product_title_textcolor,background:r.product_title_bgcolor+" url("+folderAssets+"/title_product_bg.png) repeat"})}e.mouseenter(function(){$(s).css({overflow:"visible","max-height":987,"z-index":99}),$(t+" #i_zoom_"+i).css({"background-position":"-24px 0"}),$(t+" #i_play_"+i).css({"background-position":"-72px 0"}),$(t+" #i_link_"+i).css({"background-position":"-120px 0"}),$(t+" #i_iframe_"+i).css({"background-position":"-168px 0"})}).mouseleave(function(){$(s).css({overflow:"hidden","max-height":11}),$(t+" #i_zoom_"+i).css({"background-position":"0 0"}),$(t+" #i_play_"+i).css({"background-position":"-48px 0"}),$(t+" #i_link_"+i).css({"background-position":"-96px 0"}),$(t+" #i_iframe_"+i).css({"background-position":"-144px 0"})}),e.children("img").addClass("img_thumb");var h=e.attr("data-type");if("book"==h?(e.append("<img class='fx_book' id='b_"+i+"' + src='/assets/assets/book_fx-89434a564483cd7a76cfac4c9354de52.png' />"),$(t+" #b_"+i).css(f?{height:n.height()+4,top:e.height()-n.height()-4}:{height:n.height(),top:e.height()-n.height()})):"magazine"==h?(e.append("<img class='fx_magazine' id='m_"+i+"' + src='/assets/assets/magazine_fx-170df72680220b6763c8704f54537284.png' />"),$(t+" #m_"+i).css(f?{height:n.height()+4,top:e.height()-n.height()-4}:{height:n.height(),top:e.height()-n.height()})):"cd"==h?(e.append("<img class='fx_cd' id='cd_"+i+"' + src='/assets/assets/cd_fx-2dafbf7a848720190102ea612a80e319.png' />"),$(t+" #cd_"+i).css(f?{height:n.height()+4,top:e.height()-n.height()-4}:{height:n.height(),top:e.height()-n.height()})):"dvd"==h&&(e.append("<img class='fx_cd' id='dvd_"+i+"' + src='/assets/assets/dvd_fx-f351a78a2e7bbf344fbf2cb3001a558a.png' />"),$(t+" #dvd_"+i).css(f?{height:n.height()+4,top:e.height()-n.height()-4}:{height:n.height(),top:e.height()-n.height()})),e.append("<img class='fx_shadow' id='shd_"+i+"' + src='/assets/assets/shadow_fx-894342342bee50ab22526194dbc05338.png' />"),r.show_icons){var d=e.attr("data-url"),c=e.attr("data-popup");if(void 0!=d){var p=f?2:0;if("true"!=c||-1==d.indexOf(".jpg")&&-1==d.indexOf(".gif")&&-1==d.indexOf(".png"))if("true"!=c||-1==d.indexOf("youtube.com")&&-1==d.indexOf("vimeo.com")){if("true"==c&&""!=d&&void 0!=d){e.append("<div class='icons_sprite' id='i_iframe_"+i+"'></div>");var u=$(t+" #i_iframe_"+i);u.css({"background-position":"-144px 0",left:(n.width()-u.width())/2+p,top:e.height()-n.height()/2-u.height()/2-p,opacity:1})}else if(""!=d&&void 0!=d){e.append("<div class='icons_sprite' id='i_link_"+i+"'></div>");var l=$(t+" #i_link_"+i);l.css({"background-position":"-96px 0",left:(n.width()-l.width())/2+p,top:e.height()-n.height()/2-l.height()/2-p,opacity:1})}}else{e.append("<div class='icons_sprite' id='i_play_"+i+"'></div>");var _=$(t+" #i_play_"+i);_.css({"background-position":"-48px 0",left:(n.width()-_.width())/2+p,top:e.height()-n.height()/2-_.height()/2-p,opacity:1})}else{e.append("<div class='icons_sprite' id='i_zoom_"+i+"'></div>");var g=$(t+" #i_zoom_"+i);g.css({"background-position":"0 0",left:(n.width()-g.width())/2+p,top:e.height()-n.height()/2-g.height()/2-p,opacity:1})}}}if(e.height()!=n.height()){var m=e.height()-n.height();f?(n.css("top",m-4),$(t+" #shd_"+i).css({height:n.height()+4,left:n.width()+4,top:m-4})):(n.css("top",m),$(t+" #shd_"+i).css({height:n.height(),left:n.width(),top:m})),a&&r.product_show_title&&$(s).css("top",e.height()-$(s).height()/2)}});var m=0,w=0;p.click(function(i){i.preventDefault();var e=$(this);if(v-1==e.index())return!1;0!=parseInt(c.css("top"))&&c.animate({top:0,opacity:1},{duration:300});var n=e.attr("id"),s=$(t+" #"+n),o=s.position(),h=s.width(),p=o.left+_+h/2-10;d.animate({left:p},{duration:r.arrow_duration,easing:r.arrow_easing,complete:function(){r.show_selected_title&&$(t+" .selected_title").text(s.text())}}),w=parseInt($(t+" .panel_slider").css("width"))*e.index(),m=-w,c.animate({left:m,top:0},{duration:r.slide_duration,easing:r.slide_easing,complete:function(){}}),b=0,k.css("opacity",.3),I.css("opacity",.3),v=e.index()+1,void 0==x[0]&&($(c).each(function(t){x[t]=a(),v++}),v=e.index()+1),x[e.index()]?(k.css("opacity",1),y.show(),y.fadeTo("normal",1),$(t+" .panel_slider").mouseenter(function(){y.show(),y.fadeTo("normal",1)}).mouseleave(function(){y.hide()})):y.hide()});var v=0,b=0,x=[];$(t+" .panel_slider").append("<div id='more_minus_box'><input type='button' id='icon_minus' /><input type='button' id='icon_more' /></div>");var y=$(t+" #more_minus_box"),k=$(t+" #icon_more"),I=$(t+" #icon_minus");I.click(function(){if(1==I.css("opacity")){$(this).attr("disabled","disabled");var t=n();t&&(b-=143,k.css("opacity",1),c.animate({left:m,top:-b},{duration:r.slide_duration/2,easing:r.slide_easing,complete:function(){I.removeAttr("disabled")}}))}}),k.click(function(){if(1==k.css("opacity")){$(this).attr("disabled","disabled");var t=a();t&&(b+=143,I.css("opacity",1),c.animate({left:m,top:-b},{duration:r.slide_duration/2,easing:r.slide_easing,complete:function(){k.removeAttr("disabled")}}))}}),$(t+" .show_hide_titles").click(function(i){i.preventDefault(),1==$(t+" .product_title").css("opacity")?($(t+" .product_title").stop().animate({opacity:0},400),$(this).css({opacity:.5})):($(t+" .product_title").stop().animate({opacity:1},500),$(this).css({opacity:1}))}),$(t+" .show_hide_icons").click(function(i){i.preventDefault(),1==$(t+" .icons_sprite").css("opacity")?($(t+" .icons_sprite").stop().animate({opacity:0},400),$(this).css({opacity:.5})):($(t+" .icons_sprite").stop().animate({opacity:1},400),$(this).css({opacity:1}))}),$(t+" .product").click(function(t){function i(t,i,e,a){var n=$("#popup_info");n.delay(100).animate({top:d/2-n.height()/2,left:h/2-n.width()/2},400,function(){$("#preload_icon").remove()});var s=h/2-t/2-15,o=d/2-i/2;n.delay(100).animate({height:i,width:t,top:o,left:s},400,function(){if(n.append(e),$(e).fadeIn(600),""!=$(a).attr("title")&&"undefined"!=$(a).attr("title")){var i=$(a).attr("title");n.append(r.show_title_in_popup?"<div id='popup_title'><div id='bs_close_button'></div>"+i+"</div>":"<div id='popup_title'><div id='bs_close_button'></div></div>");var s=parseInt(n.css("padding-left")+t),o=parseInt(t)+parseInt(s);$("#popup_title").css({width:o,top:-(2*s),left:0}),$("#popup_title").fadeIn(200),$("#popup_title").fadeTo("normal",1),$("#bs_close_button").click(function(){$("#mask_popup").hide(),$("#mask_popup").remove(),$("#popup_info").remove()})}})}t.preventDefault();var e=$(this),a=e.attr("data-url"),n=e.attr("data-popup");if("true"!=n)return void 0==a||""==a?void 0:void window.open(a,"_blank");if("true"!=n||void 0!=a&&""!=a){$("body").append('<div id="mask_popup"></div>'),$("body").append('<div id="popup_info"></div>'),$("#popup_info").append("<img id='preload_icon' src='/assets/assets/preload-b26442d0022a778ff91a93463911614b.gif' />");var s=$("#mask_popup"),o=$("#popup_info"),h=$(window).width(),d=$(window).height(),c=$(document).height();s.css({width:h,height:c}),s.fadeIn(400),s.fadeTo("normal",.7),o.css({top:d/2-o.height()/2,left:h/2-o.width()/2});var p=-1!=a.indexOf(".jpg")||-1!=a.indexOf(".gif")||-1!=a.indexOf(".png")?!0:!1,u=-1!=a.indexOf("youtube.com")?!0:!1,_=-1!=a.indexOf("vimeo.com")?!0:!1,g=-1!=a.indexOf(".jpg")||-1!=a.indexOf(".gif")||-1!=a.indexOf(".png")||_||u?!1:!0;if(p){var m=e;if(f||l)var w=$("<img />").attr("src",a+"?"+(new Date).getTime());else var w=$("<img />").attr("src",a);w.load(function(){this.width,this.height;if(this.width+60>h){var t=h-120,e=this.width,a=t/e*100;this.height=a/100*this.height,this.width=t}if(this.height+60>d){var t=d-120,e=this.height,a=t/e*100;this.width=a/100*this.width,this.height=t}i(this.width,this.height,w,m),$(w).hide()})}else if(u){r.video_width_height[0]>h&&(r.video_width_height[0]=h-80);var v=a.split("?v="),b="?autohide=2&amp;autoplay=1&amp;controls=1&amp;disablekb=0&amp;fs=1&amp;hd=0&amp;loop=0&amp;rel=1&amp;showinfo=0&amp;showsearch=1&amp;wmode=transparent&amp;enablejsapi=1",x='<iframe class="video_player" width="'+r.video_width_height[0]+'" height="'+r.video_width_height[1]+'" frameborder="0" src="http://www.youtube.com/embed/'+v[1]+b+'"></iframe>';i(r.video_width_height[0],r.video_width_height[1],x,e)}else if(_){r.video_width_height[0]>h&&(r.video_width_height[0]=h-80);var v=a.split("/").pop(),x='<iframe class="video_player" src="http://player.vimeo.com/video/'+v+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="'+r.video_width_height[0]+'" height="'+r.video_width_height[1]+'" frameborder="0"></iframe>';i(r.video_width_height[0],r.video_width_height[1],x,e)}else if(g){if(-1!=a.indexOf("?"))var y=a.split("?size=").pop().split("&"),k=y[0].split("x"),I=k[0],O=k[1];else var I=r.iframe_width_height[0],O=r.iframe_width_height[1];-1!=I.indexOf("%")&&(I=$(window).width()-80),-1!=O.indexOf("%")&&(O=$(window).height()-100),I>h&&(I=h-120),O>d&&(O=d-120);var x='<iframe id="iframe_content" src="'+a+'" width="'+I+'" height="'+O+'" frameborder="0"></iframe>';i(I,O,x,e)}$("#mask_popup").click(function(){$("#mask_popup").hide(),$("#mask_popup").remove(),$("#popup_info").remove()})}}),$(t+" #btn1").trigger("click");var O=new Date(1,1,2e3,12,0,0),M=!1,Q=200;return $(window).resize(function(){if(O=new Date,M===!1&&(M=!0,setTimeout(s,Q)),$(t).width()>$(window).width()){$(t).width($(window).width()),$(t+" .slide_animate").width($(t+" .panel_slider").width());var i=$(t+" .panel_slider").width()*(v-1);$(t+" .slide_animate").css("left",-i)}if($(t).width()<=$(window).width()){$(t).width("100%"),$(t+" .slide_animate").width($(t+" .panel_slider").width());var i=$(t+" .panel_slider").width()*(v-1);$(t+" .slide_animate").css("left",-i)}e(),u.css({maxWidth:"100%"});var a=$("#popup_info");if($(t).width()>a.width()){{var n=$(window).width(),o=$(window).height();$(document).height()}a.css({top:o/2-a.height()/2,left:n/2-a.width()/2});var r=$("#mask_popup");r.css({width:n,height:o})}}),setTimeout(o,1e3),this},$.bookshelfSlider.config={item_width:355,item_height:320,products_box_margin_left:20,product_title_textcolor:"#ffffff",product_title_bgcolor:"#c33b4e",product_margin:30,product_show_title:!0,show_title_in_popup:!0,show_selected_title:!0,show_icons:!0,buttons_margin:10,buttons_align:"center",slide_duration:1e3,slide_easing:"easeInOutExpo",arrow_duration:800,arrow_easing:"easeInOutExpo",video_width_height:[500,290],iframe_width_height:[400,300],folder:""}}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,i,e,a,n){return jQuery.easing[jQuery.easing.def](t,i,e,a,n)},easeInQuad:function(t,i,e,a,n){return a*(i/=n)*i+e},easeOutQuad:function(t,i,e,a,n){return-a*(i/=n)*(i-2)+e},easeInOutQuad:function(t,i,e,a,n){return(i/=n/2)<1?a/2*i*i+e:-a/2*(--i*(i-2)-1)+e},easeInCubic:function(t,i,e,a,n){return a*(i/=n)*i*i+e},easeOutCubic:function(t,i,e,a,n){return a*((i=i/n-1)*i*i+1)+e},easeInOutCubic:function(t,i,e,a,n){return(i/=n/2)<1?a/2*i*i*i+e:a/2*((i-=2)*i*i+2)+e},easeInQuart:function(t,i,e,a,n){return a*(i/=n)*i*i*i+e},easeOutQuart:function(t,i,e,a,n){return-a*((i=i/n-1)*i*i*i-1)+e},easeInOutQuart:function(t,i,e,a,n){return(i/=n/2)<1?a/2*i*i*i*i+e:-a/2*((i-=2)*i*i*i-2)+e},easeInQuint:function(t,i,e,a,n){return a*(i/=n)*i*i*i*i+e},easeOutQuint:function(t,i,e,a,n){return a*((i=i/n-1)*i*i*i*i+1)+e},easeInOutQuint:function(t,i,e,a,n){return(i/=n/2)<1?a/2*i*i*i*i*i+e:a/2*((i-=2)*i*i*i*i+2)+e},easeInSine:function(t,i,e,a,n){return-a*Math.cos(i/n*(Math.PI/2))+a+e},easeOutSine:function(t,i,e,a,n){return a*Math.sin(i/n*(Math.PI/2))+e},easeInOutSine:function(t,i,e,a,n){return-a/2*(Math.cos(Math.PI*i/n)-1)+e},easeInExpo:function(t,i,e,a,n){return 0==i?e:a*Math.pow(2,10*(i/n-1))+e},easeOutExpo:function(t,i,e,a,n){return i==n?e+a:a*(-Math.pow(2,-10*i/n)+1)+e},easeInOutExpo:function(t,i,e,a,n){return 0==i?e:i==n?e+a:(i/=n/2)<1?a/2*Math.pow(2,10*(i-1))+e:a/2*(-Math.pow(2,-10*--i)+2)+e},easeInCirc:function(t,i,e,a,n){return-a*(Math.sqrt(1-(i/=n)*i)-1)+e},easeOutCirc:function(t,i,e,a,n){return a*Math.sqrt(1-(i=i/n-1)*i)+e},easeInOutCirc:function(t,i,e,a,n){return(i/=n/2)<1?-a/2*(Math.sqrt(1-i*i)-1)+e:a/2*(Math.sqrt(1-(i-=2)*i)+1)+e},easeInElastic:function(t,i,e,a,n){var s=1.70158,o=0,r=a;if(0==i)return e;if(1==(i/=n))return e+a;if(o||(o=.3*n),r<Math.abs(a)){r=a;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(a/r);return-(r*Math.pow(2,10*(i-=1))*Math.sin(2*(i*n-s)*Math.PI/o))+e},easeOutElastic:function(t,i,e,a,n){var s=1.70158,o=0,r=a;if(0==i)return e;if(1==(i/=n))return e+a;if(o||(o=.3*n),r<Math.abs(a)){r=a;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(a/r);return r*Math.pow(2,-10*i)*Math.sin(2*(i*n-s)*Math.PI/o)+a+e},easeInOutElastic:function(t,i,e,a,n){var s=1.70158,o=0,r=a;if(0==i)return e;if(2==(i/=n/2))return e+a;if(o||(o=.3*n*1.5),r<Math.abs(a)){r=a;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(a/r);return 1>i?-.5*r*Math.pow(2,10*(i-=1))*Math.sin(2*(i*n-s)*Math.PI/o)+e:r*Math.pow(2,-10*(i-=1))*Math.sin(2*(i*n-s)*Math.PI/o)*.5+a+e},easeInBack:function(t,i,e,a,n,s){return void 0==s&&(s=1.70158),a*(i/=n)*i*((s+1)*i-s)+e},easeOutBack:function(t,i,e,a,n,s){return void 0==s&&(s=1.70158),a*((i=i/n-1)*i*((s+1)*i+s)+1)+e},easeInOutBack:function(t,i,e,a,n,s){return void 0==s&&(s=1.70158),(i/=n/2)<1?a/2*i*i*(((s*=1.525)+1)*i-s)+e:a/2*((i-=2)*i*(((s*=1.525)+1)*i+s)+2)+e},easeInBounce:function(t,i,e,a,n){return a-jQuery.easing.easeOutBounce(t,n-i,0,a,n)+e},easeOutBounce:function(t,i,e,a,n){return(i/=n)<1/2.75?7.5625*a*i*i+e:2/2.75>i?a*(7.5625*(i-=1.5/2.75)*i+.75)+e:2.5/2.75>i?a*(7.5625*(i-=2.25/2.75)*i+.9375)+e:a*(7.5625*(i-=2.625/2.75)*i+.984375)+e},easeInOutBounce:function(t,i,e,a,n){return n/2>i?.5*jQuery.easing.easeInBounce(t,2*i,0,a,n)+e:.5*jQuery.easing.easeOutBounce(t,2*i-n,0,a,n)+.5*a+e}}),function(){jQuery(document).ready(function(){return $.bookshelfSlider("#bookshelf_slider",{item_width:"100%",item_height:300,products_box_margin_left:30,product_title_textcolor:"#ffffff",product_title_bgcolor:"#0850A1",product_margin:20,product_show_title:!0,show_title_in_popup:!1,show_selected_title:!0,show_icons:!0,buttons_margin:15,buttons_align:"center",slide_duration:800,slide_easing:"easeOutQuart",arrow_duration:800,arrow_easing:"easeInOutQuart",video_width_height:[500,290],iframe_width_height:[500,330]})})}.call(this),function(){$(document).ready(function(){return $(window).resize(function(){})})}.call(this),function(){var t;t=$("#navbar-affixable-wrapper > #navbar.affixable").height()-1,$(".scrollspy ul li a[href^='#']").on("click",function(i){var e;return e=this.hash,i.preventDefault(),$("html, body").animate({scrollTop:$(this.hash).offset().top-t},400,function(){return window.history.pushState(null,null,e)})})}.call(this);