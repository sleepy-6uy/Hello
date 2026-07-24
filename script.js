const buttonContainer = document.querySelector(".buttons");
const yesBtn = document.querySelectorAll(".buttons button")[0];

function moveButton() {
    const containerWidth = buttonContainer.clientWidth;
    const containerHeight = buttonContainer.clientHeight;

    const btnWidth = yesBtn.offsetWidth;
    const btnHeight = yesBtn.offsetHeight;

    const maxX = (containerWidth - btnWidth) / 2 - 20;
    const maxY = 100; 
    const randomX = Math.random() * (maxX * 2) - maxX;
    const randomY = Math.random() * (maxY * 2) - maxY;

    yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

yesBtn.addEventListener("mouseenter", moveButton);
yesBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
}, { passive: false });