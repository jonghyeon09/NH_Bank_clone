$(document).ready(function () {
  const height = $(".noticeSlider").height();
  const ul = document.querySelector(".noticeSlider ul");
  const prev = document.querySelector(".conWrap .prev");
  const next = document.querySelector(".conWrap .next");
  let count = 0;
  let e = false;
  let interval;

  noticeinter();

  $(".conWrap > a").click(function () {
    if (e == false) {
      clearInterval(interval);
      $(".conWrap > a").removeClass("stop");
      $(".conWrap > a").addClass("start");
      e = true;
    } else if (e == true) {
      noticeinter();
      $(".conWrap > a").removeClass("start");
      $(".conWrap > a").addClass("stop");
      e = false;
    }
    console.log(e);
  });

  $(next).click(function () {
    if (count <= 6) {
      count++;
      $(ul)
        .stop()
        .animate({ top: -height * count });
      if (count == 7) {
        count = 0;
        $(ul)
          .stop()
          .animate({ top: height * count });
      }
    }
  });

  $(prev).click(function () {
    if (count >= 0) {
      count--;
      $(ul)
        .stop()
        .animate({ top: -height * count });
      if (count == -1) {
        count = 6;
        $(ul)
          .stop()
          .animate({ top: -height * count });
      }
    }
  });

  function noticeinter() {
    interval = setInterval(() => {
      $(next).trigger("click");
    }, 3000);
  }
});
