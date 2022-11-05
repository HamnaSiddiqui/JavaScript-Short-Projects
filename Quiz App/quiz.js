const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];


const quest = document.querySelector(".question");
const play = document.querySelector(".play");
const result = document.querySelector(".result");
const game = document.querySelector(".game");
const submit = document.querySelector(".submit");
const answers_container = document.querySelector(".answers");

let qindex = 0;
let wrong_ans = 0;
let correct_ans = 0;
let total = 0;
let selected_ans;

let showQuestion = (index) => {
    quest.textContent = data[index].question;
    answers_container.innerHTML = data[index].answers.map( (item, index) =>
        `<div class="answer">
        <input name="answer" type="radio" value="${item.isCorrect}" id="${item}">
        <label for="1">${item.answer}</label>
        </div>`
    ).join("");

    selectAnswer();
}

function selectAnswer(){
    answers_container.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click", (e)=>{
            if(e.target.value === "true"){
                correct_ans ++;
                console.log("answer is correct");
            }
            else{
                wrong_ans++;
                console.log("wrong");
            }
        })
    })
}


showQuestion(qindex);