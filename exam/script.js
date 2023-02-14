let yourhealth = 100;
let monsterhealth = 100;

let attack= function(){
   let random1 = 5+(Math.random()*(15-5));
   monsterhealth -= random1 ;
}

let specialattack = () =>{
    if(yourhealth<monsterhealth*0.2){
        yourhealth -=5;
        monsterhealth-=20;
    }
}
counter=0
let healfunction=function(){
if(counter<3){
    random3=5+(math.random()*(15-5))
}else{
    console.log("player can not heal more than 3 times")
}
if(yourhealth>=100){
    yourhealth=100;
}
counter++;
}

let giveup=()=>{
    yourhealth=0;
    console.log("the monster ein :/")
}

let startnewgame = () =>{
    yourhealth=100;
    monsterhealth=100;
}


