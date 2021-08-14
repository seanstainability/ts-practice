{
    // 객체나 배열을 완전한 상수로 만들어 줄 수 있다.
    const obj = { a: 1 } as const;
// obj.a = 2; /* 에러 */
    const arr = [1] as const;
// arr[0] = 2; /* 에러 */
// 완전히 다른 타입끼리의 강제 타입 변환은 'as unknown as'

// 숫자야구
    const getNumbers = () => {
        let choice: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let temp: number[] = [];
        for(let i: number = 0; i < 4; i++) {
            let choose: number = choice.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            temp.push(choose);
        };
        console.log(temp);
        return temp;
    }

    let answer: number[] = [];
    let count: number = 0;

    const startGame = () => {
        answer = getNumbers();
        count = 10;
        result.innerText = `남은 횟수: ${count}`;
        state.innerHTML = '';
    };

    const result: HTMLDivElement = document.createElement('div');
    result.style.marginBottom = '5px';
    document.body.append(result);

    const form: HTMLFormElement = document.createElement('form');
    const input: HTMLInputElement = document.createElement('input');
    const button: HTMLButtonElement = document.createElement('button');
    button.innerText = '입력';
    document.body.append(form);
    form.append(input);
    form.append(button);

    const state: HTMLDivElement = document.createElement('div');
    document.body.append(state);

    const start: HTMLButtonElement = document.createElement('button');
    start.innerText = '다시시작';
    start.addEventListener('click', () => {
        startGame();
    });

    startGame();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        count--;
        let userInput: number[] = input.value.split('').slice(0, 4).map((i) => parseInt(i));
        if(parseInt(input.value) == parseInt(answer.join(''))) {
            result.innerText = '승리 🥳 ';
            result.append(start);
        } else if (count === 0) {
            result.innerText = '실패 😅 ';
            result.append(start);
        } else {
            result.innerText = `남은 횟수: ${count}`;
            let ball = 0;
            let strike = 0;
            for (let i: number = 0; i < 4; i++) {
                if (userInput[i] === answer[i]) {
                    strike += 1;
                } else if (userInput.includes((answer[i]))) {
                    ball += 1;
                }
            };
            state.innerHTML += `${input.value} : ${strike} 스트라이크, ${ball} 볼<br/>`;
        }
        input.value = '';
        input.focus();
    })
}