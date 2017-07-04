;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M544 128 480 128 480 480 128 480 128 544 480 544 480 896 544 896 544 544 895.936 544 895.936 480 544 480Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.707334 519.450692 308.065819 71.476915 256.054235 122.209366 663.627884 519.419993 256.085958 916.629597 308.060703 967.363072Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.99693 955.527512c-244.950851 0-443.524442-198.573591-443.524442-443.530582 0-244.950851 198.573591-443.523419 443.524442-443.523419 244.956991 0 443.530582 198.573591 443.530582 443.523419C955.527512 756.953921 756.952898 955.527512 511.99693 955.527512L511.99693 955.527512zM511.99693 131.832538c-209.91387 0-380.164393 170.250522-380.164393 380.164393 0 209.918987 170.250522 380.170532 380.164393 380.170532 209.918987 0 380.170532-170.251545 380.170532-380.170532C892.167462 302.08306 721.915917 131.832538 511.99693 131.832538L511.99693 131.832538zM511.99693 765.442246"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-checkbox" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M759.68973 901.972782c71.633481 0 129.880069-58.227146 129.880069-129.86165L889.5698 252.68193c0-71.615061-58.246589-129.879046-129.880069-129.879046L258.821255 122.802884c-71.625294 0-129.890302 58.265008-129.890302 129.879046l0 519.429203c0 71.634504 58.265008 129.86165 129.890302 129.86165L759.68973 901.972782M759.68973 957.60994 258.821255 957.60994c-102.452393 0-185.53667-83.048461-185.53667-185.498808L73.284585 252.68193c0-102.477976 83.083254-185.534624 185.53667-185.534624l500.868475 0c102.485139 0 185.534624 83.056648 185.534624 185.534624l0 519.429203C945.223331 874.561479 862.174869 957.60994 759.68973 957.60994L759.68973 957.60994 759.68973 957.60994z"  ></path>' +
    '' +
    '<path d="M477.971487 759.156076c-21.107737 21.107737-55.364959 21.107737-76.471672 0L197.577403 555.234687c-21.107737-21.107737-21.107737-55.365982 0-76.471672 21.113877-21.142529 55.363935-21.142529 76.477812 0l203.916273 203.905016C499.085364 703.792141 499.085364 738.035036 477.971487 759.156076L477.971487 759.156076zM895.149888 341.953116 477.971487 759.156076c-21.107737 21.107737-55.364959 21.107737-76.471672 0-21.115923-21.122063-21.115923-55.364959 0-76.489068l417.159982-417.194774c21.123087-21.10569 55.363935-21.10569 76.490092 0C916.270928 286.587134 916.270928 320.838216 895.149888 341.953116L895.149888 341.953116z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 448 896 448C931.328 448 960 476.672 960 512 960 547.328 931.328 576 896 576L128 576C92.672 576 64 547.328 64 512 64 476.672 92.672 448 128 448Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-checkbox1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M827.733333 64H194.133333C121.6 64 64 123.733333 64 196.266667v631.466666C64 900.266667 121.6 960 194.133333 960h633.6c72.533333 0 132.266667-59.733333 132.266667-130.133333V196.266667C960 123.733333 900.266667 64 827.733333 64z m78.933334 765.866667c0 42.666667-36.266667 78.933333-78.933334 78.933333H194.133333c-42.666667 0-78.933333-36.266667-78.933333-78.933333V196.266667c0-42.666667 36.266667-78.933333 78.933333-78.933334h633.6c42.666667 0 78.933333 36.266667 78.933334 78.933334v633.6z" fill="#567796" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tahz-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 720.817493c115.326293 0 208.817493-93.4912 208.817493-208.817493S627.326293 303.182507 512 303.182507 303.182507 396.673707 303.182507 512s93.4912 208.817493 208.817493 208.817493zM512 955.733333c245.067093 0 443.733333-198.66624 443.733333-443.733333S757.067093 68.266667 512 68.266667 68.266667 266.932907 68.266667 512s198.66624 443.733333 443.733333 443.733333z m0-52.200106C295.76192 903.533227 120.466773 728.234667 120.466773 512S295.76192 120.4736 512 120.4736c216.234667 0 391.533227 175.291733 391.533227 391.5264S728.234667 903.533227 512 903.533227z" fill="#499DF1" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)