var acc = document.getElementsByClassName("acc");
var j;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function() {
    console.log('s')
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}