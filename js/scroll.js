$(document).ready(function () {
  let offset = $(".wrapGnb").offset().top;
  $(window).scroll(function () {
    let window = $(this).scrollTop();
    if (offset <= window) {
      $(".wrapGnb").addClass("fixed");
    } else {
      $(".wrapGnb").removeClass("fixed");
    }
  });
});
