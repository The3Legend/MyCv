function userProgress() {
    let start = 0;
    let progressElement = document.querySelectorAll('.user-progress')
    progressElement.forEach(el => {

        setInterval(() => {
            el.value = start;
            start++
        }, 350)
    })
}
userProgress()