let input_bar = document.querySelector('#input_bar');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function () {

    result.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        result.innerHTML += input_bar.value + '  X ' + i + ' = ' + input_bar.value * i + '</br>';

        if (input_bar.value <= 0) {
            result.innerHTML = "Please Input Right Value !!"
        }
    }
})