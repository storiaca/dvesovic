class Quiz {
  questions;
  score = 0;
  questionIndex = 0;
  constructor(questions) {
    this.questions = questions;
  }

  getQuestion() {
    return this.randomize(this.questions[this.questionIndex]);
  }

  randomize(question) {
    let copyOptions = [].concat(question.options);
    console.log(copyOptions);
    let arrForExport = [];
    for (let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * copyOptions.length);
      arrForExport.push(copyOptions[rand]);
      copyOptions.splice(rand, 1);
    }
    question.options = arrForExport;

    return question;
  }

  isEnd() {
    return this.questions.length === this.questionIndex;
  }

  questionAnswered(answer) {
    if (answer === this.getQuestion().correctAnswer) {
      this.score += this.getQuestion().points;
    }
    this.questionIndex++;
  }
}

let quiz = new Quiz(questions);

console.log(quiz);
