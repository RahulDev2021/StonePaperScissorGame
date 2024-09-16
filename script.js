const btnEle=document.querySelectorAll("button")

const userScoreEle=document.getElementById("user-score")
const compScoreEle=document.getElementById("comp-score")

const resultEle = document.getElementById("result")

let userScore = 0
let compScore = 0 


// for each () take call back fun in it.
btnEle.forEach( (btn) => {
    btn.addEventListener("click",()=>{
        //console.log("you clicked on",btn.id);
        //console.log("computer choice",compChoice());
       const result= playRound(btn.id,compChoice())
       //console.log(result);
       resultEle.textContent = result
    })
})

function compChoice(){
    const choice = ["rock","paper","scissor"]
    const randomChoice = Math.floor(Math.random()*choice.length)
    return choice[randomChoice]
}

function playRound(userSelection,compSelection){
    if(userSelection === compSelection)
    {
        return "It's a Tie!"
    }
    else if (
        (userSelection === "rock" && compSelection === "scissor") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissor" && compSelection === "paper") 
    )
    {
        userScore++
        userScoreEle.textContent=userScore
        return `You Won! ${userSelection} beats ${compSelection}`
    }
    else 
    {
        compScore++
        compScoreEle.textContent=compScore
        return `You Loose ${compSelection} beats ${userSelection}`
    }
    
}