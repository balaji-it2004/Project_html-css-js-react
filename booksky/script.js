//first selecting elements

const popupoverlay=document.querySelector(".popup-overlay")
const popupbox=document.querySelector(".popupbox")

const btn=document.getElementById("popup-button")

btn.addEventListener("click",function(){

popupoverlay.style.display="block"
popupbox.style.display="block"



})

const cancelbutton=document.getElementById("cancel")
 

cancelbutton.addEventListener("click",function(event){
event.preventDefault();
popupoverlay.style.display="none"
popupbox.style.display="none"
})

const container=document.querySelector(".container")
const addbook=document.getElementById("add-book")
const booktitle=document.getElementById("book-tittle-input")
const author=document.getElementById("book-author-input")
const discription=document.getElementById("book-descrip-input")


addbook.addEventListener("click",function(event){
event.preventDefault();
const div=document.createElement("div")
div.setAttribute("class","book-container");
div.innerHTML=`<h2>${booktitle.value}</h2>
<h4>${author.value}</h4>
     <p>${discription.value}</p>
     <button onclick=change(event)>close</button>`
container.append(div)
popupoverlay.style.display="none"
popupbox.style.display="none"
booktitle.value=""
author.value=""
discription.value=""


})

function change(event){

   event.srcElement.parentElement.remove()
}