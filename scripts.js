const stones = document.querySelectorAll(".stone"),
  images = Array.from(document.querySelectorAll(".image"));

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", image.id);
  });
});

stones.forEach((stone) => {
  stone.addEventListener("dragover", (e) => {
    e.preventDefault();
    stone.classList.add("hovered");
  });

  stone.addEventListener("dragleave", () => {
    stone.classList.remove("hovered");
  });

  stone.addEventListener("drop", (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedImage = images.find((image) => image.id === draggedId);
    stone.appendChild(draggedImage).removeChild(stone);
    stone.classList.remove("hovered");
  });
});
