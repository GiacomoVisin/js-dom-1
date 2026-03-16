const lamp = document.getElementById("lamp")
console.log(lamp);

const btn = document.getElementById("btn")
console.log(btn);




function turnOnAndOff(){
    if(lamp.src.includes("white_lamp")){
       lamp.src = "img/yellow_lamp.png" 
       button.textContent= "spegni"
    }
    else{
         lamp.src = "img/white_lamp.png" 
       button.textContent= "accendi"
    } 

}












