const numberInput = document.getElementById('number-input');
const text = document.querySelector('.text');

function getRandonTrivia() {
    let number = numberInput.value
    fetch(`http://numbersapi.com/${number}/trivia`)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                text.style.display = 'block';
                text.textContent = data
            } else if (!number) {
                text.style.display = 'none';
            }
        })
}

numberInput.addEventListener('input', getRandonTrivia)