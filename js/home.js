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