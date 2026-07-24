const main = document.querySelector(".main");
const yesBtn = document.querySelector(".buttons button:first-child");

let initialized = false;

function initializeButton() {
    if (initialized) return;

    const mainRect = main.getBoundingClientRect();
    const btnRect = yesBtn.getBoundingClientRect();

    // Store the current visual position
    const left = btnRect.left - mainRect.left;
    const top = btnRect.top - mainRect.top;

    yesBtn.style.position = "absolute";
    yesBtn.style.left = left + "px";
    yesBtn.style.top = top + "px";

    initialized = true;
}

window.addEventListener("load", initializeButton);
window.addEventListener("resize", () => {
    initialized = false;
    initializeButton();
});

function moveButton(e) {

    if (e.type === "touchstart") {
        e.preventDefault();
    }

    initializeButton();

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
        newLeft > mainRect.width / 2 - 120 &&
        newLeft < mainRect.width / 2 + 120 &&
        newTop > mainRect.height / 2 - 80 &&
        newTop < mainRect.height / 2 + 80 &&
        tries < 50
    );

    yesBtn.style.left = newLeft + "px";
    yesBtn.style.top = newTop + "px";
}

yesBtn.addEventListener("mouseenter", moveButton);

yesBtn.addEventListener("touchstart", moveButton, {
    passive: false
});