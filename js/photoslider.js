let items = document.querySelectorAll(".itc-slider__item");

document.addEventListener('DOMContentLoaded', () => {
  const slider = ItcSlider.getOrCreateInstance('.itc-slider');
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach((el) => {
    ItcSlider.getOrCreateInstance(el);
  });
});

this.#state.elListItem.forEach((el, index) => {
  this.#state.els.push({ el, index, order: index, translate: 0 });
});
