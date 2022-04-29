const buttonInfo = document.querySelector("#description");
const display1 = document.querySelector("#button1");
const display2 = document.querySelector("#button2");
const display3 = document.querySelector("#button3");

display1.addEventListener('mouseover', function() {
    buttonInfo.textContent = "Click here to enter the Product Market. Various devices which can  be attached on the body to receive signals from the implanted chips are available.";
    // reset()
})
display2.addEventListener('mouseover', function() {
    buttonInfo.textContent = "Click here to enter the Emotions Market. Here you can buy and sell emotions which have been carefully crafter by you and others like you.";
    // reset()
})
display3.addEventListener('mouseover', function() {
    buttonInfo.textContent = "Click here to enter the Consultancy Zone. Talk to our experts and neuro-scientists to understand more about your personality and how different emotions may affect you.";
    // reset()
})

function reset() {
    buttonInfo.textContent = "This information will be updated periodically. Click on buttons to change the description.";
}