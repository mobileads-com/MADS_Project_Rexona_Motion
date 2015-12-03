/*
 *
 * mads - version 2.00.01
 * Copyright (c) 2015, Ninjoe
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://en.wikipedia.org/wiki/MIT_License
 * https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 *
 */
!function (n) {
    function t() {
        w("Executed emptyFunc, which does nothing.")
    }

    function e() {
        return b ? (L.apply(D, arguments), !0) : (w(arguments), !1)
    }

    function r(t, e, u) {
        var o = t.shift();
        return u = u || e, e(o), 0 === t.length ? !0 : n.setTimeout(function () {
            return r(t, u, e)
        }, o)
    }

    function u(n) {
        var t, e = 0, r = 0;
        for (r = 0, t = n.length; t > r; r += 1)e += n[r];
        return function (t) {
            var r, u, o = t / e, i = [];
            for (r = 0, u = n.length; u > r; r += 1)i.push(n[r] * o);
            P.vibrate(i)
        }
    }

    function o() {
        var t = arguments, e = arguments.length;
        return function (r) {
            function u() {
                t[o](i)
            }

            var o = 0, i = r / e;
            for (o = 0; e > o; o += 1)n.setTimeout(u, i)
        }
    }

    function i() {
        var n, e, i, a = arguments;
        for (n = a.length, e = 0; n > e; e += 1)"function" != typeof a[e] && (a[e] = u(a[e]));
        return i = o(a), function (n) {
            "number" == typeof n ? i(n) : r(n, i, t)
        }
    }

    function a(n) {
        function e(e) {
            "number" == typeof e ? n(e) : r(e, n, t)
        }

        if (arguments.length > 1)n = i.apply(this, arguments); else if (n && "function" != typeof n && n.length)n = u(n); else if (n && "function" != typeof n)return null;
        return e
    }

    function f(n) {
        n.preventDefault(), E.push(new Date)
    }

    function s() {
        E = [], n.addEventListener("touchstart", f, !1), n.addEventListener("touchend", f, !1), n.addEventListener("mousedown", f, !1), n.addEventListener("mouseup", f, !1)
    }

    function c() {
        w(E), n.removeEventListener("touchstart", f), n.removeEventListener("touchend", f), n.removeEventListener("mousedown", f), n.removeEventListener("mouseup", f), E.length % 2 !== 0 && E.push(new Date);
        var t, e, r, u = [];
        for (t = 0, r = E.length; r > t && (e = t + 1, !(e >= r)); t += 2)u.push(E[e] - E[t]);
        return u
    }

    function h(n) {
        var t, r, u = [];
        if (100 > n)u = n; else for (t = n / 100, r = 1; 10 >= r; r += 1)u.push(r * t), 10 > r && u.push((10 - r) * t);
        e(u)
    }

    function v(n) {
        var t, r, u = [];
        if (100 > n)u = n; else {
            for (t = n / 100, r = 1; 10 >= r; r += 1)u.push(r * t), 10 > r && u.push((10 - r) * t);
            u.reverse()
        }
        e(u)
    }

    function p(n) {
        var t, r, u;
        t = n / 27, r = 2 * t, u = 3 * t, e([r, t, r, t, r, 2 * t, u, t, u, 2 * t, r, t, r, t, r])
    }

    function l(n) {
        var t, r, u;
        r = n / 60, t = 2 * r, u = 24 * r, e([r, t, u, 2 * t, u, 2 * t, r])
    }

    function m(n) {
        var t, r, u;
        r = 4 * n / 22, t = 2 * r, u = r / 2 * 5, e([r, t, u])
    }

    function g(n, t, r) {
        var u = [t];
        for (n -= t; n > 0;)n -= r, n -= t, u.push(r), u.push(t);
        e(u)
    }

    function d(n, e, u) {
        var o;
        "number" == typeof n ? g(n, e, u) : (o = function (n) {
            g(n, e, u)
        }, r(n, o, t))
    }

    function y(n, t) {
        return function (e) {
            d(e, n, t)
        }
    }

    var b, E, L, w, D, P = {};
    D = n.navigator, w = function () {
        w.history = w.history || [], w.history.push(arguments), n.console && n.console.log(Array.prototype.slice.call(arguments))
    }, L = D.vibrate || D.webkitVibrate || D.mozVibrate || D.msVibrate, b = !!L, P.enabled = b, P.record = s, P.finish = c, P.fadeIn = a(h), P.fadeOut = a(v), P.notification = a(p), P.heartbeat = a(l), P.clunk = a(m), P.pwm = d, P.createPatternPWM = y, P.createPattern = a, P.vibrate = e, n.Haptics = P
}(this);
!function (t, e) {
    "function" == typeof define && define.amd ? define(function () {
        return e(t, t.document)
    }) : "undefined" != typeof module && module.exports ? module.exports = e(t, t.document) : t.Shake = e(t, t.document)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function i(i) {
        if (this.hasDeviceMotion = "ondevicemotion" in t, this.options = {
                threshold: 15,
                timeout: 1e3
            }, "object" == typeof i)for (var s in i)i.hasOwnProperty(s) && (this.options[s] = i[s]);
        if (this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof e.CustomEvent)this.event = new e.CustomEvent("shake", {
            bubbles: !0,
            cancelable: !0
        }); else {
            if ("function" != typeof e.createEvent)return !1;
            this.event = e.createEvent("Event"), this.event.initEvent("shake", !0, !0)
        }
    }

    return i.prototype.reset = function () {
        this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null
    }, i.prototype.start = function () {
        this.reset(), this.hasDeviceMotion && t.addEventListener("devicemotion", this, !1)
    }, i.prototype.stop = function () {
        this.hasDeviceMotion && t.removeEventListener("devicemotion", this, !1), this.reset()
    }, i.prototype.devicemotion = function (e) {
        var i, s, n = e.accelerationIncludingGravity, o = 0, h = 0, l = 0;
        return null === this.lastX && null === this.lastY && null === this.lastZ ? (this.lastX = n.x, this.lastY = n.y, void(this.lastZ = n.z)) : (o = Math.abs(this.lastX - n.x), h = Math.abs(this.lastY - n.y), l = Math.abs(this.lastZ - n.z), (o > this.options.threshold && h > this.options.threshold || o > this.options.threshold && l > this.options.threshold || h > this.options.threshold && l > this.options.threshold) && (i = new Date, s = i.getTime() - this.lastTime.getTime(), s > this.options.timeout && (t.dispatchEvent(this.event), this.lastTime = new Date)), this.lastX = n.x, this.lastY = n.y, void(this.lastZ = n.z))
    }, i.prototype.handleEvent = function (t) {
        return "function" == typeof this[t.type] ? this[t.type](t) : void 0
    }, i
});

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
                        opt.after();
                    }
                }

                if (frameIndex === Math.round(numberOfFrames / 2)) {
                    if (opt && opt.middle && !midbrk) {
                        midbrk = true;
                        opt.middle();
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

var Swiper = function (container) {
    var touches = {
        "touchstart": {"x": -1, "y": -1},
        "touchmove": {"x": -1, "y": -1},
        "mousedown": {"x": -1, "y": -1},
        "mousemove": {"x": -1, "y": -1},
        "touchend": false,
        "mouseup": false,
        "direction": "undetermined"
    };

    var touchHandler = function (event) {
        var touch;
        if (typeof event !== 'undefined') {
            event.preventDefault();
            if (typeof event.touches !== 'undefined') {
                touch = event.touches[0];
                switch (event.type) {
                    case 'touchstart':
                    case 'touchmove':
                        touches[event.type].x = touch.pageX;
                        touches[event.type].y = touch.pageY;
                        break;
                    case 'touchend':
                        touches[event.type] = true;
                        if (touches.touchstart.x > -1 && touches.touchmove.x > -1) {
                            touches.direction = touches.touchstart.x < touches.touchmove.x ? "right" : "left";
                            if (callback !== null)
                                callback(touches.direction);
                            if (fire !== null && fire.direction === touches.direction)
                                fire.cb();
                        }
                        break;
                }
            }
            switch (event.type) {
                case 'mousedown':
                case 'mousemove':
                    touches[event.type].x = event.pageX;
                    touches[event.type].y = event.pageY;
                    break;
                case "mouseup":
                    touches[event.type] = true;
                    if (touches.mousedown.x > -1 && touches.mousemove.x > -1) {
                        touches.direction = touches.mousedown.x < touches.mousemove.x ? "right" : "left";
                        if (callback !== null)
                            callback(touches.direction);
                        if (fire !== null && fire.direction === touches.direction)
                            fire.cb();
                    }
                    break;
            }
        }
    };

    var callback = null;
    this.__defineSetter__('event', function (val) {
        callback = val;
    });

    var fire = {};
    this.fire = function (direction, cb) {
        fire.cb = cb;
        fire.direction = direction;
    };

    this.init = function () {
        container.addEventListener('touchstart', touchHandler, false);
        container.addEventListener('touchmove', touchHandler, false);
        container.addEventListener('touchend', touchHandler, false);
        container.addEventListener('mousedown', touchHandler, false);
        container.addEventListener('mousemove', touchHandler, false);
        container.addEventListener('mouseup', touchHandler, false);
    };

    this.init();
};

var rexonamotion = function () {
    var id = window.setTimeout(function () {
    }, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    var app = new mads();
    app.autoTimeout = null;
    app.loadJs('js/njswipe-1.0.0.min.js');
    app.loadJs('js/jquery-1.11.3.min.js', function () {
        if (typeof window.jQuery === 'undefined') return false;
        (function ($) {
            var $container = $(app.contentTag);
            var $delayFirst = 400,
                $delaySecond = 400,
                $delayEachFrame = 1500,
                $sensitivity = 10;
            $container.load('tpl/template.html');
            app.loadJs('js/ninjoe.ytComponent.js');
            app.loadJs('js/jquery.jrumble.1.3.min.js');
            app.loadJs('js/modernizr.custom.js', function () {
                app.loadJs('js/pagetransitions.js', function () {
                    var $video = new ytComponent({
                        'container': 'player',
                        'width': '320',
                        'height': '185',
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
                                    var pageSwiper = new Swiper($('.male-run')[0]);
                                    //$('.male-run')[0].addEventListener('swipeleft', function () {
                                    pageSwiper.fire('left', function () {
                                        clearTimeout(firstTimeout);
                                        clearTimeout(secondTimeout);
                                        $('.male-run .action').css('opacity', 0);
                                        playMolecule('.male-run .timeline .first .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.male-run .timeline .first .bubble').css('opacity', 0);
                                                $('.male-run .timeline').removeClass('one').addClass('two');
                                                $('.male-run .image').removeClass('male-run-1').addClass('male-run-2');
                                                //firstTimeout = setTimeout(function () {
                                                    playMolecule('.male-run .timeline .second .bubble', {
                                                        middle: function () {
                                                            Haptics.vibrate(50);
                                                        },
                                                        after: function () {
                                                            $('.male-run .image').removeClass('male-run-2').addClass('male-run-3');
                                                            $('.male-run .timeline').removeClass('two').addClass('three');
                                                            $('.male-run .timeline .second .bubble').css('opacity', 0);
                                                            //secondTimeout = setTimeout(function () {
                                                                playMolecule('.male-run .timeline .third .bubble', {
                                                                    middle: function () {
                                                                        Haptics.vibrate(50);
                                                                    },
                                                                    after: function () {
                                                                        setTimeout(function () {
                                                                            Haptics.vibrate(200);
                                                                            clearTimeout(firstTimeout);
                                                                            clearTimeout(secondTimeout);
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }
                                                                });
                                                            //}, $delaySecond);
                                                        }
                                                    });
                                                //}, $delayFirst);
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
                                            var shaked = false;
                                            var animateMusic = function () {
                                                clearTimeout(app.autoTimeout);
                                                shaked = true;
                                                myShakeEvent.stop();
                                                $('.male-music .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playCharacter('.male-music', {
                                                    duration: 20
                                                });
                                                playMolecule('.male-music .timeline .first .bubble', {
                                                    middle: function () {
                                                        Haptics.vibrate(50);
                                                    },
                                                    after: function () {
                                                        $('.male-music .timeline .first .bubble').css('opacity', 0);
                                                        $('.male-music .timeline').removeClass('one').addClass('two');
                                                        $('.male-music .image').removeClass('male-music-1').addClass('male-music-2');
                                                        //firstTimeout = setTimeout(function () {
                                                            playMolecule('.male-music .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    $('.male-music .image').removeClass('male-music-2').addClass('male-music-3');
                                                                    $('.male-music .timeline').removeClass('two').addClass('three');
                                                                    $('.male-music .timeline .second .bubble').css('opacity', 0);
                                                                    //secondTimeout = setTimeout(function () {
                                                                        playMolecule('.male-music .timeline .third .bubble', {
                                                                            middle: function () {
                                                                                Haptics.vibrate(50);
                                                                            },
                                                                            after: function () {
                                                                                setTimeout(function () {
                                                                                    Haptics.vibrate(200);
                                                                                    clearTimeout(firstTimeout);
                                                                                    clearTimeout(secondTimeout);
                                                                                    q.resolve();
                                                                                }, $delayEachFrame);
                                                                            }
                                                                        });

                                                                    //}, $delaySecond);
                                                                }
                                                            });
                                                        //}, $delayFirst);
                                                    }
                                                });
                                            };

                                            if (!shaked) {
                                                var myShakeEvent = new Shake({
                                                    threshold: 15, // optional shake strength threshold
                                                    timeout: 1000 // optional, determines the frequency of event generation
                                                });
                                                myShakeEvent.start();
                                                window.addEventListener('shake', shakeEventDidOccur, false);
                                                function shakeEventDidOccur() {
                                                    animateMusic();
                                                }

                                                app.autoTimeout = setTimeout(function () {
                                                    //animateMusic();
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
                                            var tilted = false;
                                            var animateIdea = function () {
                                                tilted = true;
                                                $('.male-idea .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playMolecule('.male-idea .timeline .first .bubble', {
                                                    middle: function () {
                                                        Haptics.vibrate(50);
                                                    },
                                                    after: function () {
                                                        $('.male-idea .timeline .first .bubble').css('opacity', 0);
                                                        $('.male-idea .timeline').removeClass('one').addClass('two');
                                                        $('.male-idea .image').removeClass('male-idea-1').addClass('male-idea-2');
                                                        //firstTimeout = setTimeout(function () {
                                                            playMolecule('.male-idea .timeline .second .bubble', {
                                                                middle: function () {
                                                                    Haptics.vibrate(50);
                                                                },
                                                                after: function () {
                                                                    $('.male-idea .image').removeClass('male-idea-2').addClass('male-idea-3');
                                                                    $('.male-idea .timeline').removeClass('two').addClass('three');
                                                                    $('.male-idea .timeline .second .bubble').css('opacity', 0);
                                                                    //secondTimeout = setTimeout(function () {
                                                                        playMolecule('.male-idea .timeline .third .bubble', {
                                                                            middle: function () {
                                                                                Haptics.vibrate(50);
                                                                            },
                                                                            after: function () {
                                                                                setTimeout(function () {
                                                                                    Haptics.vibrate(200);
                                                                                    clearTimeout(firstTimeout);
                                                                                    clearTimeout(secondTimeout);
                                                                                    q.resolve();
                                                                                }, $delayEachFrame);
                                                                            }
                                                                        });

                                                                    //}, $delaySecond);
                                                                }
                                                            });
                                                        //}, $delayFirst);
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
                                                app.autoTimeout = setTimeout(function () {
                                                    //animateIdea();
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
                                    var pageSwiper = new Swiper($('.female-run')[0]);
                                    //$('.female-run')[0].addEventListener('swipeleft', function () {
                                    pageSwiper.fire('left', function () {
                                        clearTimeout(firstTimeout);
                                        clearTimeout(secondTimeout);
                                        $('.female-run .action').css('opacity', 0);
                                        playMolecule('.female-run .timeline .first .bubble', {
                                            middle: function () {
                                                Haptics.vibrate(50);
                                            },
                                            after: function () {
                                                $('.female-run .timeline .first .bubble').css('opacity', 0);
                                                $('.female-run .timeline').removeClass('one').addClass('two');
                                                $('.female-run .image').removeClass('female-run-1').addClass('female-run-2');
                                                //firstTimeout = setTimeout(function () {
                                                playMolecule('.female-run .timeline .second .bubble', {
                                                    middle: function () {
                                                        Haptics.vibrate(50);
                                                    },
                                                    after: function () {
                                                        $('.female-run .image').removeClass('female-run-2').addClass('female-run-3');
                                                        $('.female-run .timeline').removeClass('two').addClass('three');
                                                        $('.female-run .timeline .second .bubble').css('opacity', 0);
                                                        //secondTimeout = setTimeout(function () {
                                                        playMolecule('.female-run .timeline .third .bubble', {
                                                            middle: function () {
                                                                Haptics.vibrate(50);
                                                            },
                                                            after: function () {
                                                                setTimeout(function () {
                                                                    Haptics.vibrate(200);
                                                                    clearTimeout(firstTimeout);
                                                                    clearTimeout(secondTimeout);
                                                                    q.resolve();
                                                                }, $delayEachFrame);
                                                            }
                                                        });
                                                        //}, $delaySecond);
                                                    }
                                                });
                                                //}, $delayFirst);
                                            }
                                        });
                                    });

                                    return q.promise();
                                };
                                var femaleSecond = function () {
                                    var q = $.Deferred();
                                    $pt.nextPage({
                                        animation: 46,
                                        finished: function () {
                                            var shaked = false;
                                            var animateMusic = function () {
                                                clearTimeout(app.autoTimeout);
                                                shaked = true;
                                                myShakeEvent.stop();
                                                $('.female-music .action').css('opacity', 0);
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playCharacter('.female-music', {
                                                    duration: 20
                                                });
                                                playMolecule('.female-music .timeline .first .bubble', {
                                                    middle: function () {
                                                        Haptics.vibrate(50);
                                                    },
                                                    after: function () {
                                                        $('.female-music .timeline .first .bubble').css('opacity', 0);
                                                        $('.female-music .timeline').removeClass('one').addClass('two');
                                                        $('.female-music .image').removeClass('female-music-1').addClass('female-music-2');
                                                        //firstTimeout = setTimeout(function () {
                                                        playMolecule('.female-music .timeline .second .bubble', {
                                                            middle: function () {
                                                                Haptics.vibrate(50);
                                                            },
                                                            after: function () {
                                                                $('.female-music .image').removeClass('female-music-2').addClass('female-music-3');
                                                                $('.female-music .timeline').removeClass('two').addClass('three');
                                                                $('.female-music .timeline .second .bubble').css('opacity', 0);
                                                                //secondTimeout = setTimeout(function () {
                                                                playMolecule('.female-music .timeline .third .bubble', {
                                                                    middle: function () {
                                                                        Haptics.vibrate(50);
                                                                    },
                                                                    after: function () {
                                                                        setTimeout(function () {
                                                                            Haptics.vibrate(200);
                                                                            clearTimeout(firstTimeout);
                                                                            clearTimeout(secondTimeout);
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }
                                                                });

                                                                //}, $delaySecond);
                                                            }
                                                        });
                                                        //}, $delayFirst);
                                                    }
                                                });
                                            };

                                            if (!shaked) {
                                                var myShakeEvent = new Shake({
                                                    threshold: 15, // optional shake strength threshold
                                                    timeout: 1000 // optional, determines the frequency of event generation
                                                });
                                                myShakeEvent.start();
                                                window.addEventListener('shake', shakeEventDidOccur, false);
                                                function shakeEventDidOccur() {
                                                    animateMusic();
                                                }

                                                app.autoTimeout = setTimeout(function () {
                                                    //animateMusic();
                                                }, 10000);
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
                                                clearTimeout(firstTimeout);
                                                clearTimeout(secondTimeout);
                                                playMolecule('.female-idea .timeline .first .bubble', {
                                                    middle: function () {
                                                        Haptics.vibrate(50);
                                                    },
                                                    after: function () {
                                                        $('.female-idea .timeline .first .bubble').css('opacity', 0);
                                                        $('.female-idea .timeline').removeClass('one').addClass('two');
                                                        $('.female-idea .image').removeClass('female-idea-1').addClass('female-idea-2');
                                                        //firstTimeout = setTimeout(function () {
                                                        playMolecule('.female-idea .timeline .second .bubble', {
                                                            middle: function () {
                                                                Haptics.vibrate(50);
                                                            },
                                                            after: function () {
                                                                $('.female-idea .image').removeClass('female-idea-2').addClass('female-idea-3');
                                                                $('.female-idea .timeline').removeClass('two').addClass('three');
                                                                $('.female-idea .timeline .second .bubble').css('opacity', 0);
                                                                //secondTimeout = setTimeout(function () {
                                                                playMolecule('.female-idea .timeline .third .bubble', {
                                                                    middle: function () {
                                                                        Haptics.vibrate(50);
                                                                    },
                                                                    after: function () {
                                                                        setTimeout(function () {
                                                                            Haptics.vibrate(200);
                                                                            clearTimeout(firstTimeout);
                                                                            clearTimeout(secondTimeout);
                                                                            q.resolve();
                                                                        }, $delayEachFrame);
                                                                    }
                                                                });

                                                                //}, $delaySecond);
                                                            }
                                                        });
                                                        //}, $delayFirst);
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
                                                app.autoTimeout = setTimeout(function () {
                                                    //animateIdea();
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

window.onYouTubeIframeAPIReady = function (vid) {
    if (vid)
        vid.loadVideo();
};

rexonamotion();
