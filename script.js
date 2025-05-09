let score = 0;
let current = 0;
let answered = false;

const questions = [
  {
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "12", "14"],
    correct: 1
  },
  {
    question: "Which gas is used in balloons?",
    options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    correct: 1
  }
  {
  question: "Which of the following is the lightest subatomic particle?",
  options: ["Proton", "Neutron", "Electron", "Nucleus"],
  correct: 2
},
{
  question: "What is the maximum number of electrons that can be in the second shell (L shell)?",
  options: ["2", "4", "6", "8"],
  correct: 3
},
{
  question: "Who discovered the neutron?",
  options: ["J.J. Thomson", "James Chadwick", "Ernest Rutherford", "Niels Bohr"],
  correct: 1
}

];



function loadQuestion() {
  answered = false;
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => showFeedback(i, btn);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
  document.getElementById("result").classList.add("hidden");
}

function showFeedback(selected, btn) {
  if (answered) return;
  answered = true;

  const correctIndex = questions[current].correct;
  const resultBox = document.getElementById("result");

  if (selected === correctIndex) {
    resultBox.innerText = "✅ Correct!";
    resultBox.style.color = "green";
    score++;
  } else {
    resultBox.innerText = `❌ Wrong! Correct answer: ${questions[correctIndex]}`;
    resultBox.style.color = "red";
  }

  resultBox.classList.remove("hidden");
}
function showFinalScore() {
  let message = "";
  switch (score) {
    case 5:
      message = "🌟 Brilliant! You scored 5/5 🎉";
      break;
    case 4:
      message = "👏 Well done! You scored 4/5";
      break;
    case 3:
      message = "🙂 Hmm... okay! You scored 3/5";
      break;
    case 2:
      message = "😐 You can do better! You scored 2/5";
      break;
    case 1:
      message = "😕 Try again! You scored 1/5";
      break;
    default:
      message = "😅 Oh c'mon! You scored 0/5";
  }

  document.getElementById("quiz-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>${message}</p>
  `;
}

document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

loadQuestion();
