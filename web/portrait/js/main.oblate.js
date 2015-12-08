/*
 *
 * mads - version 2.00.01
 * Copyright (c) 2015, Ninjoe
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://en.wikipedia.org/wiki/MIT_License
 * https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 *
 */
var mads = function () {
    /* Get Tracker */
    if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
        this.custTracker = rma.customize.custTracker;
    } else if (typeof custTracker != 'undefined') {
        this.custTracker = custTracker;
    } else {
        this.custTracker = [];
    }

    /* Unique ID on each initialise */
    this.id = this.uniqId();

    /* Tracked tracker */
    this.tracked = [];

    /* Body Tag */
    this.bodyTag = document.getElementsByTagName('body')[0];

    /* Head Tag */
    this.headTag = document.getElementsByTagName('head')[0];

    /* RMA Widget - Content Area */
    this.contentTag = document.getElementById('rma-widget');

    /* URL Path */
    this.path = typeof rma != 'undefined' ? rma.customize.src : '';


};

/* Generate unique ID */
mads.prototype.uniqId = function () {
    return new Date().getTime();
};

/* Link Opner */
mads.prototype.linkOpener = function (url) {
    if (typeof url != "undefined" && url != "") {
        if (typeof mraid !== 'undefined') {
            mraid.open(url);
        } else {
            window.open(url);
        }
    }
};

/* tracker */
mads.prototype.tracker = function (tt, type, name, value) {

    //console.log(type);
    /* 
     * name is used to make sure that particular tracker is tracked for only once
     * there might have the same type in different location, so it will need the name to differentiate them
     */
    name = name || type;

    if (typeof this.custTracker != 'undefined' && this.custTracker != '' && this.tracked.indexOf(name) == -1) {
        for (var i = 0; i < this.custTracker.length; i++) {
            var img = document.createElement('img');

            if (typeof value == 'undefined') {
                value = '';
            }

            /* Insert Macro */
            var src = this.custTracker[i].replace('{{type}}', type);
            src = src.replace('{{tt}}', tt);
            src = src.replace('{{value}}', value);
            /* */
            img.src = src + '&' + this.id;

            img.style.display = 'none';
            this.bodyTag.appendChild(img);

            this.tracked.push(name);
        }
    }
};

/* Load JS File */
mads.prototype.loadJs = function (js, callback) {
    var script = document.createElement('script');
    script.src = js;

    if (typeof callback != 'undefined') {
        script.onload = callback;
    }

    this.headTag.appendChild(script);
};

/* Load CSS File */
mads.prototype.loadCss = function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');

    this.headTag.appendChild(link);
};

/*
 *
 * Unit Testing for mads
 *
 */
var testunit = function () {
    var app = new mads();

    console.log(typeof app.bodyTag != 'undefined');
    console.log(typeof app.headTag != 'undefined');
    console.log(typeof app.custTracker != 'undefined');
    console.log(typeof app.path != 'undefined');
    console.log(typeof app.contentTag != 'undefined');


    app.loadJs('https://code.jquery.com/jquery-1.11.3.min.js', function () {
        console.log(typeof window.jQuery != 'undefined');
    });

    app.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css');

    app.contentTag.innerHTML = '';

    app.custTracker = ['http://www.tracker.com?type={{type}}&tt={{tt}}', 'http://www.tracker2.com?type={{type}}'];

    app.tracker('CTR', 'test');
    app.tracker('E', 'test', 'name');

    app.linkOpener('http://www.google.com');
};

var playMolecule = function (selector, opt) {
    var moleculeImg = new Image();
    moleculeImg.src = 'img/bubblesprite.png';
    function moleculeSprite(options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height
            );
        };

        that.loop = options.loop;

        var midbrk = false;
        var brk = false;

        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                } else {
                    if (opt && opt.after && !brk) {
                        brk = true;
                        if (req) {
                            window.cancelAnimFrame(req);
                            req = undefined;
                        }
                        opt.after();
                    }
                }

                if (frameIndex === Math.round(numberOfFrames / 2)) {
                    if (opt && opt.middle && !midbrk) {
                        midbrk = true;
                        $(selector).trigger('stopRumble');
                        opt.middle();
                    }
                }
                var s = selector.split(' ')[0].replace('.', '');
                if (s.indexOf('music') > -1) {
                    if (frameIndex === 1) {
                        $('.' + s + ' .image').removeClass(s + '-3').addClass(s + '-1');
                    }
                    if (frameIndex === 10) {
                        $('.' + s + ' .image').removeClass(s + '-1').addClass(s + '-2');
                    }
                    if (frameIndex === 19) {
                        $('.' + s + ' .image').removeClass(s + '-2').addClass(s + '-3');
                    }
                } else {
                    if (frameIndex === 5) {
                        $('.' + s + ' .image').removeClass(s + '-1').addClass(s + '-2');
                    }
                    if (frameIndex === 17) {
                        $('.' + s + ' .image').removeClass(s + '-2').addClass(s + '-3');
                    }
                }
            }
        };

        return that;
    }

    var canvas = $(selector)[0];
    canvas.width = 43;
    canvas.height = 50;

    var molecule = moleculeSprite({
        context: canvas.getContext('2d'),
        width: 946,
        height: 50,
        image: moleculeImg,
        numberOfFrames: 22,
        ticksPerFrame: 2
    });

    var req;

    window.cancelAnimFrame = (function () {
        return window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
    });
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    moleculeImg.onload = function () {
        function playBubble() {
            req = window.requestAnimFrame(playBubble);
            molecule.update();
            molecule.render();
        }

        $(selector).jrumble({
            x: 0.4,
            y: 0.4,
            speed: 5
        });
        $(selector).trigger('startRumble');
        playBubble();
    };
};


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var rexonamotion = function () {
    var id = window.setTimeout(function () {
    }, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    var app = new mads();
    app.autoTimeout = null;

    app.loadJs('js/jquery-1.11.3.min.js', function () {
        if (typeof window.jQuery === 'undefined') return false;
        (function ($) {
            var $container = $(app.contentTag);
            var $delayEachFrame = 1500,
                $sensitivity = 10;
            $container[0].innerHTML = '<div id="jar" class="pt-perspective"> <div class="pt-page ff"> <div class="bg"></div><div class="la_click absolute" data-select="female"></div><div class="ra_click absolute" data-select="male"></div><div class="header"><span class="bold baru">BARU!</span><span class="bold rexmotion">REXONA MOTIONSENSE&#8482;</span><span class="pilih">PILIH SALAH SATU</span> </div><div class="content"> <div class="female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/><span class="bold wanita">WANITA</span></div><div class="separator"></div><div class="male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/><span class="bold pria">PRIA</span></div></div><div class="footer"><span class="bold seharian">SEHARIAN BERAKTIVITAS</span><span class="bold akan">AKAN MEMBUATMU BERKERINGAT</span><span class="cari">CARI TAHU CARA TETAP SEGAR</span><span class="si">DI SETIAP GERAKMU</span></div></div><div class="pt-page male-run"> <div class="bg"></div><div class="absolute product-male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/></div><div class="header"> <span class="bold title">KETIKA<br>BEROLAHRAGA</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">06:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">06:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">06:30</span></div></div></div></div><div class="absolute image male-run-1"></div><div class="action absolute"></div></div><div class="pt-page female-music"> <div class="bg"></div><div class="absolute product-female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/></div><div class="header"> <span class="bold title">MENARI SAMBIL<br>MENDENGARKAN MUSIK</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">10:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">10:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">10:30</span></div></div></div></div><div class="absolute image female-music-1"></div><div class="action absolute"></div></div><div class="pt-page lf"> <div class="bg"></div><div class="header"> <span class="bold title">BARU REXONA<br>MOTIONSENSE&#8482;</span> <span class="medium sub">MENJAGAMU TETAP<br>SEGAR DI SETIAP<br>GERAKAN</span> </div><div class="content"> <div id="player"></div></div><div class="footer"> <div class="products"> <img src="img/product-c.png" alt="Rexona MotionSense"/></div><div class="actions"> <button class="bold">TAP DI SINI</button> <span class="bold">UNTUK INFO <br>& TIPS MENARIK</span> </div><div class="logo-motion"></div></div><div class="trigger_landing_site absolute"></div></div></div>';
            var clicked = false;
            var lp_clicked = false;
            app.loadJs('js/libs.js', function () {
                app.loadJs('js/pagetransitions.js', function () {
                    var $video = new ytComponent({
                        'container': 'player',
                        'width': '320',
                        'height': '185',
                        'videoId': '42Y5u7VH1Bw',
                        'autoplay': false,
                        'tracker': app.tracker
                    });
                    var $pt = window.PageTransitions || null;
                    $('.ra_click').on('click', function () {
                        clicked = true;
                        if (clicked) app.tracker('E', 'pria');
                        $pt.nextPage({
                            animation: 46, finished: function () {
                                var registerEvent = function (cb) {
                                    $('.male-run')[0].addEventListener('swipeleft', cb, false);
                                    $('.male-run')[0].addEventListener('swipeup', cb, false);
                                    $('.male-run')[0].addEventListener('swipedown', cb, false);
                                    $('.male-run')[0].addEventListener('swiperight', cb, false);
                                };

                                var unregisterEvent = function (cb) {
                                    $('.male-run')[0].removeEventListener('swipeleft', cb, false);
                                    $('.male-run')[0].removeEventListener('swipeup', cb, false);
                                    $('.male-run')[0].removeEventListener('swipedown', cb, false);
                                    $('.male-run')[0].removeEventListener('swiperight', cb, false);
                                };

                                var maleFirst = function () {
                                    var swiper = function () {
                                        unregisterEvent(swiper);
                                        $('.male-run .action').css('opacity', 0);
                                        playMolecule('.male-run .timeline .first .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.male-run .timeline .first .bubble').css('opacity', 0);
                                                $('.male-run .timeline').removeClass('one').addClass('two');
                                                $('.male-run .action').css('opacity', 1);
                                                registerEvent(swiper2);
                                            }
                                        });
                                    };

                                    registerEvent(swiper);

                                    var swiper2 = function () {
                                        unregisterEvent(swiper2);
                                        $('.male-run .action').css('opacity', 0);
                                        playMolecule('.male-run .timeline .second .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.male-run .timeline').removeClass('two').addClass('three');
                                                $('.male-run .timeline .second .bubble').css('opacity', 0);
                                                $('.male-run .action').css('opacity',1);
                                                registerEvent(swiper3);
                                            }
                                        });
                                    };

                                    var swiper3 = function () {
                                        unregisterEvent(swiper3);
                                        $('.male-run .action').css('opacity', 0);
                                        playMolecule('.male-run .timeline .third .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                Haptics.vibrate(200);
                                                $('.trigger_landing_site').on('click', function () {
                                                    lp_clicked = true;
                                                    if (lp_clicked) app.tracker('E', 'rexona_lp');
                                                    app.linkOpener('http://www.rexona.co.id/');
                                                }).css('z-index', 199);
                                                $pt.nextPage({
                                                    showPage: 3,
                                                    animation: 8,
                                                    finished: window.onYouTubeIframeAPIReady($video)
                                                });
                                            }
                                        });
                                    };
                                }();
                            }
                        });
                    });
                    $('.la_click').on('click', function () {
                        clicked = true;
                        if (clicked) app.tracker('E', 'wanita');
                        $pt.nextPage({
                            showPage: 2,
                            animation: 47, finished: function () {
                                var registerEvent = function (cb) {
                                    $('.female-music')[0].addEventListener('swipeleft', cb, false);
                                    $('.female-music')[0].addEventListener('swipeup', cb, false);
                                    $('.female-music')[0].addEventListener('swipedown', cb, false);
                                    $('.female-music')[0].addEventListener('swiperight', cb, false);
                                };
                                var unregisterEvent = function (cb) {
                                    $('.female-music')[0].removeEventListener('swipeleft', cb, false);
                                    $('.female-music')[0].removeEventListener('swipeup', cb, false);
                                    $('.female-music')[0].removeEventListener('swipedown', cb, false);
                                    $('.female-music')[0].removeEventListener('swiperight', cb, false);
                                };
                                var femaleFirst = function () {
                                    var swiper = function () {
                                        unregisterEvent(swiper);
                                        $('.female-music .action').css('opacity', 0);
                                        playMolecule('.female-music .timeline .first .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.female-music .timeline .first .bubble').css('opacity', 0);
                                                $('.female-music .timeline').removeClass('one').addClass('two');
                                                $('.female-music .action').css('opacity', 1);
                                                registerEvent(swiper2);
                                            }
                                        });
                                    };

                                    registerEvent(swiper);

                                    var swiper2 = function () {
                                        unregisterEvent(swiper2);
                                        $('.female-music .action').css('opacity', 0);
                                        playMolecule('.female-music .timeline .second .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.female-music .timeline').removeClass('two').addClass('three');
                                                $('.female-music .timeline .second .bubble').css('opacity', 0);
                                                $('.female-music .action').css('opacity', 1);
                                                registerEvent(swiper3);
                                            }
                                        });
                                    };

                                    var swiper3 = function () {
                                        unregisterEvent(swiper3);
                                        $('.female-music .action').css('opacity', 0);
                                        playMolecule('.female-music .timeline .third .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                Haptics.vibrate(200);
                                                $('.trigger_landing_site').on('click', function () {
                                                    lp_clicked = true;
                                                    if (lp_clicked) app.tracker('E', 'rexona_lp');
                                                    app.linkOpener('http://www.rexona.co.id/');
                                                }).css('z-index', 199);
                                                $pt.nextPage({
                                                    showPage: 3,
                                                    animation: 8,
                                                    finished: window.onYouTubeIframeAPIReady($video)
                                                });
                                            }
                                        });
                                    };

                                }();
                            }
                        });
                    });
                });
            });
        })(jQuery);
    });
    app.loadCss('css/animations.css');
    app.loadCss('css/style.min.css');

};

window.onYouTubeIframeAPIReady = function (vid) {
    if (vid)
        vid.loadVideo();
};

rexonamotion();
