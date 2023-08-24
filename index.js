
console.log("welcome to tic tac toc");

let music=new Audio('2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3');
let press=new Audio('Long Press Key.mp3');
let gameover=new Audio('videogame-death-sound-43894.mp3');

 document.addEventListener('mouseover',function(){
            music.play();
  })

let turn="X";
let game=false;

const changeTurn=()=>{
    return turn==="X"?"0":"X";

}
//function to chech for a win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let win=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],


]
win.forEach(e=>{
if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText===boxtext[e[0]].innerText)&&(boxtext[e[0]].innerText!=="")){
    document.querySelector('.info').innerText=boxtext[e[0]].innerText   +"Won";
    game=true;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="200px";
    document.querySelector('.line').style.width="20vw";
    document.querySelector('.line').style.transform=`translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
gameover.play();
}

})
}

let boxes=document.getElementsByClassName('box');

Array.from(boxes).forEach(element=>{
let boxtext=element.querySelector('.boxtext');
element.addEventListener('click',function(){
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
    turn= changeTurn();
        press.play();
        checkWin();
        if(!game){
        document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
        
        }
    }

})
});

reset.addEventListener('click',function(){
    let boxtexts=document.querySelectorAll('.boxtext');

    Array.from(boxtexts).forEach(element=>{
        element.innerHTML="";
        press.pause();
    })
    turn="X";
    game=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="0";
    document.querySelector('.line').style.width="0";
   
    
        
        
    
})

