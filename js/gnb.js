// $(document).ready(function () {});
const gnbBt = document.querySelectorAll(".gnbBt");
const gnbBta = document.querySelectorAll(".gnbBt > a");
const wrapInner = document.querySelectorAll(".wrapInner");

function styleAdd(event) {
  target = event.currentTarget;
  parentEl = target.parentElement;
  childEl = parentEl.children;
  idx = Array.from(childEl).indexOf(target);
  gnbBta[idx].classList.add("over");
  wrapInner[idx].style.display = "block";
}
function styleRemove(event) {
  target = event.currentTarget;
  parentEl = target.parentElement;
  childEl = parentEl.children;
  idx = Array.from(childEl).indexOf(target);
  gnbBta[idx].classList.remove("over");
  wrapInner[idx].style.display = "none";
}

gnbBt.forEach((el) => {
  el.addEventListener("mouseenter", styleAdd);
  el.addEventListener("mouseleave", styleRemove);
});
