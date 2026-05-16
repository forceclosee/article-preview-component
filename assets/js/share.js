const shareButton = document.querySelector(".share-button");
const tooltip = document.querySelector("#share-tooltip");
const elementsToInert = document.querySelectorAll(
  ".article-image, .article-title, .content, .article-meta, .attribution",
);

// when user click share button
shareButton.addEventListener("click", function (e) {
  const isTooltipHidden = tooltip.getAttribute("aria-hidden") === "true";
  // show the tooltip
  tooltip.setAttribute("aria-hidden", !isTooltipHidden);
  // prevent event bubbling (avoid trigger double event listener and activate the document event listener that will cause the tooltip won't show)
  e.stopPropagation();

  // change button background color and icon fill
  shareButton.classList.toggle("bgcolor-fill");

  // if tooltip is hidden add inert attribute to all elements
  if (isTooltipHidden) {
    elementsToInert.forEach((el) => el.setAttribute("inert", ""));
    // if tooltip is not hidden remove inert attribute from all elements
  } else {
    elementsToInert.forEach((el) => el.removeAttribute("inert"));
  }
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
