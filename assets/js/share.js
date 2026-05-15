const shareButton = document.querySelector(".share-button");
const tooltip = document.querySelector("#share-tooltip");

// when user click share button
shareButton.addEventListener("click", function (e) {
  const isTooltipHidden = tooltip.getAttribute("aria-hidden") === "true";
  // show the tooltip
  tooltip.setAttribute("aria-hidden", !isTooltipHidden);
  // prevent event bubbling (avoid trigger double event listener and activate the document event listener that will cause the tooltip won't show)
  e.stopPropagation();

  // change button background color and icon fill
  shareButton.classList.toggle("click");
});

// when user click anywhere on the page
document.addEventListener("click", function () {
  // close tooltip
  tooltip.setAttribute("aria-hidden", "true");

  // change button background color and icon fill to normal
  shareButton.classList.remove("click");
});
