var slightBox = {
  containerClass: "slightbox-container",
  currClassName: "slightbox-current",
  overlayID: "slightbox",
  toNextClass: "slightbox-to-next",
  toPrevClass: "slightbox-to-prev",
  closeText: "Close X",
  closeClass: "slightbox-close",
  nextText: "Next &#8594;",
  nextClass: "slightbox-next",
  prevText: "&#8592; Prev",
  prevClass: "slightbox-prev",
  mainControlsClass: "slightbox-main-controls",
  captionClass: "slightbox-caption",
  captionInnerClass: "slightbox-caption-inner",
  captionToggleClass: "slightbox-caption-toggle",
  captionToggleText: "Details &#8593;",
  activeCapClass: "slightbox-active",
  overlayHideClass: "slightbox-hidden",
  noScrollClass: "slightbox-noscroll",
  lastFocus: "",
  b: document.body,
  scrollCapture: 0,
  removeAClass: function(el, clssNm) {
    el.className = el.className
      .replace(
        new RegExp("(^|\\b)" + clssNm.split(" ").join("|") + "(\\b|$)", "gi"),
        " "
      )
      .trim()
  },
  openIt: function(el, src, alt, cap, cls) {
    cls = cls || ""
    if (!document.getElementById(this.overlayID)) {
      var o = document.createElement("FIGURE")
      o.setAttribute("id", this.overlayID)
      o.setAttribute("tabindex", "0")
      this.b.appendChild(o)
    }
    var overlay = document.getElementById(this.overlayID)
    if (this.lastFocus === "") this.lastFocus = document.activeElement
    var curr = document.getElementsByClassName(this.currClassName)
    for (var i = 0; i < curr.length; i++)
      this.removeAClass(curr[i], this.currClassName)
    el.className += " " + this.currClassName
    var img = '<img class="' + cls + '" src="' + src + '" alt="' + alt + '">',
      caption = "",
      closeButt =
        '<button role="close" class="' +
        this.closeClass +
        '">' +
        this.closeText +
        "</button>",
      toggleButt =
        '<button class="' +
        this.captionToggleClass +
        '" role="toggle">' +
        this.captionToggleText +
        "</button>",
      nextButt =
        '<button rel="next" class="' +
        this.nextClass +
        '">' +
        this.nextText +
        "</button>",
      prevButt =
        '<button rel="prev" class="' +
        this.prevClass +
        '">' +
        this.prevText +
        "</button>",
      mainCtrls =
        '<div class="' +
        this.mainControlsClass +
        '">' +
        nextButt +
        prevButt +
        closeButt +
        "</div>",
      scrl
    if (cap !== "" && cap !== null)
      caption =
        '<figcaption class="' +
        this.captionClass +
        '">' +
        toggleButt +
        '<div class="' +
        this.captionInnerClass +
        '">' +
        cap +
        "</div></figcaption>"
    overlay.innerHTML = img + caption + mainCtrls
    if (this.b.scrollTop > 0) this.scrollCapture = this.b.scrollTop
    this.b.className += " " + this.noScrollClass
    var left =
      (window.innerWidth -
        parseInt(getComputedStyle(this.b).getPropertyValue("width"), 10)) /
      2
    this.b.style.top = -this.scrollCapture + "px"
    this.b.style.left = left + "px"
    this.removeAClass(overlay, this.overlayHideClass)
    overlay.setAttribute("tabindex", "0")
    overlay.focus()
    this.removeAClass(overlay.getElementsByTagName("IMG")[0], cls)
  },
  closeIt: function() {
    document.getElementById(this.overlayID).className += this.overlayHideClass
    this.removeAClass(this.b, this.noScrollClass)
    this.b.style.top = ""
    this.b.style.left = ""
    this.b.scrollTop = this.scrollCapture
    this.lastFocus = ""
  },
  next: function() {
    var curr =
      document.getElementsByClassName(this.currClassName)[0] ||
      document
        .getElementsByClassName(this.containerClass)[0]
        .getElementsByTagName("IMG")[0]
    if (!curr.parentNode.nextElementSibling) return !1
    var nextEl = curr.parentNode.nextElementSibling.getElementsByTagName(
      "IMG"
    )[0]
    var nextSrc = nextEl.getAttribute("src"),
      nextAlt = nextEl.getAttribute("alt"),
      nextCap = nextEl.getAttribute("title")
    var pThis = this
    this.openIt(nextEl, nextSrc, nextAlt, nextCap, this.toNextClass)
  },
  prev: function() {
    var container = document.getElementsByClassName(this.containerClass)[0],
      curr =
        document.getElementsByClassName(this.currClassName)[0] ||
        container.getElementsByTagName("IMG")[
          container.getElementsByTagName("IMG").length - 1
        ]
    if (!curr.parentNode.previousElementSibling) return !1
    var prevEl = curr.parentNode.previousElementSibling.getElementsByTagName(
      "IMG"
    )[0]
    var prevSrc = prevEl.getAttribute("src"),
      prevAlt = prevEl.getAttribute("alt"),
      prevCap = prevEl.getAttribute("title")
    this.openIt(prevEl, prevSrc, prevAlt, prevCap, "slightbox-to-prev")
  },
  bindTouch: function() {
    var pThis = this,
      xDown = null,
      yDown = null
    document.addEventListener("touchstart", handleTouchStart, !1)
    document.addEventListener("touchmove", handleTouchMove, !1)
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX
      yDown = evt.touches[0].clientY
    }
    function handleTouchMove(evt) {
      if (!xDown || !yDown) return
      var xUp = evt.touches[0].clientX
      var yUp = evt.touches[0].clientY
      var xDiff = xDown - xUp
      var yDiff = yDown - yUp
      if (Math.abs(xDiff) > Math.abs(yDiff))
        if (xDiff > 0) pThis.next()
        else pThis.prev()
      else if (yDiff > 0);
      xDown = null
      yDown = null
    }
  },
  make: function() {
    var pThis = this,
      sb = document.getElementsByClassName(this.containerClass)
    console.log(sb)
    for (var i = 0; i < sb.length; i++)
      sb[i].addEventListener("click", function(e) {
        e.preventDefault()
        var target = e.target
        while (target != sb[i]) {
          if (target && target.nodeName == "A") {
            var img = target.getElementsByTagName("img")[0],
              src = img.getAttribute("src") || "",
              alt = img.getAttribute("alt") || "",
              cap = img.getAttribute("title") || ""
            pThis.openIt(img, src, alt, cap)
          }
          target = target.parentNode
        }
      })
    this.bindTouch()
    document.onkeyup = function(e) {
      if (e.keyCode == 27 || e.keyCode == 88) pThis.closeIt()
      if (e.keyCode == 39) pThis.next()
      if (e.keyCode == 37) pThis.prev()
      if (e.keyCode == 38)
        pThis.toggleCaption(
          document
            .getElementById(pThis.overlayID)
            .getElementsByClassName(pThis.captionClass)[0]
        )
    }
    this.b.addEventListener("click", function(e) {
      console.log("eeee")
      var t = e.target
      if (!t) return !1
      if (t.className === pThis.closeClass) {
        pThis.closeIt()
      }
      if (t.className.split(" ")[0] == pThis.captionToggleClass) {
        var tp = t.parentElement
        pThis.toggleCaption(tp)
      }
      if (t.className === pThis.nextClass) pThis.next()
      if (t.className === pThis.prevClass) pThis.prev()
    })
  },
  toggleCaption: function(el) {
    if (!el.hasAttribute("data-activated")) {
      el.className += " " + this.activeCapClass
      el.setAttribute("data-activated", "true")
    } else {
      this.removeAClass(el, this.activeCapClass)
      el.removeAttribute("data-activated")
    }
  }
}
