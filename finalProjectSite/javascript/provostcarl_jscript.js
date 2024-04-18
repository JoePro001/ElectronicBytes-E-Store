
/*
      This is my final project website for Web Desigh Tools (63982) class at ACC, 
       summer 2023 semester. Tought by Professer Manuel Duran. My website is a 
       ecommerce site that sells electronic equipment.

       ElectronicBytes Home Page
       Auther: Carl Provost
       Date: 6/29/2023 

       Filename: provostcarl_index.html
*/

/* Hamburger and X buttons opening and closeing nav links */
let hamButton = document.getElementById("ham")
let closeButton = document.getElementById("close")
let navList = document.querySelector("nav > ul")
hamButton.addEventListener("click", function () {
    navList.style.display = "flex"
    hamButton.style.display = "none"
    closeButton.style.display = "block"
})
closeButton.addEventListener("click", function () {
    navList.style.display = "none"
    hamButton.style.display = "block"
    closeButton.style.display = "none"
})

