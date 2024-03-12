// https://raw.githubusercontent.com/storiaca/dvesovic/main/031-final-app/data.json

(async function () {
  let quiz = new Quiz(await API.getAllData());

  let headerH3 = document.querySelector("header h3");
  let options = document.querySelectorAll("option");
  let footerH5 = document.querySelector("footer h5");
  let main = document.querySelector("main");

  function displayQuestion() {
    let currentQuestion = quiz.getQuestion();
    footerH5.innerHTML =
      "Pitanje " + (quiz.questionIndex + 1) + "/" + quiz.questions.length;
    headerH3.innerHTML = currentQuestion.text;

    options.forEach((options, index) => {
      options.innerHTML = currentQuestion.options[index];
      options.onclick = userAnswer;
    });
  }

  function userAnswer() {
    let answer = this.innerHTML;
    quiz.questionAnswered(answer);

    if (!quiz.isEnd()) {
      displayQuestion();
    } else {
      main.innerHTML = "Vas rezulat je " + quiz.score;
    }
  }

  displayQuestion();
})();
