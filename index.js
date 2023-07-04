const quizDB = [
  {
    question: "Q1: what is the full form of  HTML?",
    a: "Hello to My Language",
    b: "hey text marup language",
    c: "hyperText markeup language",
    d: "Hypertext multiple langugage",
    ans: "ans3",
  },
  {
    question: "Q2: what is the full form of  CSS?",
    a: "Cascading Style Sheets",
    b: "Creative Style System",
    c: "Computer Science Society",
    d: "Content Sharing Servic",
    ans: "ans1",
  },
  {
    question: "Q3: what is the full form of  java?",
    a: "Just Another Vague Acronym",
    b: " Joint Academic and Vocational Assessment",
    c: "JavaScript and Virtual Applications",
    d: " None of the above.",
    ans: "ans3",
  },
  {
    question: "Q4: what is the full form of  js?",
    a: "javascript",
    b: "javaserver",
    c: "jahanabad",
    d: "jaipur",
    ans: "ans1",
  },
];
const question = document.querySelector(".question");
// console.log(question);

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const answers = document.querySelectorAll(".answer");

const submit = document.querySelector(".btn");
const backButton = document.getElementById("back");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const questionLoad = () => {
  // I create the variable of quizdb that is called questionList
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
questionLoad();

const deSelected = () => {
  answers.forEach((currclick) => (currclick.checked = false));
};

const getAnsCheck = () => {
  let answer;

  answers.forEach((currclick) => {
    if (currclick.checked) {
      answer = currclick.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkAnswer = getAnsCheck();
  // console.log(checkAnswer);

  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deSelected();

  if (questionCount < quizDB.length) {
    questionLoad();
  } else {
    showScore.innerHTML = `
      <h2 id='totalScore'>Your score ${score}/${quizDB.length}</h2>
      <button class='btns' onclick='location.reload()'>Play Again</button>
      `;
    showScore.classList.remove("showArea");
  }
});

// const prevButton = () => {
//   if (questionCount === 0) {
//     backButton.disabled = true;
//   } else {
//     backButton.disabled = false;
//   }
// };

backButton.addEventListener("click", () => {
  console.log("back");
  questionCount--;
  questionLoad();
});
