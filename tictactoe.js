let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let result=document.querySelector("p");
let newgame=document.querySelector(".newgame");
newgame.classList.add("hide")
let turn0 = true;
const winpattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0===true){
           box.style.backgroundColor="yellow";
           box.innerText="O";
        turn0=false;}
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}


const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText; 

        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
              result.innerText=`congartulations,The winner is ${pos1}`;
            newgame.classList.remove("hide");
            reset.classList.add("newreset");

            alert(`Winner is ${pos1} Play Again`)
            disabledboxes();
            }

        };
       };
};