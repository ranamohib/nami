

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
  const slides = document.querySelectorAll(".slide");
  const dot1 = document.querySelector(".dot-1");
  const dot2 = document.querySelector(".dot-2");
  const dot3 = document.querySelector(".dot-3");

  var intervalId = window.setInterval(function(){
    if(i>2){
        i=0
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (-i)}%)`;
      });
    i++
  }, 4000);

  dot1.addEventListener("click", function () {
      i=0;

      slides.forEach((slide, indx) => {
     slide.style.transform = `translateX(${100 * (-i)}%)`;
   });
 });
 dot2.addEventListener("click", function () {
      i=1;
      if(i<0)i=4;
      slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (-i)}%)`;
  });
});
dot3.addEventListener("click", function () {
    i=2;
    if(i<0)i=4;
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (-i)}%)`;
});
});



  document.querySelector("#default").click()
