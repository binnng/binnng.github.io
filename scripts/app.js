(function(document, window) {
  var $ = document.querySelectorAll.bind(document);
  var eyes = $(".avatar i");
  var leftEye = eyes[0];
  var rightEye = eyes[1];

  var innerWidth;
  var innerHeight;

  var range = {
    top: [12, 20],
    left: [18, 26]
  };

  var distanceOf2Eyes = 29;


  var getCoords = function(event) {
    return {
      "x": event.clientX,
      "y": event.clientY
    };
  };

  var getPosByPercentage = function(arr, per) {
    return arr[0] + (arr[1] - arr[0]) * per;
  };

  var css = function(ele, obj) {
    for (var i in obj) {
      ele.style[i] = obj[i] + "px";
    }
  };

  var onMove = function(event) {
    var coords = getCoords(event);
    var percentage = {
      x: coords.x / innerWidth,
      y: coords.y / innerHeight
    };

    var top = getPosByPercentage(range.top, percentage.y);
    var left = getPosByPercentage(range.left, percentage.x);

    css(leftEye, {
      top: top,
      left: left
    })
    css(rightEye, {
      top: top,
      left: left + distanceOf2Eyes
    })


  };


  var onResize = function() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
  };

  window.onmousemove = onMove;
  window.onresize = onResize;


  onResize();

})(document, window);