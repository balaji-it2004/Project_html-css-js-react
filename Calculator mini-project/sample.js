const initGame=()=>{

    const startgame= confirm ("shall we play rock,paper or scissor" )
     startgame?playgame():alert ("ok maybe next time")
}

//playgame sccess the code

const playgame=()=>{
 while(true){
let playerchoice= getplayerchoice();

playerchoice=formatplayerchoice(playerchoice)
if(playerchoice===""){
    invalidchoice();
    continue
}
if(!playerchoice){
 decidenottoplay();
 break;
}

playerchoice=evaluateplayerchoice(playerchoice)
if(!playerchoice){
invalidchoice();
continue;

} 
const computerchoice=getcomputerchoice()

const result=determinewinner(playerchoice,computerchoice);
displayresult(result)

if(asktoplayagain()){
    continue;
}else{
    thanksforplaying();
    break;
}

}


};

const getplayerchoice=()=>{
return prompt("please enter rock,paper,scissor");

};

const formatplayerchoice=(playerchoice)=>{
if(playerchoice || playerchoice===""){
return playerchoice.trim().toLowerCase();

}else{
    return false;
}

};


const decidenottoplay=()=>{
alert("i guess you changed your mind,maybe next time")

};


const evaluateplayerchoice=(playerchoice)=>{
if(playerchoice==="rock"||playerchoice==="paper"||playerchoice==="scissor"){
return playerchoice;

}else{
    return false
}

};

const invalidchoice=()=>{
alert("you didn't enter rock,paper,scissor")
};

const getcomputerchoice=()=>{
    const randomnumber=Math.floor(Math.random()*3);
    const rpsarray=["rock","paper","scissor"];
    return rpsarray[randomnumber]
};

const determinewinner=(player,computer)=>{
   let winner= player===computer?
"tie game": player==="rock"&&computer==="paper"?
 `playerone:${player}\ncomputer:${computer}\ncomputer win`:
player==="scissor"&&computer==="rock"?
`playerone:${player}\ncomputer:${computer}\ncomputer win`:
player==="paper"&&computer==="scissor"?
`playerone:${player}\ncomputer:${computer}\ncomputer win` :
`playerone:${player}\ncomputer:${computer}\nplayer win`;

return winner

};

const displayresult=(result)=>{

    alert(result)
};

const asktoplayagain=()=>{

    return confirm("play again")
};

const thanksforplaying=()=>{
    return alert("ok,thanks for playing");
};
initGame();