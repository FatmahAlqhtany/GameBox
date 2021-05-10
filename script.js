
let color = document.getElementsByClassName("blue");
let count = 0;
let cRed =0;
for(let i = 0; i<color.length;i++){
    let random = Math.floor(Math.random() * 12);

color.item(i).onclick = function(e){
                    if(color.item(i).style.backgroundColor = "#006400")
                    count++;
                    
                    if(count > random){
                        if(color.item(i).style.backgroundColor = "#8B0000"){
                  
                        
                        cRed++;
                        if(cRed>2){
                            alert("Bomb You lost ");
                        }
                        }                   
                    }
                   
                }
            }
        
        
