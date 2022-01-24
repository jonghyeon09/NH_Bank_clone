$(document).ready(function () {
  const li = document.querySelectorAll(".eduSlider > ul > li");
  const next = document.querySelector(".controls .next");
  const prev = document.querySelector(".controls .prev");
  let count = 0;
  let e = false;
  let interval;

  eduinter();

  $("#playBt").click(function () {
    if (e == false) {
      clearInterval(interval);
      $("#playBt").removeClass("stop");
      $("#playBt").addClass("start");
      e = true;
    } else if (e == true) {
      eduinter();
      $("#playBt").removeClass("start");
      $("#playBt").addClass("stop");
      e = false;
    }
  });

  $(li).hide();
  $(li[0]).show();
  $(next).click(function () {
    clearInterval(interval);
    $("#playBt").removeClass("stop");
    $("#playBt").addClass("start");
    e = true;
    $(li).hide();
    blink();
    if (count <= 4) {
      count++;
      $(li[count]).show();
      if (count == 5) {
        count = 0;
        $(li[count]).show();
      }
    }
  });

  $(prev).click(function () {
    clearInterval(interval);
    $("#playBt").removeClass("stop");
    $("#playBt").addClass("start");
    e = true;
    $(li).hide();
    blink();
    if (count >= 0) {
      count--;
      $(li[count]).show();
      if (count == -1) {
        count = 4;
        $(li[count]).show();
      }
    }
  });

  function eduinter() {
    interval = setInterval(() => {
      $(next).trigger("click");
      $("#playBt").removeClass("start");
      $("#playBt").addClass("stop");
    }, 3000);
  }

  function blink() {
    $(li).addClass("blink");
  }
});
