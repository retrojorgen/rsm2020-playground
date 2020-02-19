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

var hero = document.getElementById("hero");
var heroHeight = hero.offsetHeight;

var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var box6 = document.getElementById("box-6");
var box7 = document.getElementById("box-7");
var box8 = document.getElementById("box-8");
var box9 = document.getElementById("box-9");

var box10 = document.getElementById("box-10");
var box11 = document.getElementById("box-11");
var box12 = document.getElementById("box-12");
var box13 = document.getElementById("box-13");
var box14 = document.getElementById("box-14");
var box15 = document.getElementById("box-15");
var box16 = document.getElementById("box-16");
var box17 = document.getElementById("box-17");
var box18 = document.getElementById("box-18");

function play(x, y, time, element, delay) {
  TweenLite.set(element, { y: 0, x: x });
  var tl = new TimelineLite({ delay: delay });
  tl.to(element, time / 6, { y: y * -1 })
    .to(element, time / 2.4, { y: 0, ease: Bounce.easeOut })
    .to(element, time / 1.2, { x: "+=450", rotate: -80 }, "-=" + time / 1.75)
    .to(
      element,
      time / 3,
      {
        x: x,
        rotate: 0
      },
      "+=" + time / 3
    )
    .call(play, [x, y, time, element]);
}

function getRandomHeight() {
  var maxHeight = heroHeight;
  return Math.floor((Math.random() * maxHeight) / 2) + maxHeight / 3;
}

function getRandomXPos() {
  var maxWidth = window.innerWidth;
  return Math.floor(Math.random() * maxWidth - maxWidth / 2) + 1;
}

Math.floor(Math.random() * 100 + 1);

play(getRandomXPos(), getRandomHeight(), 5, box1, 0);
play(getRandomXPos(), getRandomHeight(), 5, box2, 0.5);
play(getRandomXPos(), getRandomHeight(), 5, box3, 0.75);

play(getRandomXPos(), getRandomHeight(), 5, box4, 1);
play(getRandomXPos(), getRandomHeight(), 5, box5, 1.25);
play(getRandomXPos(), getRandomHeight(), 4, box6, 1.4);

play(getRandomXPos(), getRandomHeight(), 5, box7, 2.5);
play(getRandomXPos(), getRandomHeight(), 5, box8, 2.7);
play(getRandomXPos(), getRandomHeight(), 5, box9, 5);

play(getRandomXPos(), getRandomHeight(), 5, box10, 0);
play(getRandomXPos(), getRandomHeight(), 5, box11, 0.5);
play(getRandomXPos(), getRandomHeight(), 5, box12, 0.75);

play(getRandomXPos(), getRandomHeight(), 5, box13, 1);
play(getRandomXPos(), getRandomHeight(), 5, box14, 1.25);
play(getRandomXPos(), getRandomHeight(), 4, box15, 1.4);

play(getRandomXPos(), getRandomHeight(), 5, box16, 2.5);
play(getRandomXPos(), getRandomHeight(), 5, box17, 2.7);
play(getRandomXPos(), getRandomHeight(), 5, box18, 3);
