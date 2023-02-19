"use strict";
const menu=document.querySelector('.menu'),
      menuLink=document.querySelectorAll('.list-link'),
      burger=document.querySelector('.burger__span'),
      navigation=document.querySelector('.nav'),
      body=document.querySelector('body');

menu.addEventListener('click',(e)=>{
      const target=e.target;
     menuLink.forEach((link)=>{
      if(target==link){
      }
     });
      if(document.documentElement.clientWidth<=1000){
         if(target==burger){
            burger.classList.toggle('active');
            navigation.classList.toggle('active');
            body.classList.toggle('body-lock');

         }
      }
});