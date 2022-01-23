const hamBt = document.getElementsByClassName("gnbH");
const close = document.getElementsByClassName("close");
const allMenu = document.getElementsByClassName("wrap_allMenu");
const dark = document.getElementsByClassName("back");
$(document).ready(function () {
  $(allMenu).hide();
  $(dark).hide();
  $(hamBt).click(function () {
    $(allMenu).show();
    $(dark).show();
    $("body").css("overflow", "hidden");
  });
  $(close).click(function () {
    $(allMenu).hide();
    $(dark).hide();
    $("body").css("overflow", "auto");
  });
  $(".gnbAll").click(function () {
    $(allMenu).show();
    $(dark).show();
    $("body").css("overflow", "hidden");
  });
});
