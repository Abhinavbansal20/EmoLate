const button = document.querySelectorAll(".buttonClick");
console.log(button);
button.forEach((val) => {
    val.addEventListener("click", function() {
        // alert("you clicked me!");
        val.style.color = "gold";
        // replace with button.style
    })
})

var personality = ['ISTJ - The Inspector', 'ISTP - The Crafter', 'ISFJ - The Protector', 'ISFP - The Artist', 'INFJ - The Advocate', 'INFP - The Mediator', 'INTJ - The Architect', 'INTP - The Thinker', 'ESTP - The Persuader', 'ESTJ - The Director', 'ESFP - The Performer', 'ESFJ - The Caregiver', 'ENFP - The Champion', 'ENFJ - The Giver', 'ENTP - The Debater'];
var thing = personality[Math.floor(Math.random() * personality.length)];

const res = document.querySelector("#result");
const submitButton = document.querySelector("#submitBut");
submitButton.addEventListener("click", function() {
    res.textContent = `Your Personality Is: ${thing}`;
})