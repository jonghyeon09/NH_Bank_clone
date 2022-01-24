$(document).ready(function () {
  let top = parseInt($(".wrapQuick").css("top"));
  $(window).scroll(function () {
    let position = $(window).scrollTop();
    $(".wrapQuick")
      .stop()
      .animate({ top: position + top + "px" }, 300);
  });
  $(".wrapQuick .top").click(function () {
    let position = $(window).scrollTop();
    $(window).animate({ position: 0 }, 500);
    console.log(position);
  });

  $(".wrapQuick .top").click(function () {
    $("html").animate({ scrollTop: 0 }, 300);
  });
});
