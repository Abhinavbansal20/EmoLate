const angerText = document.querySelector("#angerTries");
const sympathyText = document.querySelector("#sympathyTries");
const calmnessText = document.querySelector("#calmnessTries");
// const angerPers = document.querySelector("#anger1");
const installButton = document.querySelector("#install");
const pers = document.querySelector("#personalitySelect");

// code for installing
// selected is the variable which has the 'value' of select input
const install = document.querySelector("#inst")
var selected = "";
pers.addEventListener('click', (e) => {
    selected = e.target.value;
})

// code for information update
const updateTime = document.querySelector("#time-span");
const updateEffect = document.querySelector("#effect-span");

// code for moving bar
const angerVal = document.querySelector("#val-anger");
const sympathyVal = document.querySelector("#val-sympathy");
const calmnessVal = document.querySelector("#val-calmness");
const addAnger = parseFloat(angerVal.textContent);
const addSympathy = parseFloat(sympathyVal.textContent);
const addCalmness = parseFloat(calmnessVal.textContent);

const movingBar = document.querySelector("#bar-value");
const movingBarColor = document.querySelector(".bar14");
let initialValue = parseFloat(movingBar.textContent);

// code for updating Used Today
let usedToday = 0;
const neuralUsed = document.querySelector("#used");


// counters for emotions usage
let counterAnger = 0;
let counterSympathy = 0;
let counterCalmness = 0;

installButton.addEventListener('click', function() {
    if (selected !== '1' && selected !== '2' && selected !== '3') {
        alert("PLEASE SELECT AN EMOTION!!!")
    }
    if (selected === '1' && (parseInt(angerText.textContent) > 0)) {
        angerText.textContent = `${parseInt(angerText.textContent)-1}`;
        updateTime.textContent = "Estimated Time Remaining: 3 hours";
        updateEffect.textContent = "Effect will last for 4 days after installation.";
        if (initialValue <= 16) {
            initialValue = initialValue + addAnger;
            usedToday = usedToday + addAnger;
            counterAnger += 1;
        }
    }

    if (selected === '2' && (parseInt(sympathyText.textContent) > 0)) {
        sympathyText.textContent = `${parseInt(sympathyText.textContent)-1}`;
        updateTime.textContent = "Estimated Time Remaining: 1 day";
        updateEffect.textContent = "Effect will last for 14 days after installation.";
        if (initialValue <= 16) {
            initialValue = initialValue + addSympathy;
            usedToday = usedToday + addSympathy;
            counterSympathy += 1;
        }
    }

    if (selected === '3') {
        calmnessText.textContent = `${parseInt(calmnessText.textContent)-1}`;
        updateTime.textContent = "Estimated Time Remaining: 1 minute";
        updateEffect.textContent = "Effect will last for 20 mins after installation.";
        if (initialValue <= 16) {
            initialValue = initialValue + addCalmness;
            usedToday = usedToday + addCalmness;
            counterCalmness += 1;
        }
    }
    if (parseInt(angerText.textContent) === 0 || parseInt(sympathyText.textContent) === 0 || parseInt(calmnessText.textContent) === 0) {
        alert("EMOTION CANNOT BE USED NOW!!!")
    }
    if (selected === '1' || selected === '2' || selected === '3') {
        if (initialValue <= 16) {
            install.textContent = "Installing...";
        } else {
            install.textContent = "CANNOT ADD MORE EMOTIONS TODAY!!!";
        }
    }

    movingBar.textContent = initialValue.toFixed(2);
    movingBarColor.style.width = `${initialValue.toFixed(2)}%`;
    neuralUsed.textContent = `${usedToday.toFixed(2)}%`;
    // console.log(initialValue);
})