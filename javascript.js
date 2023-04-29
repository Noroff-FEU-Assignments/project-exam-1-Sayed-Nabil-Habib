const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".card-slider-next");
const prevBtn = document.querySelector(".card-slider-prev");

nextBtn.addEventListener("click", () => {
  slider.scroll({
    left:slider.scrollLeft + 340,
    behavior:"smooth"
  })
});

prevBtn.addEventListener("click", () => {
  slider.scroll({
    left:slider.scrollLeft - 340,
    behavior:"smooth"
  })


});
console.log(works)