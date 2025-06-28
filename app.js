function changeColor() {
  console.log("Function called!");

  const box1 = document.querySelector(".box1");

  if (!box1) {
    console.error("Box1 element not found");
    return;
  }

  const colors = [
    "#202020", // Original dark gray
    "#0f172a", // Midnight navy (sleek & modern)
    "#1e1b4b", // Deep indigo (mysterious & elegant)
    "#581c87", // Royal purple (luxurious & creative)
    "#7c2d12", // Rich chocolate (warm & sophisticated)
    "#166534", // Forest emerald (fresh & natural)
    "#991b1b", // Deep crimson (bold & passionate)
    "#1f2937", // Charcoal slate (clean & professional)
    "#312e81", // Electric indigo (vibrant & modern)
    "#0c4a6e", // Ocean depths (calming & trustworthy)
  ];

  let currentColor = parseInt(box1.getAttribute("data-color-index")) || 0;
  currentColor = (currentColor + 1) % colors.length;

  box1.style.backgroundColor = colors[currentColor];
  box1.setAttribute("data-color-index", currentColor);

  console.log(`Color changed to: ${colors[currentColor]}`);
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, script ready!");
  window.changeColor = changeColor;
});

console.log("Script file loaded!");
