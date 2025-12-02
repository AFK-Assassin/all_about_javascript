
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

let flag = 0;

btn.addEventListener("click" , function(){

    if (flag == 0){

        btn.innerHTML = "off"
        bulb.style.backgroundColor = "yellow"
        console.log("bulb on")
        flag = 1
    }
    else{

        btn.innerHTML = "on"
        bulb.style.backgroundColor = "transparent"
        console.log("bulb off")
        flag = 0
    }


})