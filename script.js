const scene = document.querySelector("#scene");
const hint = document.querySelector('.hint');

let targetX = -1000;
let targetY = -1000;
let currentX = targetX;
let currentY = targetY;

let mouseTimer;

window.addEventListener("load", () => {
    hint.style.top = '0px';
});

window.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();

    targetX = event.clientX - rect.left;
    targetY = event.clientY - rect.top;


    // hint popup
    hint.style.top = "-52px"

    if (mouseTimer !== null) {
        clearTimeout(mouseTimer);
    }
    mouseTimer = setTimeout(() => {
        hint.style.top = '0px';
    }, 2000);
});

function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    scene.style.setProperty("--x", `${currentX}px`);
    scene.style.setProperty("--y", `${currentY}px`);

    requestAnimationFrame(animate);
}

animate();