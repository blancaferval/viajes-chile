$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  
$(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 550 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
  });

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
var enviar = $("#enviar");
enviar.click(function (){
    alert("El mensaje fue enviado correctamente");
});
