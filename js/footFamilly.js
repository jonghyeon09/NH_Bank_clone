$(document).ready(function () {
  let e = false;
  $(".l_site").click(function () {
    $(".r_site ul").css("display", "none");
    $(".r_site a").removeClass("active");
    if (e == false) {
      $(".l_site ul").css("display", "block");
      $(".l_site a").addClass("active");
      e = true;
    } else if (e == true) {
      $(".l_site ul").css("display", "none");
      $(".l_site a").removeClass("active");
      e = false;
    }
  });
  $(".r_site").click(function () {
    $(".l_site ul").css("display", "none");
    $(".l_site a").removeClass("active");
    if (e == false) {
      $(".r_site ul").css("display", "block");
      $(".r_site a").addClass("active");
      e = true;
    } else if (e == true) {
      $(".r_site ul").css("display", "none");
      $(".r_site a").removeClass("active");
      e = false;
    }
  });
});
