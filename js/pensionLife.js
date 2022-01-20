$(document).ready(function () {
  const life_li = document.querySelectorAll(".life > li");
  const life_li_a = document.querySelectorAll(".life > li > a");
  const lifeContent = document.querySelectorAll(".lifeContent > ul");
  let count = 0;

  interval = setInterval(() => {
    if (count == 0) {
      $(".life1>a").trigger("click");
      count++;
    } else if (count == 1) {
      $(".life2>a").trigger("click");
      count++;
    } else if (count == 2) {
      $(".life3>a").trigger("click");
      count++;
    } else if (count == 3) {
      $(".life4>a").trigger("click");
      count = 0;
    }
    console.log(count);
  }, 3000);

  $(life_li).focus().click(function (e) { 
    e.preventDefault();
  });
  
  $(life_li).click(function () {
    idx = $(this).index();
    showContent(idx);
    removeStyle();
    addStyle(idx);
    $(life_li_a).removeClass("on");
    $(life_li_a[idx]).addClass("on");
  });
  
  $(life_li).mouseenter(function () {
    idx = $(this).index();
    showContent(idx);
    clearInterval(interval);
    addStyle(idx);
    $(life_li_a).removeClass("on");
  });

  $(life_li).mouseleave(function () { 
    removeStyle();
    interval = setInterval(() => {
      if (count == 0) {
        $(".life1>a").trigger("click");
        count++;
      } else if (count == 1) {
        $(".life2>a").trigger("click");
        count++;
      } else if (count == 2) {
        $(".life3>a").trigger("click");
        count++;
      } else if (count == 3) {
        $(".life4>a").trigger("click");
        count = 0;
      }
      console.log(count);
    }, 3000);
  });
  
  $(lifeContent).hide();

  start();

  function start() {
    $(life_li[0]).click();
    $(life_li_a[0]).addClass("on");
  }

  function showContent(idx) {
    $(lifeContent).css("display", "none");
    $(lifeContent[idx]).css("display", "flex");
  }

  function addStyle(idx) {
    $(life_li_a[idx]).css({
      "margin-top": "20px",
      "box-shadow": "0px 0px 7px 4px rgb(0 0 0 / 9%)",
      "transition": "0.3s",
      "color": "white",
      "background-color": "#3e94e9",
    });
  }

  function removeStyle() {
    $(life_li_a).css({
      "margin-top": "-20px",
      "box-shadow": "none",
      "transition": "none",
      "color": "black",
      "background-color": "white",
    });
  }
});
