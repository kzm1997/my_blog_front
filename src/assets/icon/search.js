!function (a) {
    var e,
        d = '<svg><symbol id="v-iconsearch" viewBox="0 0 1024 1024"><path d="M1005.888 993.728c23.36-23.232-0.832-44.096-0.832-44.096L829.376 774.4c59.392-78.528 105.28-186.368 105.28-292.672 0-256.704-206.656-464.768-462.016-464.768C217.664 16.96 11.008 225.024 11.008 481.664c0 256.576 206.656 464.704 461.632 464.832 109.312 0 233.664-61.504 312.64-124.992l175.168 174.72c0.064 0 17.152 25.792 45.44-2.496zM190.72 765.504a401.024 401.024 0 0 1-116.928-283.968A400.832 400.832 0 0 1 190.72 197.76a394.752 394.752 0 0 1 281.984-117.632c106.816 0 206.656 41.728 282.048 117.568a400 400 0 0 1 117.12 283.904 399.296 399.296 0 0 1-117.12 283.904 393.152 393.152 0 0 1-282.048 117.376 392.896 392.896 0 0 1-281.984-117.376z"  ></path></symbol></svg>',
        t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
    if (t && !a.__iconfont__svg__cssinject__) {
        a.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    !function (e) {
        if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0); else {
            var t = function () {
                document.removeEventListener("DOMContentLoaded", t, !1), e()
            };
            document.addEventListener("DOMContentLoaded", t, !1)
        } else document.attachEvent && (o = e, i = a.document, c = !1, (d = function () {
            try {
                i.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(d, 50)
            }
            n()
        })(), i.onreadystatechange = function () {
            "complete" == i.readyState && (i.onreadystatechange = null, n())
        });

        function n() {
            c || (c = !0, o())
        }

        var o, i, c, d
    }(function () {
        var e, t, n, o, i, c;
        (e = document.createElement("div")).innerHTML = d, d = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n = t, (o = document.body).firstChild ? (i = n, (c = o.firstChild).parentNode.insertBefore(i, c)) : o.appendChild(n))
    })
}(window);