const lamp = document.getElementById("lamp")
console.log(lamp);

const button = document.getElementById("btn")
console.log(lamp);




const btn = document.getElementById("btn")
console.log(btn);

const btnOff = document.getElementById("buttonOff")



function turnOnAndOff() {
    if (lamp.src.includes("white_lamp")) {
        lamp.src = "img/yellow_lamp.png"
        btn.textContent = "spegni"
     
    }
    else {
        lamp.src = "img/white_lamp.png"
        btn.textContent = "accendi"
    
        
    }

}




function turnOnAndOff2() {
    if (lamp.src.includes("white_lamp")) {
        lamp.src = "img/yellow_lamp.png"
        btnOff.src ="img/button-off.png"
        btn.textContent = "spegni"
     
    }
    else {
        lamp.src = "img/white_lamp.png"
          btnOff.src ="img/button-on.png"
        btn.textContent = "accendi"
    
        
    }

}

btnOff.addEventListener("click", turnOnAndOff2)
button.addEventListener("click", turnOnAndOff2)

















