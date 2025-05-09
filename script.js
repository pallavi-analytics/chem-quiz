const questions = [
  {
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "12", "14"],
    correct: 1 // index of "6"
  },
  {
    question: "Which gas is used in balloons?",
    options: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    correct: 1
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[current].correct;
  if (selected === correct) {
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Try again.");
  }
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
