"use strict"

let toggle = document.getElementById('toggle'),
nav = document.getElementById('nav');


toggle.addEventListener('click',()=>{nav.classList.toggle('active')})