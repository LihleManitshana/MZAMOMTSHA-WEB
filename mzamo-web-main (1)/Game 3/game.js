const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    "question": " Which of these cities is NOT on the coast?",
    "choice1": "Johannesburg",
    "choice2": "Cape Town",
    "choice3": "Durban",
    "choice4": "East London",
    "answer": 1
  },
  {
    "question": "Johannesburg was founded in 1886. What caused people to move to the area and found a city?",
    "choice1": "Its location at the confluence of two rivers",
    "choice2": "Big game hunting",
    "choice3": "Its excellent climate",
    "choice4": "A gold rush",
    "answer": 4
  },
  {
    "question": "Which of these famous actresses is from South Africa? ",
    "choice1": "Charlize Theron",
    "choice2": "Nicole Kidman",
    "choice3": "Lupita Nyong'o",
    "choice4": "Scarlett Johansson",
    "answer": 1
  },
  {
    "question": "South Africa has 11 official languages. Which of these is NOT one of them? ",
    "choice1": "English",
    "choice2": "Afrikaans",
    "choice3": "Swahili",
    "choice4": "Zulu",
    "answer": 3
  },
  {
    "question": "When was Nelson Mandela elected President? ",
    "choice1": "1984",
    "choice2": "1994",
    "choice3": "1830",
    "choice4": "1993",
    "answer": 2
  },
  {
    "question": "Who founded Cape Town?",
    "choice1": "The British",
    "choice2": "The German",
    "choice3": "The Dutch",
    "choice4": "Indigenous people",
    "answer": 3
  },
  {
    "question": "What foreign leader lived in South Africa for many years? ",
    "choice1": "Martin Luther King, Jr.",
    "choice2": "Queen Elizabeth II",
    "choice3": "Mahatma Gandhi",
    "choice4": "Che Guevara",
    "answer": 3
  },
  {
    "question": "South Africa's national rugby union team are known as the springboks. What is a springbok? ",
    "choice1": "Mythical creature",
    "choice2": "Wild cat",
    "choice3": "Fish ",
    "choice4": "Antelope",
    "answer": 4
  },
  {
    "question": "Which tree is South Africa’s iconic Tree of Life? ",
    "choice1": "Banyan",
    "choice2": "Sakura",
    "choice3": "Baobab",
    "choice4": "Willow",
    "answer": 3
  },
  {
    "question": "South Africa possesses two small subantarctic islands located in the Indian Ocean.  One is Marion and the other shares a name with which member of the British Royal family?",
    "choice1": "Princess Anne",
    "choice2": "Prince William",
    "choice3": "King Charles III",
    "choice4": "Prince Edward",
    "answer": 4
  },
  {
    "question": "Who achieved worldwide success with his single ‘Jerusalema’ released in 2019? ",
    "choice1": "Master KG",
    "choice2": "Afrotraction",
    "choice3": "Banyoretsweng Bophelo Gospel Choir ",
    "choice4": "Zahara",
    "answer": 1
  },
  {
    "question": "Which colour can be found at the centre of the flag of South Africa",
    "choice1": "Red",
    "choice2": "Green",
    "choice3": "Black",
    "choice4": "Blue",
    "answer": 2
  },
  {
    "question": "Which herbal tea is made from the leaves of the South African red bush plant? ",
    "choice1": "Masala",
    "choice2": "Rooibos",
    "choice3": "Chamomile",
    "choice4": "Amaranth",
    "answer": 2
  },
  {
    "question": "Which of the following countries does not share a border with South Africa?  ",
    "choice1": "Kenya",
    "choice2": "Lesotho",
    "choice3": "Namibia",
    "choice4": "Zimbabwe",
    "answer": 1
  },
  {
    "question": "Which South African became the host of the American TV series ‘The Daily Show’ in 2015? ",
    "choice1": "Trevor Noah",
    "choice2": "Skhumba Hlophe",
    "choice3": "Steve harvey",
    "choice4": "Kevin Hart",
    "answer": 1
  },
  
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore",score);
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();