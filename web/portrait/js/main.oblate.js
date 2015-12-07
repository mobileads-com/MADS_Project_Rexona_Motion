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
    app.loadCss('css/animations.css');
    app.loadCss('css/style.css');

    app.loadJs('js/jquery-1.11.3.min.js', function () {
        if (typeof window.jQuery === 'undefined') return false;
        (function ($) {
            var $container = $(app.contentTag);
            var $delayEachFrame = 1500,
                $sensitivity = 10;
            $container[0].innerHTML = '<div id="jar" class="pt-perspective"> <div class="pt-page ff"> <div class="bg"></div><div class="la_click absolute" data-select="female"></div><div class="ra_click absolute" data-select="male"></div><div class="header"><span class="bold baru">BARU!</span><span class="bold rexmotion">REXONA MOTIONSENSE&#8482;</span><span class="pilih">PILIH SALAH SATU</span> </div><div class="content"> <div class="female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/><span class="bold wanita">WANITA</span></div><div class="separator"></div><div class="male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/><span class="bold pria">PRIA</span></div></div><div class="footer"><span class="bold seharian">SEHARIAN BERAKTIVITAS</span><span class="bold akan">AKAN MEMBUATMU BERKERINGAT</span><span class="cari">CARI TAHU CARA TETAP SEGAR</span><span class="si">DI SETIAP GERAKMU</span></div></div><div class="pt-page male-run"> <div class="bg"></div><div class="absolute product-male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/></div><div class="header"> <span class="bold title">KETIKA<br>BEROLAHRAGA</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">06:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">06:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">06:30</span></div></div></div></div><div class="absolute image male-run-1"></div><div class="action absolute"></div></div><div class="pt-page male-music"> <div class="bg"></div><div class="absolute product-male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/></div><div class="header"> <span class="bold title">MENARI SAMBIL<br>MENDENGARKAN MUSIK</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">10:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">10:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">10:30</span></div></div></div></div><div class="absolute image male-music-1"></div><div class="action absolute"></div></div><div class="pt-page male-idea"> <div class="bg"></div><div class="absolute product-male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/></div><div class="header"> <span class="bold title">ATAU KETIKA<br>MEETING</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">17:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">17:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">17:30</span></div></div></div></div><div class="absolute image male-idea-1"></div><div class="action absolute"></div></div><div class="pt-page female-run"> <div class="bg"></div><div class="absolute product-female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/></div><div class="header"> <span class="bold title">KETIKA<br>BEROLAHRAGA</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">06:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">06:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">06:30</span></div></div></div></div><div class="absolute image female-run-1"></div><div class="action absolute"></div></div><div class="pt-page female-music"> <div class="bg"></div><div class="absolute product-female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/></div><div class="header"> <span class="bold title">MENARI SAMBIL<br>MENDENGARKAN MUSIK</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">10:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">10:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">10:30</span></div></div></div></div><div class="absolute image female-music-1"></div><div class="action absolute"></div></div><div class="pt-page female-idea"> <div class="bg"></div><div class="absolute product-female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/></div><div class="header"> <span class="bold title">ATAU KETIKA<br>MEETING</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">17:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">17:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">17:30</span></div></div></div></div><div class="absolute image female-idea-1"></div><div class="action absolute"></div></div><div class="pt-page lf"> <div class="bg"></div><div class="header"> <span class="bold title">BARU REXONA<br>MOTIONSENSE&#8482;</span> <span class="medium sub">MENJAGAMU TETAP<br>SEGAR DI SETIAP<br>GERAKAN</span> </div><div class="content"><div id="player"></div></div><div class="footer"> <div class="products"> <div class="female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/><span class="bold wanita">WANITA</span></div><div class="male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/><span class="bold pria">PRIA</span></div></div><div class="actions"> <button class="bold">TAP DI SINI</button> <span class="bold">UNTUK INFO <br>& TIPS MENARIK</span> </div><div class="logo-motion"></div></div><div class="trigger_landing_site absolute"></div></div></div>';
            //$container.load('tpl/template.html', function () {
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
                            app.tracker('E', 'pria');
                            $pt.nextPage({
                                animation: 46, finished: function () {
                                    var maleFirst = function () {
                                        var q = $.Deferred();
                                        var swiped = false;
                                        var swiper = function () {
                                            if (swiped) return false;
                                            swiped = true;
                                            app.tracker('E', 'pria_swipe');
                                            $('.male-run .action').css('opacity', 0);
                                            playMolecule('.male-run .timeline .first .bubble', {
                                                middle: function () {
                                                    Haptics.vibrate(50);
                                                },
                                                after: function () {
                                                    $('.male-run .timeline .first .bubble').css('opacity', 0);
                                                    $('.male-run .timeline').removeClass('one').addClass('two');

                                                    playMolecule('.male-run .timeline .second .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.male-run .timeline').removeClass('two').addClass('three');
                                                            $('.male-run .timeline .second .bubble').css('opacity', 0);
                                                            playMolecule('.male-run .timeline .third .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    setTimeout(function () {
                                                                        Haptics.vibrate(200);
                                                                        q.resolve();
                                                                    }, $delayEachFrame);
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        };

                                        $('.male-run')[0].addEventListener('swipeleft', swiper, false);
                                        $('.male-run')[0].addEventListener('swipeup', swiper, false);
                                        $('.male-run')[0].addEventListener('swipedown', swiper, false);
                                        $('.male-run')[0].addEventListener('swiperight', swiper, false);


                                        return q.promise();
                                    };
                                    var maleSecond = function () {
                                        var q = $.Deferred();
                                        $pt.nextPage({
                                            animation: 46,
                                            finished: function () {
                                                var shaked = false;
                                                var dontStart = true;
                                                var animateMusic = function () {
                                                    window.removeEventListener('devicemotion', null, false);
                                                    dontStart = false;
                                                    clearTimeout(app.autoTimeout);
                                                    shaked = true;
                                                    app.tracker('E', 'pria_shake');
                                                    if (typeof myShakeEvent !== 'undefined')
                                                        myShakeEvent.stop();
                                                    $('.male-music .action').css('opacity', 0);
                                                    //clearTimeout(firstTimeout);
                                                    //clearTimeout(secondTimeout);
                                                    //firstTimeout = setTimeout(function () {
                                                    //    $('.male-music .image').removeClass('male-music-1').addClass('male-music-2');
                                                    //}, $firstAnimFrame);
                                                    //secondTimeout = setTimeout(function () {
                                                    //    $('.male-music .image').removeClass('male-music-2').addClass('male-music-3');
                                                    //}, $secondAnimFrame);
                                                    //playCharacter('.male-music', {
                                                    //    duration: 1000
                                                    //});
                                                    playMolecule('.male-music .timeline .first .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.male-music .timeline .first .bubble').css('opacity', 0);
                                                            $('.male-music .timeline').removeClass('one').addClass('two');

                                                            playMolecule('.male-music .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {

                                                                    $('.male-music .timeline').removeClass('two').addClass('three');
                                                                    $('.male-music .timeline .second .bubble').css('opacity', 0);
                                                                    playMolecule('.male-music .timeline .third .bubble', {
                                                                        middle: function () {
                                                                            Haptics.vibrate(50);
                                                                        },
                                                                        after: function () {
                                                                            setTimeout(function () {
                                                                                Haptics.vibrate(200);
                                                                                q.resolve();
                                                                            }, $delayEachFrame);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                };

                                                if (!shaked) {
                                                    if (window.DeviceMotionEvent) {
                                                        window.addEventListener('devicemotion', function (e) {
                                                            var rotation = e.rotationRate;
                                                            if ((rotation.alpha > 15 || rotation.alpha < -15) || (rotation.beta > 15 || rotation.beta < -15) || (rotation.gamma > 15 || rotation.gamma < -15)) {
                                                                if (!shaked)
                                                                    animateMusic();
                                                                shaked = true;
                                                            }
                                                        }, false);
                                                    }

                                                    if (dontStart) {
                                                        var myShakeEvent = new Shake({
                                                            threshold: 5
                                                        });
                                                        myShakeEvent.start();
                                                        window.addEventListener('shake', shakeEventDidOccur, false);
                                                        function shakeEventDidOccur() {
                                                            animateMusic();
                                                        }
                                                    }

                                                    if (!isMobile.any()) {
                                                        app.autoTimeout = setTimeout(function () {
                                                            animateMusic();
                                                        }, 5000);
                                                    }
                                                }
                                            }
                                        });

                                        return q.promise();
                                    };
                                    var maleThird = function () {
                                        var q = $.Deferred();
                                        $pt.nextPage({
                                            animation: 46,
                                            finished: function () {
                                                var tilted = false;
                                                var animateIdea = function () {
                                                    tilted = true;
                                                    $('.male-idea .action').css('opacity', 0);
                                                    //clearTimeout(firstTimeout);
                                                    //clearTimeout(secondTimeout);
                                                    app.tracker('E', 'pria_tilt');
                                                    //firstTimeout = setTimeout(function () {
                                                    //    $('.male-idea .image').removeClass('male-idea-1').addClass('male-idea-2');
                                                    //}, $firstAnimFrame);
                                                    //secondTimeout = setTimeout(function () {
                                                    //    $('.male-idea .image').removeClass('male-idea-2').addClass('male-idea-3');
                                                    //}, $secondAnimFrame);
                                                    playMolecule('.male-idea .timeline .first .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.male-idea .timeline .first .bubble').css('opacity', 0);
                                                            $('.male-idea .timeline').removeClass('one').addClass('two');
                                                            playMolecule('.male-idea .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    $('.male-idea .timeline').removeClass('two').addClass('three');
                                                                    $('.male-idea .timeline .second .bubble').css('opacity', 0);
                                                                    playMolecule('.male-idea .timeline .third .bubble', {
                                                                        middle: function () {
                                                                            Haptics.vibrate(50);
                                                                        },
                                                                        after: function () {
                                                                            setTimeout(function () {
                                                                                Haptics.vibrate(200);
                                                                                //clearTimeout(firstTimeout);
                                                                                //clearTimeout(secondTimeout);
                                                                                q.resolve();
                                                                            }, $delayEachFrame);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                };
                                                if (!tilted) {
                                                    ax = ay = 0;
                                                    window.addEventListener('devicemotion', function (e) {
                                                        ax = e.accelerationIncludingGravity.x * $sensitivity;
                                                        ay = -e.accelerationIncludingGravity.y * $sensitivity;
                                                        if (ax > 0) {
                                                            ax -= $sensitivity;
                                                            if (ax < 0)ax = 0;
                                                        } else if (ax < 0) {
                                                            ax += $sensitivity;
                                                            if (ax > 0)ax = 0;
                                                        }
                                                    }, false);
                                                    var tiltme = function () {
                                                        $(document).each(function () {
                                                            if (parseFloat(ax) > 45 || parseFloat(ax) < -45) {
                                                                animateIdea();
                                                                window.removeEventListener('devicemotion', null, false);
                                                                clearInterval(mainLoop);
                                                                return false;
                                                            }
                                                        })
                                                    };
                                                    var mainLoop = setInterval(tiltme, 100);
                                                    if (!isMobile.any()) {
                                                        app.autoTimeout = setTimeout(function () {
                                                            animateIdea();
                                                        }, 5000);
                                                    }
                                                }
                                            }
                                        });

                                        return q.promise();
                                    };
                                    maleFirst()
                                        .then(maleSecond)
                                        .then(maleThird)
                                        .then(function () {
                                            $('.trigger_landing_site').on('click', function () {
                                                app.tracker('E', 'rexona_lp');
                                                app.linkOpener('http://www.rexona.co.id/');
                                            }).css('z-index', 199);
                                            $pt.nextPage({
                                                showPage: 7,
                                                animation: 8,
                                                finished: window.onYouTubeIframeAPIReady($video)
                                            })
                                        });
                                }
                            });
                        });
                        $('.la_click').on('click', function () {
                            app.tracker('E', 'wanita');
                            $pt.nextPage({
                                showPage: 4,
                                animation: 47, finished: function () {
                                    var femaleFirst = function () {
                                        var q = $.Deferred();
                                        var swiped = false;

                                            var swiper = function () {
                                            if (swiped) return false;
                                            swiped = true;
                                            //clearTimeout(firstTimeout);
                                            //clearTimeout(secondTimeout);
                                            app.tracker('E', 'wanita_swipe');
                                            //firstTimeout = setTimeout(function () {
                                            //    $('.female-run .image').removeClass('female-run-1').addClass('female-run-2');
                                            //}, $firstAnimFrame);
                                            //secondTimeout = setTimeout(function () {
                                            //    $('.female-run .image').removeClass('male-run-2').addClass('female-run-3');
                                            //}, $secondAnimFrame);
                                            $('.female-run .action').css('opacity', 0);
                                            playMolecule('.female-run .timeline .first .bubble', {
                                                middle: function () {
                                                    Haptics.vibrate(50);
                                                },
                                                after: function () {
                                                    $('.female-run .timeline .first .bubble').css('opacity', 0);
                                                    $('.female-run .timeline').removeClass('one').addClass('two');
                                                    playMolecule('.female-run .timeline .second .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.female-run .timeline').removeClass('two').addClass('three');
                                                            $('.female-run .timeline .second .bubble').css('opacity', 0);
                                                            playMolecule('.female-run .timeline .third .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    setTimeout(function () {
                                                                        Haptics.vibrate(200);
                                                                        //clearTimeout(firstTimeout);
                                                                        //clearTimeout(secondTimeout);
                                                                        q.resolve();
                                                                    }, $delayEachFrame);
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        };

                                        $('.female-run')[0].addEventListener('swipeleft', swiper, false);
                                        $('.female-run')[0].addEventListener('swiperight', swiper, false);
                                        $('.female-run')[0].addEventListener('swipedown', swiper, false);
                                        $('.female-run')[0].addEventListener('swipeup', swiper, false);

                                        return q.promise();
                                    };
                                    var femaleSecond = function () {
                                        var q = $.Deferred();
                                        $pt.nextPage({
                                            animation: 46,
                                            finished: function () {
                                                var shaked = false;
                                                var dontStart = true;
                                                var animateMusic = function () {
                                                    window.removeEventListener('devicemotion', null, false);
                                                    dontStart = false;
                                                    clearTimeout(app.autoTimeout);
                                                    shaked = true;
                                                    if (typeof myShakeEvent !== 'undefined')
                                                        myShakeEvent.stop();
                                                    $('.female-music .action').css('opacity', 0);
                                                    //clearTimeout(firstTimeout);
                                                    //clearTimeout(secondTimeout);
                                                    app.tracker('E', 'wanita_shake');
                                                    //firstTimeout = setTimeout(function () {
                                                    //    $('.female-music .image').removeClass('female-music-1').addClass('female-music-2');
                                                    //}, $firstAnimFrame);
                                                    //secondTimeout = setTimeout(function () {
                                                    //    $('.female-music .image').removeClass('male-music-2').addClass('female-music-3');
                                                    //}, $secondAnimFrame);
                                                    playMolecule('.female-music .timeline .first .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.female-music .timeline .first .bubble').css('opacity', 0);
                                                            $('.female-music .timeline').removeClass('one').addClass('two');
                                                            playMolecule('.female-music .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    $('.female-music .timeline').removeClass('two').addClass('three');
                                                                    $('.female-music .timeline .second .bubble').css('opacity', 0);
                                                                    playMolecule('.female-music .timeline .third .bubble', {
                                                                        middle: function () {
                                                                            Haptics.vibrate(50);
                                                                        },
                                                                        after: function () {
                                                                            setTimeout(function () {
                                                                                Haptics.vibrate(200);
                                                                                //clearTimeout(firstTimeout);
                                                                                //clearTimeout(secondTimeout);
                                                                                q.resolve();
                                                                            }, $delayEachFrame);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                };

                                                if (!shaked) {
                                                    if (window.DeviceMotionEvent) {
                                                        window.addEventListener('devicemotion', function (e) {
                                                            var rotation = e.rotationRate;
                                                            if ((rotation.alpha > 15 || rotation.alpha < -15) || (rotation.beta > 15 || rotation.beta < -15) || (rotation.gamma > 15 || rotation.gamma < -15)) {
                                                                if (!shaked)
                                                                    animateMusic();
                                                                shaked = true;
                                                            }
                                                        }, false);
                                                    }

                                                    if (dontStart) {
                                                        var myShakeEvent = new Shake({
                                                            threshold: 5
                                                        });
                                                        myShakeEvent.start();
                                                        window.addEventListener('shake', shakeEventDidOccur, false);
                                                        function shakeEventDidOccur() {
                                                            animateMusic();
                                                        }
                                                    }
                                                    if (!isMobile.any()) {
                                                        app.autoTimeout = setTimeout(function () {
                                                            animateMusic();
                                                        }, 10000);
                                                    }
                                                }
                                            }
                                        });

                                        return q.promise();
                                    };
                                    var femaleThird = function () {
                                        var q = $.Deferred();
                                        $pt.nextPage({
                                            animation: 46,
                                            finished: function () {
                                                var tilted = false;
                                                var animateIdea = function () {
                                                    tilted = true;
                                                    $('.female-idea .action').css('opacity', 0);
                                                    //clearTimeout(firstTimeout);
                                                    //clearTimeout(secondTimeout);
                                                    app.tracker('E', 'wanita_tilt');
                                                    //firstTimeout = setTimeout(function () {
                                                    //    $('.female-idea .image').removeClass('female-idea-1').addClass('female-idea-2');
                                                    //}, $firstAnimFrame);
                                                    //secondTimeout = setTimeout(function () {
                                                    //    $('.female-idea .image').removeClass('female-idea-2').addClass('female-idea-3');
                                                    //}, $secondAnimFrame);
                                                    playMolecule('.female-idea .timeline .first .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.female-idea .timeline .first .bubble').css('opacity', 0);
                                                            $('.female-idea .timeline').removeClass('one').addClass('two');
                                                            playMolecule('.female-idea .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    $('.female-idea .timeline').removeClass('two').addClass('three');
                                                                    $('.female-idea .timeline .second .bubble').css('opacity', 0);
                                                                    playMolecule('.female-idea .timeline .third .bubble', {
                                                                        middle: function () {
                                                                            Haptics.vibrate(50);
                                                                        },
                                                                        after: function () {
                                                                            setTimeout(function () {
                                                                                Haptics.vibrate(200);
                                                                                //clearTimeout(firstTimeout);
                                                                                //clearTimeout(secondTimeout);
                                                                                q.resolve();
                                                                            }, $delayEachFrame);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                };
                                                if (!tilted) {
                                                    ax = ay = 0;
                                                    window.addEventListener('devicemotion', function (e) {
                                                        ax = e.accelerationIncludingGravity.x * $sensitivity;
                                                        ay = -e.accelerationIncludingGravity.y * $sensitivity;
                                                        if (ax > 0) {
                                                            ax -= $sensitivity;
                                                            if (ax < 0)ax = 0;
                                                        } else if (ax < 0) {
                                                            ax += $sensitivity;
                                                            if (ax > 0)ax = 0;
                                                        }
                                                    }, false);
                                                    var tiltme = function () {
                                                        $(document).each(function () {
                                                            if (parseFloat(ax) > 45 || parseFloat(ax) < -45) {
                                                                animateIdea();
                                                                window.removeEventListener('devicemotion', null, false);
                                                                clearInterval(mainLoop);
                                                                return false;
                                                            }
                                                        })
                                                    };
                                                    var mainLoop = setInterval(tiltme, 100);
                                                    if (!isMobile.any()) {
                                                        app.autoTimeout = setTimeout(function () {
                                                            animateIdea();
                                                        }, 10000);
                                                    }
                                                }
                                            }
                                        });

                                        return q.promise();
                                    };
                                    femaleFirst()
                                        .then(femaleSecond)
                                        .then(femaleThird)
                                        .then(function () {
                                            $('.trigger_landing_site').on('click', function () {
                                                app.tracker('E', 'rexona_lp');
                                                app.linkOpener('http://www.rexona.co.id/');
                                            }).css('z-index', 199);
                                            $pt.nextPage({
                                                showPage: 7,
                                                animation: 8,
                                                finished: window.onYouTubeIframeAPIReady($video)
                                            })
                                        });
                                }
                            });
                        });
                    });
                });
            //});
        })(jQuery);
    });


};

window.onYouTubeIframeAPIReady = function (vid) {
    if (vid)
        vid.loadVideo();
};

rexonamotion();
