const shareButton = document.querySelector(".share-button");
const tooltip = document.querySelector("#share-tooltip");
const elementsToInert = document.querySelectorAll(
  ".article-image, .article-title, .content, .article-meta, .attribution",
);

// when user click share button
shareButton.addEventListener("click", function (e) {
  const isTooltipHidden = tooltip.getAttribute("aria-hidden") === "true";

  // toggle the tooltip state
  tooltip.setAttribute("aria-hidden", !isTooltipHidden);
  // prevent the global document event listener (which closes the tooltip) from triggering simultaneously
  e.stopPropagation();

  // toggle button background color and icon fill based on the tooltip state
  shareButton.classList.toggle("bgcolor-fill");

  // toggle inert attribute on all elements based on the tooltip state
  elementsToInert.forEach((el) => el.toggleAttribute("inert", isTooltipHidden));
});

// when user click anywhere on the page
document.addEventListener("click", function () {
  // hide the tooltip
  tooltip.setAttribute("aria-hidden", "true");

  // change button background color and icon fill to normal
  shareButton.classList.remove("bgcolor-fill");

  // remove inert attribute from all elements
  elementsToInert.forEach((el) => el.removeAttribute("inert"));
});
