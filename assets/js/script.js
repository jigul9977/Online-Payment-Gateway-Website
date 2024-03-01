const productTitleHover = document.querySelector("#show-product-submenu");
const moreTitleHover = document.querySelector("#more-facilities");

productTitleHover.addEventListener("mouseenter", function (e) {
  const productContainer = e.target.childNodes[5];
  productContainer.style.animation = "showUp .35s 1";
  productContainer.style.display = "flex";
  productContainer.style.visibility = "visible";
});
productTitleHover.addEventListener("mouseleave", function (e) {
  const productContainer = e.target.childNodes[5];
  productContainer.style.display = "none";
  productContainer.style.visibility = "hidden";
});
moreTitleHover.addEventListener("mouseenter", function (e) {
  const productContainer = e.target.childNodes[5];
  productContainer.style.animation = "showUp .35s 1";
  productContainer.style.display = "flex";
  productContainer.style.visibility = "visible";
});
moreTitleHover.addEventListener("mouseleave", function (e) {
  const productContainer = e.target.childNodes[5];
  productContainer.style.display = "none";
  productContainer.style.visibility = "hidden";
});
