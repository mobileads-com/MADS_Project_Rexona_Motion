var mads=function(){"undefined"==typeof custTracker&&"undefined"!=typeof rma?this.custTracker=rma.customize.custTracker:"undefined"!=typeof custTracker?this.custTracker=custTracker:this.custTracker=[],this.id=this.uniqId(),this.tracked=[],this.bodyTag=document.getElementsByTagName("body")[0],this.headTag=document.getElementsByTagName("head")[0],this.contentTag=document.getElementById("rma-widget"),this.path="undefined"!=typeof rma?rma.customize.src:""};mads.prototype.uniqId=function(){return(new Date).getTime()},mads.prototype.linkOpener=function(e){"undefined"!=typeof e&&""!=e&&("undefined"!=typeof mraid?mraid.open(e):window.open(e))},mads.prototype.tracker=function(e,t,i,n){if(i=i||t,"undefined"!=typeof this.custTracker&&""!=this.custTracker&&-1==this.tracked.indexOf(i))for(var a=0;a<this.custTracker.length;a++){var o=document.createElement("img");"undefined"==typeof n&&(n="");var r=this.custTracker[a].replace("{{type}}",t);r=r.replace("{{tt}}",e),r=r.replace("{{value}}",n),o.src=r+"&"+this.id,o.style.display="none",this.bodyTag.appendChild(o),this.tracked.push(i)}},mads.prototype.loadJs=function(e,t){var i=document.createElement("script");i.src=e,"undefined"!=typeof t&&(i.onload=t),this.headTag.appendChild(i)},mads.prototype.loadCss=function(e){var t=document.createElement("link");t.href=e,t.setAttribute("type","text/css"),t.setAttribute("rel","stylesheet"),this.headTag.appendChild(t)};var testunit=function(){var e=new mads;console.log("undefined"!=typeof e.bodyTag),console.log("undefined"!=typeof e.headTag),console.log("undefined"!=typeof e.custTracker),console.log("undefined"!=typeof e.path),console.log("undefined"!=typeof e.contentTag),e.loadJs("https://code.jquery.com/jquery-1.11.3.min.js",function(){console.log("undefined"!=typeof window.jQuery)}),e.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"),e.contentTag.innerHTML="",e.custTracker=["http://www.tracker.com?type={{type}}&tt={{tt}}","http://www.tracker2.com?type={{type}}"],e.tracker("CTR","test"),e.tracker("E","test","name"),e.linkOpener("http://www.google.com")},playMolecule=function(e,t){function i(i){var n={},a=0,r=0,c=i.ticksPerFrame||0,s=i.numberOfFrames||1;n.context=i.context,n.width=i.width,n.height=i.height,n.image=i.image,n.render=function(){n.context.clearRect(0,0,n.width,n.height),n.context.drawImage(n.image,a*n.width/s,0,n.width/s,n.height,0,0,n.width/s,n.height)},n.loop=i.loop;var l=!1,u=!1;return n.update=function(){if(r+=1,r>c){r=0,s-1>a?a+=1:n.loop?a=0:t&&t.after&&!u&&(u=!0,o&&(window.cancelAnimFrame(o),o=void 0),t.after()),a===Math.round(s/2)&&t&&t.middle&&!l&&(l=!0,$(e).trigger("stopRumble"),t.middle());var i=e.split(" ")[0].replace(".","");i.indexOf("music")>-1?(1===a&&$("."+i+" .image").removeClass(i+"-3").addClass(i+"-1"),10===a&&$("."+i+" .image").removeClass(i+"-1").addClass(i+"-2"),19===a&&$("."+i+" .image").removeClass(i+"-2").addClass(i+"-3")):(5===a&&$("."+i+" .image").removeClass(i+"-1").addClass(i+"-2"),17===a&&$("."+i+" .image").removeClass(i+"-2").addClass(i+"-3"))}},n}var n=new Image;n.src="img/bubblesprite.png";var a=$(e)[0];a.width=43,a.height=50;var o,r=i({context:a.getContext("2d"),width:946,height:50,image:n,numberOfFrames:22,ticksPerFrame:2});window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),n.onload=function(){function t(){o=window.requestAnimFrame(t),r.update(),r.render()}$(e).jrumble({x:.4,y:.4,speed:5}),$(e).trigger("startRumble"),t()}},isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}},rexonamotion=function(){for(var e=window.setTimeout(function(){},0);e--;)window.clearTimeout(e);var t=new mads;t.autoTimeout=null,t.loadCss("css/animations.css"),t.loadCss("css/style.min.css"),t.loadJs("js/jquery-1.11.3.min.js",function(){return"undefined"==typeof window.jQuery?!1:void function(e){var i=e(t.contentTag),n=1500,a=10;i.load("tpl/template.html",function(){t.loadJs("js/libs.js",function(){t.loadJs("js/pagetransitions.js",function(){var i=new ytComponent({container:"player",width:"320",height:"185",videoId:"hUjMb5z2JR8",autoplay:!1,tracker:t.tracker}),o=window.PageTransitions||null;e(".ra_click").on("click",function(){t.tracker("E","male_product"),o.nextPage({animation:46,finished:function(){var r=function(){var i=e.Deferred(),a=!1;return e(".male-run")[0].addEventListener("swipeleft",function(){return a?!1:(a=!0,t.tracker("E","swiped"),e(".male-run .action").css("opacity",0),void playMolecule(".male-run .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-run .timeline .first .bubble").css("opacity",0),e(".male-run .timeline").removeClass("one").addClass("two"),playMolecule(".male-run .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-run .timeline").removeClass("two").addClass("three"),e(".male-run .timeline .second .bubble").css("opacity",0),playMolecule(".male-run .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}}))},!1),i.promise()},c=function(){var i=e.Deferred();return o.nextPage({animation:46,finished:function(){function a(){c()}var o=!1,r=!0,c=function(){window.removeEventListener("devicemotion",null,!1),r=!1,clearTimeout(t.autoTimeout),o=!0,t.tracker("E","shaked"),"undefined"!=typeof s&&s.stop(),e(".male-music .action").css("opacity",0),playMolecule(".male-music .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-music .timeline .first .bubble").css("opacity",0),e(".male-music .timeline").removeClass("one").addClass("two"),playMolecule(".male-music .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-music .timeline").removeClass("two").addClass("three"),e(".male-music .timeline .second .bubble").css("opacity",0),playMolecule(".male-music .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}})};if(!o){if(window.DeviceMotionEvent&&window.addEventListener("devicemotion",function(e){var t=e.rotationRate;(t.alpha>15||t.alpha<-15||t.beta>15||t.beta<-15||t.gamma>15||t.gamma<-15)&&(o||c(),o=!0)},!1),r){var s=new Shake({threshold:5});s.start(),window.addEventListener("shake",a,!1)}isMobile.any()||(t.autoTimeout=setTimeout(function(){c()},5e3))}}}),i.promise()},s=function(){var i=e.Deferred();return o.nextPage({animation:46,finished:function(){var o=!1,r=function(){o=!0,e(".male-idea .action").css("opacity",0),t.tracker("E","tilt"),playMolecule(".male-idea .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-idea .timeline .first .bubble").css("opacity",0),e(".male-idea .timeline").removeClass("one").addClass("two"),playMolecule(".male-idea .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".male-idea .timeline").removeClass("two").addClass("three"),e(".male-idea .timeline .second .bubble").css("opacity",0),playMolecule(".male-idea .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}})};if(!o){ax=ay=0,window.addEventListener("devicemotion",function(e){ax=e.accelerationIncludingGravity.x*a,ay=-e.accelerationIncludingGravity.y*a,ax>0?(ax-=a,ax<0&&(ax=0)):ax<0&&(ax+=a,ax>0&&(ax=0))},!1);var c=function(){e(document).each(function(){return parseFloat(ax)>45||parseFloat(ax)<-45?(r(),window.removeEventListener("devicemotion",null,!1),clearInterval(s),!1):void 0})},s=setInterval(c,100);isMobile.any()||(t.autoTimeout=setTimeout(function(){r()},5e3))}}}),i.promise()};r().then(c).then(s).then(function(){e(".trigger_landing_site").on("click",function(){t.tracker("E","site"),t.linkOpener("http://www.rexona.co.id/")}).css("z-index",199),o.nextPage({showPage:7,animation:8,finished:window.onYouTubeIframeAPIReady(i)})})}})}),e(".la_click").on("click",function(){o.nextPage({showPage:4,animation:47,finished:function(){var r=function(){var i=e.Deferred(),a=!1;return e(".female-run")[0].addEventListener("swipeleft",function(){return a?!1:(a=!0,t.tracker("E","swiped"),e(".female-run .action").css("opacity",0),void playMolecule(".female-run .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-run .timeline .first .bubble").css("opacity",0),e(".female-run .timeline").removeClass("one").addClass("two"),playMolecule(".female-run .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-run .timeline").removeClass("two").addClass("three"),e(".female-run .timeline .second .bubble").css("opacity",0),playMolecule(".female-run .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}}))},!1),i.promise()},c=function(){var i=e.Deferred();return o.nextPage({animation:46,finished:function(){function a(){c()}var o=!1,r=!0,c=function(){window.removeEventListener("devicemotion",null,!1),r=!1,clearTimeout(t.autoTimeout),o=!0,"undefined"!=typeof s&&s.stop(),e(".female-music .action").css("opacity",0),t.tracker("E","shaked"),playMolecule(".female-music .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-music .timeline .first .bubble").css("opacity",0),e(".female-music .timeline").removeClass("one").addClass("two"),playMolecule(".female-music .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-music .timeline").removeClass("two").addClass("three"),e(".female-music .timeline .second .bubble").css("opacity",0),playMolecule(".female-music .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}})};if(!o){if(window.DeviceMotionEvent&&window.addEventListener("devicemotion",function(e){var t=e.rotationRate;(t.alpha>15||t.alpha<-15||t.beta>15||t.beta<-15||t.gamma>15||t.gamma<-15)&&(o||c(),o=!0)},!1),r){var s=new Shake({threshold:5});s.start(),window.addEventListener("shake",a,!1)}isMobile.any()||(t.autoTimeout=setTimeout(function(){c()},1e4))}}}),i.promise()},s=function(){var i=e.Deferred();return o.nextPage({animation:46,finished:function(){var o=!1,r=function(){o=!0,e(".female-idea .action").css("opacity",0),t.tracker("E","tilt"),playMolecule(".female-idea .timeline .first .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-idea .timeline .first .bubble").css("opacity",0),e(".female-idea .timeline").removeClass("one").addClass("two"),playMolecule(".female-idea .timeline .second .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){e(".female-idea .timeline").removeClass("two").addClass("three"),e(".female-idea .timeline .second .bubble").css("opacity",0),playMolecule(".female-idea .timeline .third .bubble",{middle:function(){Haptics.vibrate(50)},after:function(){setTimeout(function(){Haptics.vibrate(200),i.resolve()},n)}})}})}})};if(!o){ax=ay=0,window.addEventListener("devicemotion",function(e){ax=e.accelerationIncludingGravity.x*a,ay=-e.accelerationIncludingGravity.y*a,ax>0?(ax-=a,ax<0&&(ax=0)):ax<0&&(ax+=a,ax>0&&(ax=0))},!1);var c=function(){e(document).each(function(){return parseFloat(ax)>45||parseFloat(ax)<-45?(r(),window.removeEventListener("devicemotion",null,!1),clearInterval(s),!1):void 0})},s=setInterval(c,100);isMobile.any()||(t.autoTimeout=setTimeout(function(){r()},1e4))}}}),i.promise()};r().then(c).then(s).then(function(){e(".trigger_landing_site").on("click",function(){t.tracker("E","site"),t.linkOpener("http://www.rexona.co.id/")}).css("z-index",199),o.nextPage({showPage:7,animation:8,finished:window.onYouTubeIframeAPIReady(i)})})}})})})})})}(jQuery)})};window.onYouTubeIframeAPIReady=function(e){e&&e.loadVideo()},rexonamotion();