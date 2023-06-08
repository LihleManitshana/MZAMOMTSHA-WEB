"use strict";
const openform = document.querySelector('.modal');

const btn$ = document.querySelector('.btnmiddle');
const outside = document.querySelector('.outside');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.btn--arrow')

const btnclick = function (){
    btn$.classList.add('hidden');
    openform.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    
}
btn$.addEventListener('click', btnclick);

const btnclick1 = function (){
    btn$.classList.remove('hidden');
    openform.classList.add('hidden');
<<<<<<< HEAD
    overlay.classList.add('hidden');

    
    
}
closebtn.addEventListener('click', btnclick1);
=======
    overlay.classList.add('hidden'); 
}
closebtn.addEventListener('click', btnclick1);
>>>>>>> e30bb6d791d5ce90b40568cbf414e048e482b093
