function changColor() {
  const box1 = document.querySelector(".box1");
  const color = [
    "lightblue",
    "red",
    "green",
    "lightgoldenrodyellow",
    "lightpink",
  ];

  let currentColor = parseInt(box1.getAttribute("data-color-index")) || 0;

  currentColor = (currentColor + 1) % color.length;
  box1.style.backgroundColor = color[currentColor];
  box1.setAttribute("data-color-index", currentColor);


}
