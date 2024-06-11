// get all the holes html nodes
const holes = document.querySelectorAll(".hole");
// get all the pieces html nodes
const images = Array.from(document.querySelectorAll(".image"));

/* 
 for each piece:
 - add an event listener that ADDS the .dragging class when the drag STARTS
 - add an event listener that REMOVES the .dragging class when the drag ENDS 
*/
images.forEach((image) => {
  image.addEventListener("dragstart", () => {
    image.classList.add("dragging");
  });

  image.addEventListener("dragend", () => {
    image.classList.remove("dragging");
  });
});

holes.forEach((hole) => {
  /*
  for each hole:
  - add an event listener that ADDS the .hovered class when there is something dragging over it
  - add an event listener that REMOVES the .hovered class when the overing dragging objects is leaving
  */

  hole.addEventListener("dragover", (e) => {
    hole.classList.add("hovered");
  });

  hole.addEventListener("dragleave", () => {
    hole.classList.remove("hovered");
  });

  /* 
  - add an event listener for when a dragging element is dropped on it:
  */
  hole.addEventListener("drop", (e) => {
    // get the ID of the image that is being dragging
    const draggedImageId = document.querySelector(".dragging").id;
    // get the ALLOWED ID from the attribute of the hole where i am hovering on
    const acceptedPieceId = e.target.getAttribute("accepted-piece-id");

    // compare the two ids
    if (draggedImageId === acceptedPieceId) {
      // if they are the same, it means that the dragging piece has the id that is allowed in the hole

      // compose a string which is the id for the hidden piece in the hole
      const droppedPieceId = "dropped-" + draggedImageId;
      // get the hidden piece in the hole by the newly created id
      const pieceToShow = document.getElementById(droppedPieceId);
      // remove the hidden class from the piece in the hole
      pieceToShow.classList.remove("hidden");
      // add .dropped class to the piece in the hole to make it visible
      pieceToShow.classList.add("dropped");
      // remove the .dragged piece from the left sidebar
      document.getElementById(draggedImageId).style.display = "none";
      // remove the .hovered class from the hole
      hole.classList.remove("hovered");
    }
  });
});
