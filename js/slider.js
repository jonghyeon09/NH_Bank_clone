$(document).ready(function () {
  $("a").on("click", function (e) {
    e.preventDefault();
  });

  var slide_w = $(".slider").width();

  var click_check = false;

  start();
  //////////////////////////////////////

  $(".Next").click(function () {
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
          },
          500
        );
    }
  });

  // $(".lbt").click(function () {
  //   $(".slide_wrap ul")
  //     .filter(":not(:animate)")
  //     .animate(
  //       {
  //         left: 0,
  //       },
  //       {
  //         complete: function () {
  //           $(".slide_wrap ul").css({
  //             left: -slide_w,
  //           });
  //           $(".slide_wrap ul").prepend($(".slide_wrap ul").children()[4]);
  //         },
  //       },
  //       1000
  //     );
  // });

  // //////////////////////////////////////

  function start() {
    $(".sliderContent").css({
      left: -slide_w,
    });
    // $(".sliderContent").prepend($(".sliderContent").children()[4]);
  }
});
