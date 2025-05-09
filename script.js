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
];

let current = 0;
let answered = false;

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
  } else {
    resultBox.innerText = `❌ Wrong! Correct answer: ${questions[correctIndex]}`;
    resultBox.style.color = "red";
  }

  resultBox.classList.remove("hidden");
}

document.getElementById("next-btn").addEventListener("click", () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = "<h3>🎉 Quiz Completed!</h3>";
  }
});

loadQuestion();
