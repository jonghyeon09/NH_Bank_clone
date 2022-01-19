$(document).ready(function () {
  const life = document.querySelectorAll(".life");
  const life_li = document.querySelectorAll(".life li");
  const lifeContent = document.querySelectorAll(".lifeContent");
  let idx = $(this).index();

  $(life_li).mouseenter(function () {});
});

function addStyle(idx) {
  $(life_li).removeClass("on");
  $(life_li[idx]).addClass("on");
}

function showContent(params) {
  $(lifeContent).css("display", "block");
}
