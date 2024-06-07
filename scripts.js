const stones = document.querySelectorAll(".stone"),
  images = document.querySelectorAll(".image");

const pieces = document.querySelectorAll(".box-stone");

pieces.forEach((piece) => {
  piece.addEventListener("drag", (event) => {
    // console.log("dragging", event.target);
  });

  piece.addEventListener("drop", (event) => {
    console.log("drop", event.target);
  });
});
/* 
stones.forEach((stone) => {
  stone.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log(e);
  });
});
 */
/* stones.forEach((stone) => {
  stone.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log(e);
    stone.classList.add("hovered");
  });

  stone.addEventListener("dragleave", () => {
    stone.classList.remove("hovered");
  });

  stone.addEventListener("drop", () => {
    // stone.appendChild(image);
  });
});
 */
