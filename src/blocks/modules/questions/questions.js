/* eslint-disable quotes */
const accordionBtn = document.querySelectorAll(".accordion-button");

accordionBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let parent = item.closest(".accordion-item");
    parent.classList.toggle("active");
  });
});


