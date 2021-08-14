// 타입스크립트: 자바스크립트의 변수, 함수의 매개변수, 함수의 리턴값에 타입이 명시적으로 붙은 것
var numOne = Math.ceil(Math.random() * 9);
var numTwo = Math.ceil(Math.random() * 9);
var answer = numOne * numTwo;
var question = document.createElement('div');
question.innerText = numOne + " \uACF1\uD558\uAE30 " + numTwo + "\uB294?";
document.body.append(question);
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
button.innerText = '입력';
document.body.append(form);
form.append(input);
form.append(button);
var result = document.createElement('div');
document.body.append(result);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (parseInt(input.value) === answer) {
        result.innerText = '정답';
        numOne = Math.ceil(Math.random() * 9);
        numTwo = Math.ceil(Math.random() * 9);
        answer = numOne * numTwo;
        question.innerText = numOne + " \uACF1\uD558\uAE30 " + numTwo + "\uB294?";
    }
    else {
        result.innerText = '오답';
    }
    input.value = '';
    input.focus();
});
