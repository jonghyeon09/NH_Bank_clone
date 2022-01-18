$(document).ready(function () {
  // 새로고침 막기
  $("a").on("click", function (e) {
    e.preventDefault();
  });

  const slide_w = $(".slider").width();
  const pager_item = document.querySelectorAll(".pager_item");
  let count = 0;
  let click_check = false;
  let item_i;
  let interval;
  let e = false;

  //다음버튼
  $(".sliderContent").css({ left: -slide_w });
  $(".Next").click(function () {
    if (count <= 3 && click_check == false) {
      if (count == 3) {
        count = 0;
      } else {
        count++;
      }
      sliderCounter(count);
      pagerColor(count);
    }
    if (click_check == false) {
      click_check = true;
      $(".sliderContent")
        .stop()
        .animate(
          { left: -slide_w * 2 },
          {
            complete: function () {
              $(".sliderContent").css({ left: -slide_w });
              $(".sliderContent").append($(".sliderContent").children()[0]);
              click_check = false;
            },
          }
        );
    }
    console.log(count);
  });
  // 이전버튼
  $(".Prev").click(function () {
    if (count >= 0 && click_check == false) {
      if (count == 0) {
        count = 4;
      }
      count--;
      sliderCounter(count);
      pagerColor(count);
    }
    if (click_check == false) {
      click_check = true;
      $(".sliderContent")
        .stop()
        .animate(
          { left: 0 },
          {
            complete: function () {
              $(".sliderContent").css({ left: -slide_w });
              $(".sliderContent").prepend($(".sliderContent").children()[3]);
              click_check = false;
            },
          }
        );
    }
  });

  function Prev() {
    $(".sliderContent").stop().animate();
  }
  // 페이저 클릭
  $(pager_item).click(function () {
    item_i = $(this).index();
    let page_count = item_i - count;
    clearInterval(interval);
    if (page_count < 0) {
      console.log("왼" + Math.abs(page_count));
    } else {
      console.log("우" + page_count);
    }

    //pagerColor(item_i);
    // slider_ani(item_i);
  });

  // 자동재생
  $(".autoBt").click(function () {
    clearInterval(interval);
    if (e == false) {
      e = true;
      $(".autoBt a").removeClass("stop");
      $(".autoBt a").addClass("start");
    } else if (e == true) {
      e = false;
      sliderInInterval();
      $(".autoBt a").removeClass("start");
      $(".autoBt a").addClass("stop");
    }
    console.log(e);
  });

  sliderInInterval();
  function sliderInInterval() {
    interval = setInterval(function () {
      $(".Next").trigger("click");
    }, 3000);
  }

  function sliderCounter(count) {
    $("#counter").html(count + 1);
  }

  function pagerColor(i) {
    $(pager_item).children("a").removeClass("active");
    $(pager_item[i]).children("a").addClass("active");
  }

  $(pager_item[0]).children("a").addClass("active");

  // function slider_ani(i) {
  //   if (i == 0) {
  //     $(".sliderContent")
  //       .stop()
  //       .animate({ left: -slide_w * i }, 300);
  //     pagerColor(i);
  //   } else if (i == 1) {
  //     $(".sliderContent")
  //       .stop()
  //       .animate({ left: -slide_w * i }, 300);
  //     pagerColor(i);
  //   } else if (i == 2) {
  //     $(".sliderContent")
  //       .stop()
  //       .animate({ left: -slide_w * i }, 300);
  //     pagerColor(i);
  //   } else if (i == 3) {
  //     $(".sliderContent")
  //       .stop()
  //       .animate({ left: -slide_w * i }, 300);
  //     pagerColor(i);
  //   }
  // }
});
