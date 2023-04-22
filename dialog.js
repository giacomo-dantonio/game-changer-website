function closeDialog() {
    const steps = document.querySelectorAll(".dialog")
    for (const step of steps) {
        step.style.display = 'none';
    }
}

function nextStep(no) {
    const steps = document.querySelectorAll(`.dialog:not(.step-${no})`)
    for (const step of steps) {
        step.style.display = 'none';
    }

    const nextStep = document.querySelector(`.dialog.step-${no}`)
    if (nextStep !== undefined && nextStep !== null) {
        nextStep.style.display = 'flex'
    }
}

document.querySelector(".dialog.step-2 .next").addEventListener("click", closeDialog)