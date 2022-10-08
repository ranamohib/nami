

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach( el => observer.observe(el))

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})



function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  let i = 0;
  const cards = document.querySelectorAll(".card");
  const next = document.querySelector(".btn-next");
  const prev = document.querySelector(".btn-prev");
  next.addEventListener("click", function () {
      i++;
      if(i>4)i=0;
      cards.forEach((card, indx) => {
     card.style.transform = `translateX(${100 * (-i)}%)`;
   });
 });
 prev.addEventListener("click", function () {
      i--;
      if(i<0)i=4;
      cards.forEach((card, indx) => {
      card.style.transform = `translateX(${100 * (-i)}%)`;
  });

});

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

  document.querySelector("#default1").click()
