var Shiver = function (el, options) {
    var cel = {target:el[0]};

    function extend() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    }

    var defaults = {
            x: 2,
            y: 2,
            rotation: 1,
            speed: 15,
            opacity: false,
            opacityMin: .5
        },
        opt = extend({}, defaults, options);

    (function () {
        var $this = cel,
            x = opt.x * 2,
            y = opt.y * 2,
            rot = opt.rotation * 2,
            speed = (opt.speed === 0) ? 1 : opt.speed,
            opac = opt.opacity,
            opacm = opt.opacityMin,
            inline,
            interval;

        var shiverer = function () {
            var rx = Math.floor(Math.random() * (x + 1)) - x / 2,
                ry = Math.floor(Math.random() * (y + 1)) - y / 2,
                rrot = Math.floor(Math.random() * (rot + 1)) - rot / 2,
                ropac = opac ? Math.random() + opacm : 1;

            rx = (rx === 0 && x !== 0) ? ((Math.random() < .5) ? 1 : -1) : rx;
            ry = (ry === 0 && y !== 0) ? ((Math.random() < .5) ? 1 : -1) : ry;

            if ($this.target.style.display === 'inline') {
                inline = true;
                $this.target.style.display == 'inline-block';
            }

            $this.target.style.cssText = 'position:relative;left:' + rx + 'px' + 'top:' + ry + 'px' + '-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=' + ropac * 100 + ');' +
                'filter:alpha(opacity=' + ropac * 100 + ');-moz-opacity:' + ropac + ';-khtml-opacity' + ropac + ';opacity:' + ropac + ';' +
                '-webkit-transform:rotate(' + rrot + 'deg);-moz-transform:rotate(' + rrot + 'deg);-ms-transform:rotate(' + rrot + 'deg);' +
                '-o-transform:rotate(' + rrot + 'deg);transform:rotate(' + rrot + 'deg);';

        };

        var reset = 'left:0;top:0;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);-moz-opacity:1;-khtml-opacity:1;' +
            'opacity:1;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);'


        $this.startShiver = function () {
            var ev = document.createEvent('Event');
            ev.initEvent('startShiver', true, true);

            cel.target.addEventListener('startShiver', function (e) {
                e.stopPropagation();
                clearInterval(interval);
                interval = setInterval(shiverer, speed);
            }, false);
            cel.target.dispatchEvent(ev);
        };

        $this.stopShiver = function () {
            var ev = document.createEvent('Event');
            ev.initEvent('stopShiver', true, true);
            cel.target.addEventListener('stopShiver', function(e) {
                e.stopPropagation();
                clearInterval(interval);
                if (inline) {
                    $this.target.style.display = 'inline';
                }
                $this.target.style.cssText = reset;
            }, false);
            cel.target.dispatchEvent(ev);
        };
    }());
    return cel;
};