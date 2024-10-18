const first=document.querySelectorAll('.counter h1')[0];
const second=document.querySelectorAll('.counter h1')[1];

const  third =document.querySelectorAll('.counter h1')[2];
const  fouth =document.querySelectorAll('.counter h1')[3];
const counter_container=document.querySelector('.impact_container')

first.style.background='red';
let i=0;
let hovered=true;
counter_container.addEventListener('mouseover',function(){
    if (!hovered){
    hovered=true;
}
setInterval(() => {
if(i<=2){
    first.innerHTML=i;
    i++;
}
}, 100);
setInterval(() => {
if(i<=70){
    second.innerHTML=i ;
    i++;
}
}, 100);
setInterval(() => {
if(i<=18){
    third.innerHTML=i;
    i++;
}
}, 300);
setInterval(() => {
if(i<=70){
    fouth.innerHTML=i;
    i++;
}
}, 300);
});







//nav links underlining red 
$(document).ready(function() {
  $('.nav-link').click(function() {
    $('.nav-link').removeClass('active'); // Remove active class from all links
    $(this).addClass('active'); // Add active class to clicked link
  });
});







document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

//


//forms at the partnership page



//progress bar
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  const maxLength = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollDistance / maxLength) * 100;
  
  progressBar.style.width = `${progress}%`;
});