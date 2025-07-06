let boxes = Array.from(document.getElementsByClassName("box"));
let resetbtn = document.getElementById("reset");
let newgame = document.getElementById("new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = ()=>{
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");


}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;


        checkwinner();
    });
});

const disablebtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showwinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
    
    // Trigger celebration effect
    startCelebration();

    msgcontainer.style.animation = "none";
    setTimeout(() => {
        msgcontainer.style.animation = ""; // Re-trigger animation
    }, 10);
};

// Function to create and animate confetti/flowers
const startCelebration = () => {
    const celebrationContainer = document.querySelector(".celebration-container");
    celebrationContainer.classList.remove("hide");

    // Generate multiple confetti elements
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Randomize position and animation delay
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color

        // Add confetti to container
        celebrationContainer.appendChild(confetti);
    }

    // Optional: Clear confetti after some time
    setTimeout(() => {
        celebrationContainer.innerHTML = ""; // Clear all confetti
        celebrationContainer.classList.add("hide");
    }, 4000); // Adjust duration as needed
};


const checkwinner = () =>{
    for( let pattern of win){
        
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val === pos3val){
               
                showwinner(pos1val);
            }
        }
    }
}

newgame.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);

 // Select the diamond cursor element
 const diamondCursor = document.getElementById("diamond-cursor");

 // Update cursor position based on mouse movement
 document.addEventListener("mousemove", (e) => {
     diamondCursor.style.left = `${e.pageX}px`;
     diamondCursor.style.top = `${e.pageY}px`;
 });