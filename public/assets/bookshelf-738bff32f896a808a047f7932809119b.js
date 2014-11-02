//Bookshelf Slider jQuery Plugin - v1.6
//Author: Sergio Valle
(function(e){e.bookshelfSlider=function(t,n){function c(){if(!f){switch(r.buttons_align){case"left":a.css("float","left");break;case"center":var n=0;e(t+" .button_bar").each(function(){n+=e(this).width()+r.buttons_margin});n+=20;var s=parseInt(n/i.width()*100);a.css("width",s+"%");break;case"right":a.css("float","right");a.css("margin-right",r.buttons_margin);break}}}function S(){if(e(t+" #products_box_"+m+" .product:last-child").length){var n=e(t+" #products_box_"+m+" .product:last-child");var r=n.height()+n.offset().top;var s=i.height()+i.offset().top;if(r-143<s){w.css("opacity",.3)}if(r>s){return true}else{return false}}}function x(){var n=e(t+" #products_box_"+m+" .product:first-child");var r=n.offset().top;var s=i.offset().top;if(r+143>s){E.css("opacity",.3)}if(r<s){return true}else{return false}}function T(){if(new Date-N<k){setTimeout(T,k)}else{C=false;m=0;y[0]=undefined;e(t+" .slide_animate").css("top",0);e(t+" #btn1").trigger("click")}}function L(){e(t).trigger("resize")}if(n){e.extend(e.bookshelfSlider.config,n)}var r=e.bookshelfSlider.config;var i=e(t+" .panel_slider");var s=e(t+" #arrow_menu");var o=e(t+" .slide_animate");var u=e(t+" .button_bar");var a=e(t+" .buttons_container");if(navigator.userAgent.match(/msie/i)&&navigator.userAgent.match(/7/)){var f=true}if(navigator.userAgent.match(/msie/i)&&navigator.userAgent.match(/8/)){var l=true}i.width(r.item_width);i.height(r.item_height);o.width(i.width());o.height(r.item_height+15e3);u.css("margin-left",r.buttons_margin);c();e(t+" .panel_bar").width(r.item_width);e(t+" .panel_title").width(r.item_width);e(t+" .product").css("margin-right",r.product_margin);var h=parseInt(u.css("margin-left"));var p=e(t+" #btn1").position().left+h+e(t+" #btn1").width()/2-10;s.css("left",p);s.show();e(t+" .panel_items").css("width","99999");if(r.show_selected_title){e(t+" .selected_title_box").show();e(t+" .selected_title").text(e("#btn1").text())}e(t+" .products_box").css("margin-left",r.products_box_margin_left);if(r.folder!==""){folderAssets=r.folder+"/assets"}else{folderAssets="assets"}e(t+" .product").each(function(n){var i=e(this);if(i.attr("title")!=""&&i.attr("title")!="undefined"){var s=true}else{var s=false}var o=i.children("img");n++;if(s&&r.product_show_title){i.append("<div class='product_title' id='title_"+n+"'><p>"+i.attr("title")+"</p></div>");var u=e(t+" #title_"+n);var a=o.height()-e(u).height()/2;u.css({left:(i.width()-u.width()-6)/2,top:a});u.css({color:r.product_title_textcolor,background:r.product_title_bgcolor+" url("+folderAssets+"/title_product_bg.png) repeat"})}i.mouseenter(function(){e(u).css({overflow:"visible","max-height":80});e(t+" #i_zoom_"+n).css({"background-position":"-24px 0"});e(t+" #i_play_"+n).css({"background-position":"-72px 0"});e(t+" #i_link_"+n).css({"background-position":"-120px 0"});e(t+" #i_iframe_"+n).css({"background-position":"-168px 0"})}).mouseleave(function(){e(u).css({overflow:"hidden","max-height":11});e(t+" #i_zoom_"+n).css({"background-position":"0 0"});e(t+" #i_play_"+n).css({"background-position":"-48px 0"});e(t+" #i_link_"+n).css({"background-position":"-96px 0"});e(t+" #i_iframe_"+n).css({"background-position":"-144px 0"})});i.children("img").addClass("img_thumb");var l=i.attr("data-type");if(l=="book"){i.append("<img class='fx_book' id='b_"+n+"' + src='"+folderAssets+"/book_fx.png' />");if(f){e(t+" #b_"+n).css({height:o.height()+4,top:i.height()-o.height()-4})}else{e(t+" #b_"+n).css({height:o.height(),top:i.height()-o.height()})}}else if(l=="magazine"){i.append("<img class='fx_magazine' id='m_"+n+"' + src='"+folderAssets+"/magazine_fx.png' />");if(f){e(t+" #m_"+n).css({height:o.height()+4,top:i.height()-o.height()-4})}else{e(t+" #m_"+n).css({height:o.height(),top:i.height()-o.height()})}}else if(l=="cd"){i.append("<img class='fx_cd' id='cd_"+n+"' + src='"+folderAssets+"/cd_fx.png' />");if(f){e(t+" #cd_"+n).css({height:o.height()+4,top:i.height()-o.height()-4})}else{e(t+" #cd_"+n).css({height:o.height(),top:i.height()-o.height()})}}else if(l=="dvd"){i.append("<img class='fx_cd' id='dvd_"+n+"' + src='"+folderAssets+"/dvd_fx.png' />");if(f){e(t+" #dvd_"+n).css({height:o.height()+4,top:i.height()-o.height()-4})}else{e(t+" #dvd_"+n).css({height:o.height(),top:i.height()-o.height()})}}i.append("<img class='fx_shadow' id='shd_"+n+"' + src='"+folderAssets+"/shadow_fx.png' />");if(r.show_icons){var c=i.attr("data-url");var h=i.attr("data-popup");if(c!=undefined){var p=f?2:0;if(h=="true"&&(c.indexOf(".jpg")!=-1||c.indexOf(".gif")!=-1||c.indexOf(".png")!=-1)){i.append("<div class='icons_sprite' id='i_zoom_"+n+"'></div>");var d=e(t+" #i_zoom_"+n);d.css({"background-position":"0 0",left:(o.width()-d.width())/2+p,top:i.height()-o.height()/2-d.height()/2-p,opacity:1})}else if(h=="true"&&(c.indexOf("youtube.com")!=-1||c.indexOf("vimeo.com")!=-1)){i.append("<div class='icons_sprite' id='i_play_"+n+"'></div>");var v=e(t+" #i_play_"+n);v.css({"background-position":"-48px 0",left:(o.width()-v.width())/2+p,top:i.height()-o.height()/2-v.height()/2-p,opacity:1})}else if(h=="true"&&c!=""&&c!=undefined){i.append("<div class='icons_sprite' id='i_iframe_"+n+"'></div>");var m=e(t+" #i_iframe_"+n);m.css({"background-position":"-144px 0",left:(o.width()-m.width())/2+p,top:i.height()-o.height()/2-m.height()/2-p,opacity:1})}else if(c!=""&&c!=undefined){i.append("<div class='icons_sprite' id='i_link_"+n+"'></div>");var g=e(t+" #i_link_"+n);g.css({"background-position":"-96px 0",left:(o.width()-g.width())/2+p,top:i.height()-o.height()/2-g.height()/2-p,opacity:1})}}}if(i.height()!=o.height()){var y=i.height()-o.height();if(f){o.css("top",y-4);e(t+" #shd_"+n).css({height:o.height()+4,left:o.width()+4,top:y-4})}else{o.css("top",y);e(t+" #shd_"+n).css({height:o.height(),left:o.width(),top:y})}if(s&&r.product_show_title){e(u).css("top",i.height()-e(u).height()/2)}}});var d=0;var v=0;u.click(function(n){n.preventDefault();var i=e(this);if(m-1==i.index())return false;if(parseInt(o.css("top"))!=0){o.animate({top:0,opacity:1},{duration:300})}var u=i.attr("id");var a=e(t+" #"+u);var f=a.position();var l=a.width();var c=f.left+h+l/2-10;s.animate({left:c},{duration:r.arrow_duration,easing:r.arrow_easing,complete:function(){if(r.show_selected_title)e(t+" .selected_title").text(a.text())}});v=parseInt(e(t+" .panel_slider").css("width"))*i.index();d=-v;o.animate({left:d,top:0},{duration:r.slide_duration,easing:r.slide_easing,complete:function(){}});g=0;w.css("opacity",.3);E.css("opacity",.3);m=i.index()+1;if(y[0]==undefined){e(o).each(function(e){y[e]=S();m++});m=i.index()+1}if(y[i.index()]){w.css("opacity",1);b.show();b.fadeTo("normal",1);e(t+" .panel_slider").mouseenter(function(){b.show();b.fadeTo("normal",1)}).mouseleave(function(){b.hide()})}else{b.hide()}});var m=0;var g=0;var y=[];e(t+" .panel_slider").append("<div id='more_minus_box'><input type='button' id='icon_minus' /><input type='button' id='icon_more' /></div>");var b=e(t+" #more_minus_box");var w=e(t+" #icon_more");var E=e(t+" #icon_minus");E.click(function(t){if(E.css("opacity")!=1)return;e(this).attr("disabled","disabled");var n=x();if(!n){return}g-=143;w.css("opacity",1);o.animate({left:d,top:-g},{duration:r.slide_duration/2,easing:r.slide_easing,complete:function(){E.removeAttr("disabled")}})});w.click(function(t){if(w.css("opacity")!=1)return;e(this).attr("disabled","disabled");var n=S();if(!n){return}g+=143;E.css("opacity",1);o.animate({left:d,top:-g},{duration:r.slide_duration/2,easing:r.slide_easing,complete:function(){w.removeAttr("disabled")}})});e(t+" .show_hide_titles").click(function(n){n.preventDefault();if(e(t+" .product_title").css("opacity")==1){e(t+" .product_title").stop().animate({opacity:0},400);e(this).css({opacity:.5})}else{e(t+" .product_title").stop().animate({opacity:1},500);e(this).css({opacity:1})}});e(t+" .show_hide_icons").click(function(n){n.preventDefault();if(e(t+" .icons_sprite").css("opacity")==1){e(t+" .icons_sprite").stop().animate({opacity:0},400);e(this).css({opacity:.5})}else{e(t+" .icons_sprite").stop().animate({opacity:1},400);e(this).css({opacity:1})}});e(t+" .product").click(function(t){function C(t,n,i,s){var o=e("#popup_info");o.delay(100).animate({top:c/2-o.height()/2,left:a/2-o.width()/2},400,function(){e("#preload_icon").remove()});var u=a/2-t/2-15;var f=c/2-n/2;o.delay(100).animate({height:n,width:t,top:f,left:u},400,function(){o.append(i);e(i).fadeIn(600);if(e(s).attr("title")!=""&&e(s).attr("title")!="undefined"){var n=e(s).attr("title");if(r.show_title_in_popup){o.append("<div id='popup_title'><div id='bs_close_button'></div>"+n+"</div>")}else{o.append("<div id='popup_title'><div id='bs_close_button'></div></div>")}var u=parseInt(o.css("padding-left")+t);var a=parseInt(t)+parseInt(u);e("#popup_title").css({width:a,top:-(u*2),left:0});e("#popup_title").fadeIn(200);e("#popup_title").fadeTo("normal",1);e("#bs_close_button").click(function(){e("#mask_popup").hide();e("#mask_popup").remove();e("#popup_info").remove()})}})}t.preventDefault();var n=e(this);var i=n.attr("data-url");var s=n.attr("data-popup");if(s!="true"){if(i==undefined||i==""){return}else{window.open(i,"_blank");return}}if(s=="true"&&(i==undefined||i==""))return;e("body").append('<div id="mask_popup"></div>');e("body").append('<div id="popup_info"></div>');e("#popup_info").append("<img id='preload_icon' src='"+folderAssets+"/preload.gif' />");var o=e("#mask_popup");var u=e("#popup_info");var a=e(window).width();var c=e(window).height();var h=e(document).height();o.css({width:a,height:h});o.fadeIn(400);o.fadeTo("normal",.7);u.css({top:c/2-u.height()/2,left:a/2-u.width()/2});var p=i.indexOf(".jpg")!=-1||i.indexOf(".gif")!=-1||i.indexOf(".png")!=-1?true:false;var d=i.indexOf("youtube.com")!=-1?true:false;var v=i.indexOf("vimeo.com")!=-1?true:false;var m=i.indexOf(".jpg")==-1&&i.indexOf(".gif")==-1&&i.indexOf(".png")==-1&&!v&&!d?true:false;if(p){var g=n;if(f||l){var y=e("<img />").attr("src",i+"?"+(new Date).getTime())}else{var y=e("<img />").attr("src",i)}y.load(function(){var t=this.width;var n=this.height;if(this.width+60>a){var r=a-120;var i=this.width;var s=r/i*100;this.height=s/100*this.height;this.width=r}if(this.height+60>c){var r=c-120;var i=this.height;var s=r/i*100;this.width=s/100*this.width;this.height=r}C(this.width,this.height,y,g);e(y).hide()})}else if(d){if(r.video_width_height[0]>a){r.video_width_height[0]=a-80}var b=i.split("?v=");var w="?autohide=2&autoplay=1&controls=1&disablekb=0&fs=1&hd=0&loop=0&rel=1&showinfo=0&showsearch=1&wmode=transparent&enablejsapi=1";var E='<iframe class="video_player" width="'+r.video_width_height[0]+'" height="'+r.video_width_height[1]+'" frameborder="0" src="http://www.youtube.com/embed/'+b[1]+w+'"></iframe>';C(r.video_width_height[0],r.video_width_height[1],E,n)}else if(v){if(r.video_width_height[0]>a){r.video_width_height[0]=a-80}var b=i.split("/").pop();var E='<iframe class="video_player" src="http://player.vimeo.com/video/'+b+'?title=0&byline=0&portrait=0&autoplay=1" width="'+r.video_width_height[0]+'" height="'+r.video_width_height[1]+'" frameborder="0"></iframe>';C(r.video_width_height[0],r.video_width_height[1],E,n)}else if(m){if(i.indexOf("?")!=-1){var S=i.split("?size=").pop().split("&");var x=S[0].split("x");var T=x[0];var N=x[1]}else{var T=r.iframe_width_height[0],N=r.iframe_width_height[1]}if(T.indexOf("%")!=-1){T=e(window).width()-80}if(N.indexOf("%")!=-1){N=e(window).height()-100}if(T>a){T=a-120}if(N>c){N=c-120}var E='<iframe id="iframe_content" src="'+i+'" width="'+T+'" height="'+N+'" frameborder="0"></iframe>';C(T,N,E,n)}e("#mask_popup").click(function(){e("#mask_popup").hide();e("#mask_popup").remove();e("#popup_info").remove()})});e(t+" #btn1").trigger("click");var N=new Date(1,1,2e3,12,0,0);var C=false;var k=200;e(window).resize(function(){N=new Date;if(C===false){C=true;setTimeout(T,k)}if(e(t).width()>e(window).width()){e(t).width(e(window).width());e(t+" .slide_animate").width(e(t+" .panel_slider").width());var n=e(t+" .panel_slider").width()*(m-1);e(t+" .slide_animate").css("left",-n)}if(e(t).width()<=e(window).width()){e(t).width("100%");e(t+" .slide_animate").width(e(t+" .panel_slider").width());var n=e(t+" .panel_slider").width()*(m-1);e(t+" .slide_animate").css("left",-n)}c();a.css({maxWidth:"100%"});var r=e("#popup_info");if(e(t).width()>r.width()){var i=e(window).width();var s=e(window).height();var o=e(document).height();r.css({top:s/2-r.height()/2,left:i/2-r.width()/2});var u=e("#mask_popup");u.css({width:i,height:s})}});setTimeout(L,1e3);return this};e.bookshelfSlider.config={item_width:355,item_height:320,products_box_margin_left:20,product_title_textcolor:"#ffffff",product_title_bgcolor:"#c33b4e",product_margin:30,product_show_title:true,show_title_in_popup:true,show_selected_title:true,show_icons:true,buttons_margin:10,buttons_align:"center",slide_duration:1e3,slide_easing:"easeInOutExpo",arrow_duration:800,arrow_easing:"easeInOutExpo",video_width_height:[500,290],iframe_width_height:[400,300],folder:""}})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;


