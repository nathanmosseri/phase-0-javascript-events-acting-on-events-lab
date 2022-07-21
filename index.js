const dodger = document.getElementById('dodger')
const dodgerWidth = 40
const boardWidth = 400
const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}


const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if ((left+dodgerWidth)< boardWidth) {
        dodger.style.left = `${left + 10}px`
    }

}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})