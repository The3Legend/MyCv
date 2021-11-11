function userProgress() {
    let start = 0;
    let progressElement = document.querySelectorAll('.user-progress')
    progressElement.forEach(el => {
        console.log(el.value)

        setInterval(() => {
            el.value = start;
            start++
        }, 300)
    })
}
userProgress()