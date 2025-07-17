 
const input=document.getElementById("two")
const ul=document.getElementById("one")

function change(){
 const listitem=document.createElement("li")
 listitem.innerHTML=input.value+"<button onclick='change1(event)'>delete</button>"
 ul.append(listitem)
 
}

function change1(event){
    event.srcElement.parentElement.remove()



}