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
}

/* Link Opner */
mads.prototype.linkOpener = function (url) {

    if (typeof url != "undefined" && url != "") {
        if (typeof mraid !== 'undefined') {
            mraid.open(url);
        } else {
            window.open(url);
        }
    }
}

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
                        opt.after();
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

    moleculeImg.onload = function () {
        function playBubble() {
            window.requestAnimationFrame(playBubble);

            molecule.update();
            molecule.render();
        }

        var shakeTimeout;
        $(selector).jrumble({
            x: 0.4,
            y: 0.4,
            speed: 5
        });
        clearTimeout(shakeTimeout);
        $(selector).trigger('startRumble');
        playBubble();
        shakeTimeout = setTimeout(function () {
            $(selector).trigger('stopRumble');
        }, 1000);


    };
};

var playCharacter = function (selector, options) {
    var iterate = 1;
    var el = selector.replace('.', '');
    var d = options.duration || 20;
    var i = 0;

    function loop() {
        setTimeout(function () {
            $(selector + ' .image').removeClass(el + '-' + iterate).addClass(el + '-' + (iterate === 3 ? 1 : iterate + 1));
            i++;
            if (iterate === 3) {
                iterate = 1
            } else {
                iterate++;
            }
            if (i < d) {
                loop();
            }
        }, options.speed || 250);
    }

    loop();
};

var rexonamotion = function () {
    var app = new mads();
    app.autoTimeout = null;
    app.loadJs('js/njswipe-1.0.0.min.js');
    app.loadJs('js/jquery-1.11.3.min.js', function () {
        if (typeof window.jQuery === 'undefined') return false;

        (function ($) {
            var $container = $(app.contentTag);

            var $delayFirst = 400,
                $delaySecond = 400,
                $delayEachFrame = 1500;
            $container.load('tpl/template.html');
            app.loadJs('js/ninjoe.ytComponent.js');
            app.loadJs('js/jquery.jrumble.1.3.min.js');
            app.loadJs('js/modernizr.custom.js', function () {
                app.loadJs('js/pagetransitions.js', function () {
                    var $video = new ytComponent({
                        'container':'player',
                        'width': '320',
                        'height':'185',
                        'videoId': 'hUjMb5z2JR8',
                        'autoplay': false,
                        'tracker': app.tracker
                    });
                    var $pt = PageTransitions || null;
                    var firstTimeout,
                        secondTimeout;
                    $('.ra_click').on('click', function () {
                        $pt.nextPage({
                            animation: 46, finished: function () {
                                var maleFirst = function () {
                                    var q = $.Deferred();
                                    $('.male-run')[0].addEventListener('swipeleft', function () {
                                        clearTimeout(firstTimeout);
                                        clearTimeout(secondTimeout);
                                        $('.male-run .action').css('opacity', 0);
                                        playMolecule('.male-run .timeline .first .bubble', {
                                            after: function () {
                                                $('.male-run .timeline .first .bubble').css('opacity', 0);
                                                $('.male-run .timeline').removeClass('one').addClass('two');
                                                $('.male-run .image').removeClass('male-run-1').addClass('male-run-2');
                                                firstTimeout = setTimeout(function () {
                                                    playMolecule('.male-run .timeline .second .bubble', {
                                                        after: function () {
                                                            $('.male-run .image').removeClass('male-run-2').addClass('male-run-3');
                                                            $('.male-run .timeline').removeClass('two').addClass('three');
                                                            $('.male-run .timeline .second .bubble').css('opacity', 0);
                                                            secondTimeout = setTimeout(function () {
                                                                playMolecule('.male-run .timeline .third .bubble');
                                                                setTimeout(function () {
                                                                    q.resolve();
                                                                }, $delayEachFrame);
                                                            }, $delaySecond);
                                                        }
                                                    });
                                                }, $delayFirst);
                                            }
                                        });
                                    });

                                    return q.promise();
                                };
                                var maleSecond = function () {
                                    var q = $.Deferred();
                                    $pt.nextPage({
                                        animation: 46,
                                        finished: function () {
                                            var animateMusic = function () {
                                                $('.male-music .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playCharacter('.male-music', {
                                                    duration: 20
                                                });
                                                playMolecule('.male-music .timeline .first .bubble', {
                                                    after: function () {
                                                        $('.male-music .timeline .first .bubble').css('opacity', 0);
                                                        $('.male-music .timeline').removeClass('one').addClass('two');
                                                        $('.male-music .image').removeClass('male-music-1').addClass('male-music-2');
                                                        firstTimeout = setTimeout(function () {
                                                            playMolecule('.male-music .timeline .second .bubble', {
                                                                after: function () {
                                                                    $('.male-music .image').removeClass('male-music-2').addClass('male-music-3');
                                                                    $('.male-music .timeline').removeClass('two').addClass('three');
                                                                    $('.male-music .timeline .second .bubble').css('opacity', 0);
                                                                    secondTimeout = setTimeout(function () {
                                                                        playMolecule('.male-music .timeline .third .bubble');
                                                                        setTimeout(function () {
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }, $delaySecond);
                                                                }
                                                            });
                                                        }, $delayFirst);
                                                    }
                                                });
                                            };
                                            var shaked = false;
                                            if (!shaked) {
                                                shaked = true;
                                                if (window.DeviceMotionEvent) {
                                                    window.addEventListener('devicemotion', function (e) {
                                                        var rotation = e.rotationRate;
                                                        if ((rotation.alpha > 15 || rotation.alpha < -15) || (rotation.beta > 15 || rotation.beta < -15) || (rotation.gamma > 15 || rotation.gamma < -15)) {
                                                            animateMusic();
                                                            window.removeEventListener('devicemotion', arguments.callee, false);
                                                            clearTimeout(app.autoTimeout);
                                                        }
                                                    }, false);
                                                } else {
                                                    console.log('DeviceMotionEvent is not supported.');
                                                }
                                                app.autoTimeout = setTimeout(function () {
                                                    animateMusic();
                                                }, 10000);
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
                                            var animateIdea = function () {
                                                $('.male-idea .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playMolecule('.male-idea .timeline .first .bubble', {
                                                    after: function () {
                                                        $('.male-idea .timeline .first .bubble').css('opacity', 0);
                                                        $('.male-idea .timeline').removeClass('one').addClass('two');
                                                        $('.male-idea .image').removeClass('male-idea-1').addClass('male-idea-2');
                                                        firstTimeout = setTimeout(function () {
                                                            playMolecule('.male-idea .timeline .second .bubble', {
                                                                after: function () {
                                                                    $('.male-idea .image').removeClass('male-idea-2').addClass('male-idea-3');
                                                                    $('.male-idea .timeline').removeClass('two').addClass('three');
                                                                    $('.male-idea .timeline .second .bubble').css('opacity', 0);
                                                                    secondTimeout = setTimeout(function () {
                                                                        playMolecule('.male-idea .timeline .third .bubble');
                                                                        setTimeout(function () {
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }, $delaySecond);
                                                                }
                                                            });
                                                        }, $delayFirst);
                                                    }
                                                });
                                            };
                                            var tilted = false;
                                            if (!tilted) {
                                                tilted = true;
                                                if (window.DeviceOrientationEvent) {
                                                    window.addEventListener("deviceorientation", function (event) {
                                                        var betka = Math.round(event.beta);
                                                        if (betka > 60) {
                                                            animateIdea();
                                                            window.removeEventListener('deviceorientation', arguments.callee, false);
                                                            clearTimeout(app.autoTimeout);
                                                        }
                                                    });
                                                } else {
                                                    console.log('DeviceOrientationEvent is not supported.');
                                                }
                                                app.autoTimeout = setTimeout(function () {
                                                    animateIdea();
                                                }, 10000);
                                            }
                                        }
                                    });

                                    return q.promise();
                                };
                                maleFirst()
                                    .then(maleSecond)
                                    .then(maleThird)
                                    .then(function () {
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
                        $pt.nextPage({
                            showPage: 4,
                            animation: 47, finished: function () {
                                var femaleFirst = function () {
                                    var q = $.Deferred();
                                    $('.female-run')[0].addEventListener('swipeleft', function () {
                                        $('.female-run .action').css('opacity', 0);
                                        clearTimeout(firstTimeout);
                                        clearTimeout(secondTimeout);
                                        playMolecule('.female-run .timeline .first .bubble', {
                                            after: function () {
                                                $('.female-run .timeline .first .bubble').css('opacity', 0);
                                                $('.female-run .timeline').removeClass('one').addClass('two');
                                                $('.female-run .image').removeClass('female-run-1').addClass('female-run-2');
                                                firstTimeout = setTimeout(function () {
                                                    playMolecule('.female-run .timeline .second .bubble', {
                                                        after: function () {
                                                            $('.female-run .image').removeClass('female-run-2').addClass('female-run-3');
                                                            $('.female-run .timeline').removeClass('two').addClass('three');
                                                            $('.female-run .timeline .second .bubble').css('opacity', 0);
                                                            secondTimeout = setTimeout(function () {
                                                                playMolecule('.female-run .timeline .third .bubble');
                                                                setTimeout(function () {
                                                                    q.resolve();
                                                                }, $delayEachFrame);
                                                            }, $delaySecond);
                                                        }
                                                    });
                                                }, $delayFirst);
                                            }
                                        });
                                    });

                                    return q.promise();
                                };
                                var femaleSecond = function () {
                                    var q = $.Deferred();
                                    $pt.nextPage({
                                        showPage: 5,
                                        animation: 47,
                                        finished: function () {
                                            var animateMusic = function () {
                                                $('.female-music .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playCharacter('.female-music', {
                                                    duration: 20
                                                });
                                                playMolecule('.female-music .timeline .first .bubble', {
                                                    after: function () {
                                                        $('.female-music .timeline .first .bubble').css('opacity', 0);
                                                        $('.female-music .timeline').removeClass('one').addClass('two');
                                                        $('.female-music .image').removeClass('female-music-1').addClass('female-music-2');
                                                        firstTimeout = setTimeout(function () {
                                                            playMolecule('.female-music .timeline .second .bubble', {
                                                                after: function () {
                                                                    $('.female-music .image').removeClass('female-music-2').addClass('female-music-3');
                                                                    $('.female-music .timeline').removeClass('two').addClass('three');
                                                                    $('.female-music .timeline .second .bubble').css('opacity', 0);
                                                                    secondTimeout = setTimeout(function () {
                                                                        playMolecule('.female-music .timeline .third .bubble');
                                                                        setTimeout(function () {
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }, $delaySecond);
                                                                }
                                                            });
                                                        }, $delayFirst);
                                                    }
                                                });


                                            };
                                            var shaked = false;
                                            if (!shaked) {
                                                shaked = true;
                                                if (window.DeviceMotionEvent) {
                                                    window.addEventListener('devicemotion', function (e) {
                                                        var rotation = e.rotationRate;
                                                        if ((rotation.alpha > 15 || rotation.alpha < -15) || (rotation.beta > 15 || rotation.beta < -15) || (rotation.gamma > 15 || rotation.gamma < -15)) {
                                                            animateMusic();
                                                            window.removeEventListener('devicemotion', arguments.callee, false);
                                                            clearTimeout(app.autoTimeout);
                                                        }
                                                    }, false);
                                                } else {
                                                    console.log('DeviceMotionEvent is not supported.');
                                                }
                                                app.autoTimeout = setTimeout(function () {
                                                    animateMusic();
                                                }, 10000);
                                            }
                                        }
                                    });

                                    return q.promise();
                                };
                                var femaleThird = function () {
                                    var q = $.Deferred();
                                    $pt.nextPage({
                                        showPage: 6,
                                        animation: 47,
                                        finished: function () {
                                            var animateIdea = function () {
                                                $('.female-idea .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playMolecule('.female-idea .timeline .first .bubble', {
                                                    after: function () {
                                                        $('.female-idea .timeline .first .bubble').css('opacity', 0);
                                                        $('.female-idea .timeline').removeClass('one').addClass('two');
                                                        $('.female-idea .image').removeClass('female-idea-1').addClass('female-idea-2');
                                                        firstTimeout = setTimeout(function () {
                                                            playMolecule('.female-idea .timeline .second .bubble', {
                                                                after: function () {
                                                                    $('.female-idea .image').removeClass('female-idea-2').addClass('female-idea-3');
                                                                    $('.female-idea .timeline').removeClass('two').addClass('three');
                                                                    $('.female-idea .timeline .second .bubble').css('opacity', 0);
                                                                    secondTimeout = setTimeout(function () {
                                                                        playMolecule('.female-idea .timeline .third .bubble');
                                                                        setTimeout(function () {
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }, $delaySecond);
                                                                }
                                                            });
                                                        }, $delayFirst);
                                                    }
                                                });
                                            };
                                            var tilted = false;
                                            if (!tilted) {
                                                tilted = true;
                                                if (window.DeviceOrientationEvent) {
                                                    window.addEventListener("deviceorientation", function (event) {
                                                        var betka = Math.round(event.beta);
                                                        if (betka > 60) {
                                                            animateIdea();
                                                            window.removeEventListener('deviceorientation', arguments.callee, false);
                                                            clearTimeout(app.autoTimeout);
                                                        }
                                                    });
                                                } else {
                                                    console.log('DeviceOrientationEvent is not supported.');
                                                }
                                                app.autoTimeout = setTimeout(function () {
                                                    animateIdea();
                                                }, 10000);
                                            }
                                        }
                                    });

                                    return q.promise();
                                };
                                femaleFirst()
                                    .then(femaleSecond)
                                    .then(femaleThird)
                                    .then(function () {
                                        $pt.nextPage({
                                            showPage: 7,
                                            animation: 8,
                                            finished: window.onYouTubeIframeAPIReady($video)
                                        })
                                    });
                            }
                        });
                    })
                });
            });
        })(jQuery);
    });

    app.loadCss('css/animations.css');
    app.loadCss('css/style.css');
};

window.onYouTubeIframeAPIReady = function(vid) {
    if (vid)
        vid.loadVideo();
};

rexonamotion();
