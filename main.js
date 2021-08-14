// 객체나 배열을 완전한 상수로 만들어 줄 수 있다.
var obj = { a: 1 };
// obj.a = 2; /* 에러 */
var arr = [1];
// arr[0] = 2; /* 에러 */
// 완전히 다른 타입끼리의 강제 타입 변환은 'as unknown as'
// 숫자야구
var getNumbers = function () {
    var choice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var temp = [];
    for (var i = 0; i < 4; i++) {
        var choose = choice.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        temp.push(choose);
    }
    ;
    console.log(temp);
    return temp;
};
var answer = [];
var count = 0;
var startGame = function () {
    answer = getNumbers();
    count = 10;
    result.innerText = "\uB0A8\uC740 \uD69F\uC218: " + count;
    state.innerHTML = '';
};
var result = document.createElement('div');
result.style.marginBottom = '5px';
document.body.append(result);
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
button.innerText = '입력';
document.body.append(form);
form.append(input);
form.append(button);
var state = document.createElement('div');
document.body.append(state);
var start = document.createElement('button');
start.innerText = '다시시작';
start.addEventListener('click', function () {
    startGame();
});
startGame();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    count--;
    var userInput = input.value.split('').slice(0, 4).map(function (i) { return parseInt(i); });
    if (parseInt(input.value) == parseInt(answer.join(''))) {
        result.innerText = '승리 🥳 ';
        result.append(start);
    }
    else if (count === 0) {
        result.innerText = '실패 😅 ';
        result.append(start);
    }
    else {
        result.innerText = "\uB0A8\uC740 \uD69F\uC218: " + count;
        var ball = 0;
        var strike = 0;
        for (var i = 0; i < 4; i++) {
            if (userInput[i] === answer[i]) {
                strike += 1;
            }
            else if (userInput.includes((answer[i]))) {
                ball += 1;
            }
        }
        ;
        state.innerHTML += input.value + " : " + strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C, " + ball + " \uBCFC<br/>";
    }
    input.value = '';
    input.focus();
});
