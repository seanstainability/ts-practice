// 타입스크립트: 자바스크립트의 변수, 함수의 매개변수, 함수의 리턴값에 타입이 명시적으로 붙은 것

let numOne: number = Math.ceil(Math.random() * 9)
let numTwo: number = Math.ceil(Math.random() * 9)
let answer: number = numOne * numTwo

const question: HTMLDivElement = document.createElement('div')
question.innerText = `${numOne} 곱하기 ${numTwo}는?`
document.body.append(question)

const form: HTMLFormElement = document.createElement('form')
const input: HTMLInputElement = document.createElement('input')
const button: HTMLButtonElement = document.createElement('button')
button.innerText = '입력'
document.body.append(form)
form.append(input)
form.append(button)

const result: HTMLDivElement = document.createElement('div')
document.body.append(result)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(parseInt(input.value) === answer) {
        result.innerText = '정답'
        numOne = Math.ceil(Math.random() * 9)
        numTwo = Math.ceil(Math.random() * 9)
        answer = numOne * numTwo
        question.innerText = `${numOne} 곱하기 ${numTwo}는?`
    } else {
        result.innerText = '오답'
    }
    input.value = ''
    input.focus()
})



