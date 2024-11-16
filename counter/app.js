const header1 = document.querySelector('h1')
let count = 0

function increment() {
    count = count + 1
    header1.innerText = count

    if (count === -1 && count < 0) {
        header1.innerText = 0
    }
}

function decrement() {
    count = count - 1
    header1.innerText = count

    if (count < 0) {
        window.alert('You have reaced the bottom limit!')
        header1.innerText = 0
    }
}
