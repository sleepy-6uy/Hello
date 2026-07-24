const mainContainer = document.querySelector('.main');
const yesBtn = document.querySelectorAll('.buttons button')[0];

yesBtn.addEventListener('mouseover', () => {
    // Get dimensions of main container and button
    const mainWidth = mainContainer.clientWidth;
    const mainHeight = mainContainer.clientHeight;
    
    const btnWidth = yesBtn.offsetWidth;
    const btnHeight = yesBtn.offsetHeight;

    // Get the initial position of the YES button relative to .main
    const initialLeft = yesBtn.offsetLeft;
    const initialTop = yesBtn.offsetTop;

    // Calculate max allowed movement (translating relative to original spot)
    // Adding 20px padding so it doesn't touch the exact edges
    const minX = -initialLeft + 20;
    const maxX = mainWidth - initialLeft - btnWidth - 20;
    
    const minY = -initialTop + 20;
    const maxY = mainHeight - initialTop - btnHeight - 20;

    // Pick a random coordinate within bounds
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    // Apply translation
    yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});