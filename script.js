let checkboxes = document.querySelectorAll("input");
let finito = [];

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      if (finito.length >= 2) {
        const lastBox = finito.pop();
        lastBox.checked = false;
      }
      finito.push(checkbox);
    } else {
      const index = finito.indexOf(checkbox);
      finito, splice(index, 1);
    }
  });
}
