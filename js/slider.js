$(document).ready(function () {
  // 새로고침 막기
  $("a").on("click", function (e) {
    e.preventDefault();
  });

  const slide_w = $(".slider").width();
  let count = 0;
  var pager_item = document.querySelectorAll('.pager_item');
  var item_i;

  $(".Next").click(function () {
    if (count < 3) {
      count++;
      slider_ani(count);
      sliderCounter(count);
    }
  });

  $(".Prev").click(function () {
    if (count > 0) {
      count--;
      slider_ani(count);
      sliderCounter(count);
    }
  });

  $(".pager_item").click(function () {
    item_i = $(this).index();
    pagerColor(item_i);
    slider_ani(item_i);
  });

  $(".autoBt").click(function () {
    $(".autoBt a").removeClass("start");
    $(".autoBt a").addClass("stop");
  });

  function sliderCounter(count) {
    $("#counter").html(count+1);
  }

  function pagerColor(i) {
    $(pager_item).children('a').removeClass("active");
    $(pager_item[i]).children('a').addClass("active");
  };

  $(pager_item[0]).children('a').addClass("active");
  function slider_ani(i) {
    if (i == 0) {
      $('.sliderContent').stop().animate({left:-slide_w * 0}, 300);
      pagerColor(i);
    }else if (i == 1) {
      $('.sliderContent').stop().animate({left:-slide_w * 1}, 300);
      pagerColor(i);
    }else if (i == 2) {
      $('.sliderContent').stop().animate({left:-slide_w * 2}, 300);
      pagerColor(i);
    }else if (i == 3) {
      $('.sliderContent').stop().animate({left:-slide_w * 3}, 300);
      pagerColor(i);
    }
  }

});
