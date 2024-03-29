(function(){
  
    var listEl = document.querySelector('.home-grid.products-grid.products-grid--max-4');
  var btnLeftEl = document.querySelector('#left-btn');
  var btnRightEl = document.querySelector('#right-btn');
  var count = 0;

  function slideImages(dir){
    var totalChildren = listEl.querySelectorAll(".item").length;
    dir === "left" ? ++count : --count;
    listEl.style.left = count * 286 + 'px';
    btnLeftEl.style.display = count < 0 ? "block" : "none";
    // Here, 4 is the number displayed at any given time
    btnRightEl.style.display = count > 4-totalChildren ? "block" : "none";
  }

  btnLeftEl.addEventListener("click", function(e) {
      slideImages("left");
  });
  btnRightEl.addEventListener("click", function(e) {
      slideImages("right");
  });

  
})();