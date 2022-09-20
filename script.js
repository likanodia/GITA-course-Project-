$(document).ready(function(){
    $("#flip-dress").click(function(){
      $("#panel-dress").slideToggle("fast");
    });
    $("#flip-blouse").click(function(){
        $("#panel-blouse").slideToggle("fast");
    });
    $("#flip-cardigans").click(function(){
        $("#panel-cardigans").slideToggle("fast");
    });
    $("#flip-skirts").click(function(){
        $("#panel-skirts").slideToggle("fast");
    });
  });



  let burgerMeniu = document.getElementById('burger-menu')
  let navigationBar= document.getElementById('nav-block')
  let menuList = document.getElementById('ul-block')

  burgerMeniu.addEventListener('click', setBugerMenu);  

  function setBugerMenu() {
    navigationBar.classList.toggle('activeNavigation')
  }

