document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".photo-container img").forEach((element) => {
    let parent = element.parentElement;
    let temp = document.getElementById("photoInsert");

    element.addEventListener("click", () => {
      temp.append(element);
      element.classList.add("photoInsertImg");
      temp.classList.add("photoInsertBlurred");
      temp.addEventListener("click", () => {
        element.classList.remove("photoInsertImg");
        temp.classList.remove("photoInsertBlurred");
        parent.append(element);
      });
    });
  });
});
