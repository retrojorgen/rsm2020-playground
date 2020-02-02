function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

var resetElement = function(element) {
  element.style.transform = "";
  element.style.transform3d = "";
};

var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var box6 = document.getElementById("box-6");
var box7 = document.getElementById("box-7");
var box8 = document.getElementById("box-8");
var box9 = document.getElementById("box-9");

function play(x, y, time, element) {
  TweenLite.set(element, { y: 0, x: x });
  var tl = new TimelineLite({ delay: 0 });
  tl.to(element, time / 6, { y: -400 })
    .to(element, time / 2.4, { y: 0, ease: Bounce.easeOut })
    .to(element, time / 1.2, { x: "+=450", rotate: -80 }, "-=" + time / 1.75)
    .to(
      element,
      time / 3,
      {
        x: 0,
        rotate: 0
      },
      "+=" + time / 3
    )
    .call(play, [x, y, time, element]);
}
play(300, 400, 3, box1);
play(600, 450, 4, box2);
play(100, 500, 2, box3);
