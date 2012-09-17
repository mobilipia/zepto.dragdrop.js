(function ($) {

  "use strict";

  $.touchable = (function () {
    return !!('ontouchstart' in window);
  })();

  // helpers
  $.getPos = function (e) {
    var pos, touch;

    if ($.touchable) {
      if (e.targetTouches.length == 1) {
        touch = e.targetTouches[0];
        pos = { x: touch.x, y: touch.y };
      }
    }
    else {
      pos = { x: e.pageX, y: e.pageY };
    }

    return pos;
  }

  var doc = document;

  $.elementFromPoint = function (x, y) {
    var moved = false;

    if (window.pageYOffset > 0) {
      moved = (doc.elementFromPoint(0, window.pageYOffset + window.innerHeight -1) === null);
    } else if (window.pageXOffset > 0) {
      moved = (doc.elementFromPoint(window.pageXOffset + window.innerWidth -1, 0) === null);
    }

    if (moved) {
      return doc.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
    } else {
      return doc.elementFromPoint(x, y);
    }
  }

})(Zepto);