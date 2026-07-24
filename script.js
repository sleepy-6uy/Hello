const main = document.querySelector(".main");
const yesBtn = document.querySelector(".buttons button:first-child");

// Desktop
yesBtn.addEventListener("mouseenter", moveButton);

// Mobile
yesBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveButton();
}, { passive: false });

function moveButton() {

    const padding = 20;

    const mainRect = main.getBoundingClientRect();
    const btnWidth = yesBtn.offsetWidth;
    const btnHeight = yesBtn.offsetHeight;

    const maxLeft = mainRect.width - btnWidth - padding;
    const maxTop = mainRect.height - btnHeight - padding;

    let newLeft;
    let newTop;
    let tries = 0;

    do {

        newLeft = Math.random() * (maxLeft - padding) + padding;
        newTop = Math.random() * (maxTop - padding) + padding;

        tries++;

    } while (

        // Avoid the NO button area
        newLeft > mainRect.width / 2 - 140 &&
        newLeft < mainRect.width / 2 + 140 &&
        newTop > 40 &&
        newTop < 180 &&
        tries < 100

    );

    yesBtn.style.left = `${newLeft}px`;
    yesBtn.style.top = `${newTop}px`;

}