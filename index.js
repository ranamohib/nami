var textsToChange;
var lan;
$(document).ready(function(){



$(".se").click(function(e){
  e.preventDefault();
 let text =  document.getElementsByClassName("text")
for(const t of text){
  t.classList.toggle('scale');
}



  textsToChange = document.querySelectorAll('[data-section]');

  if($(".se").hasClass('en')){
    $(".se").removeClass('en');
    $(".se").addClass('ar');
    lan = 'ar'; 
    document.getElementById("txtName").placeholder = "اسم";
    document.getElementById("txtLast").placeholder = "الكنية";
    document.getElementById("txtMail").placeholder = "البريد الإلكتروني";
    document.getElementById("txtCompany").placeholder = "اسم الشركة";
    
    changeLanguage();

  }else{
    $(".se").removeClass('ar');
    $(".se").addClass('en');
   // $(".text").addClass('scale');
    lan = 'en';
    document.querySelectorAll('.text').classList += 'fadeOut';
    document.getElementById("txtName").placeholder = "Name";
    document.getElementById("txtLast").placeholder = "Last Name";
    document.getElementById("txtMail").placeholder = "Email";
    document.getElementById("txtCompany").placeholder = "company Name";

    changeLanguage();

  }
});

  
document.getElementById('loader').classList.toggle('loader2');

$(window).scroll(function () { 
let scroll = $(window).scrollTop();    

if(scroll <= 599){
    $("#header").removeClass("transparent");
    $("#header").addClass("white");
    $(".navigation a").removeClass("transparent");
    $(".logo").css("color","#310D7D");
    
  //  document.getElementByClass(".se").style.borderColor = "#310D7D";
}

if(scroll >= 600){
    $("#header").removeClass("white");
    $("#header").addClass("transparent");
    $(".group a").addClass("transparent");
    $(".logo").css("color","white");
    //document.getElementByClass(".se").style.borderColor = "white";
    $("#right").removeClass("fadeIn");
    $("#left").removeClass("up");
    //$("#contentCard").removeClass("up");
    //$("#contentCard").addClass("fadeIn");
    $("#contentCard").css('display','flex');
}

//console.log(scroll);

if(scroll >= 1500){
    $("#header").removeClass("transparent");
    $("#header").addClass("white");
    $(".navigation a").removeClass("transparent");
    $(".logo").css("color","#310D7D");
    $("#right").addClass("fadeIn");
    $("#left").addClass("up");
    //$("#contentCard").addClass("up");
    $("#contentCard").addClass("fadeIn");   
    
}

});

});


let text2 =  document.getElementsByClassName("text")
let timeIdentifier;

function repeat() {
  timeIdentifier = setInterval(respaw, 2000);
}

function respaw(){
for(const t of text2){
  t.classList.toggle('scale');
  t.classList.remove('scale');
}
}


const changeLanguage = async language =>{
  const requestJson = await fetch("../json/"+ lan +".json");
  const text = await requestJson.json();   


  for(const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value;
    textToChange.innerHTML = text[section][value];
  }
  repeat();
  } 


 