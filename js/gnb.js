$(document).ready(function() {

});
const gnbBt = document.querySelectorAll(".gnbBt > a");
const wrapInner = document.querySelectorAll('.wrapInner');

function styleAdd(i) {
  gnbBt[i].classList.add("over");
  wrapInner[i].style.display = "block";
};

function styleRemove(i) {
  gnbBt[i].classList.remove("over");
  wrapInner[i].style.display = "none";
}

// function mouseEvent(i) {
//   gnbBt[i].addEventListener("mouseenter", styleAdd);
//   gnbBt[i].addEventListener('mouseleave', styleRemove);
//   wrapInner[i].addEventListener("mouseenter", styleAdd);
//   wrapInner[i].addEventListener('mouseleave', styleRemove);
// }

mouseEvent();

function mouseEvent() {
  function mouseenter(idx) {
    gnbBt[idx].addEventListener("mouseenter", styleAdd);
    wrapInner[idx].addEventListener("mouseenter", styleAdd);
  };
  function mouseleave(idx) {
    gnbBt[idx].addEventListener('mouseleave', styleRemove);
    wrapInner[idx].addEventListener('mouseleave', styleRemove);
  }
  for (var i = 0; i < gnbBt.length; i++) {
    mouseenter(i);
    mouseleave(i);
  }

}
