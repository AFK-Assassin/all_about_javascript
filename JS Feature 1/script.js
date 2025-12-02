
var istatus = document.querySelector("h3")
var addFriend = document.querySelector(".add")
var flag = 0

addFriend.addEventListener("click" , function(){

    if (flag == 0){
        istatus.innerHTML = "Friends"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.backgroundColor = "grey"
        addFriend.style.color = "black"
       
        istatus.style.color = "green"
        flag = 1
    }
    else if(flag == 1){
        istatus.innerHTML = "Strangers"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "green"
        addFriend.style.color = "white"
        istatus.style.color = "red"
        flag = 0
    }


})
