$(document).ready(function() {

});
const gnbBt = document.querySelectorAll(".gnbBt > a");
const wrapInner = document.querySelectorAll('.wrapInner');
var i = 0;

function styleAdd() {
  gnbBt[i].classList.add("over");
  wrapInner[i].style.display = "block";
};

function styleRemove() {
  gnbBt[i].classList.remove("over");
  wrapInner[i].style.display = "none";
}

  gnbBt[i].addEventListener("mouseenter", styleAdd);
  gnbBt[i].addEventListener('mouseleave', styleRemove);

  [].forEach.call(gnbBt, function(el) {
    el.addEventListener('mouseenter', function() {
      console.log(getElementIndex(gnbBt, el));
    });
  });
