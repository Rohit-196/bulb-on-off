let bulb = document.querySelector("#bulb")
let btn = document.querySelector("#btn")
let count = "off"

btn.addEventListener("click", function(){
    if(count == "off"){
        bulb.style.color = "yellow"
        btn.innerHTML = "OFF"
        count = "on"
    }else{
        bulb.style.color = "white"
        btn.innerHTML = "ON"
        count = "off"
    }
})