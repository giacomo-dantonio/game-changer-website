function closeDialog() {
    const steps = document.querySelectorAll(".dialog")
    for (const step of steps) {
        step.style.display = 'none';
    }
}

document.querySelector(".dialog.step-2 .next").addEventListener("click", closeDialog)