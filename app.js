//create a function

let damage = 0;




function boxMaker(mess,damage){
    let ele=document.createElement("div")
    let dragonHealthEle = document.createElement("h1")
    dragonHealthEle.innerHTML=mess+damage
    ele.appendChild(dragonHealthEle)
    document.body.appendChild(ele)
}





let fireButton = document.createElement("button")
    fireButton.innerHTML = "Fire Attack "
fireButton.addEventListener("click", function () {

    damage=damage+2
    boxMaker("Dragon Damage ", damage)
    if (damage>9){
        end("Congrats you slayed the dragon")
    }
})

let iceButton = document.createElement("button")
iceButton.innerHTML = "Ice Attack "
    iceButton.addEventListener("click", function () {
        damage = damage + 2
        boxMaker("Dragon Damage ", damage)
        if (damage>9){
            end("Congrats you slayed the dragon")
        }
    })
let poiButton = document.createElement("button")
poiButton.innerHTML = "Poison Attack "
        poiButton.addEventListener("click", function () {
            damage = damage + 4
            boxMaker("Dragon Damage ", damage)
            if (damage>9){
               end("Congrats you slayed the dragon")
            }
        })

function end(mess){
    let ele=document.createElement("div")
    let endEle = document.createElement("h1")
    endEle.innerHTML=mess
    ele.appendChild(endEle)
    document.body.appendChild(ele)
    
}


document.body.appendChild(fireButton);
document.body.appendChild(iceButton);
document.body.appendChild(poiButton);

boxMaker("Dragon Damage ", damage)
