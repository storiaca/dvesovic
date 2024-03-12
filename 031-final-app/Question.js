class Question {
  text;
  options;
  correctAnswer;
  points;
  category;
  constructor(text, options, correctAnswer, points, category) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.points = points;
    this.category = category;
  }
}

// let p1 = new Question(
//   "Glavni grad je ?",
//   ["Beograd", "Nis", "Sarajevo", "Zagreb"],
//   "Beograd",
//   10,
//   "gradovi"
// );

let questions = [
  new Question(
    "Pitanje 1",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 2",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 3",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 4",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 5",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 6",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 7",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 8",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 9",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
  new Question(
    "Pitanje 10",
    ["Option 1", "Option 2", "Option 3", "Option 4"],
    "Option 1",
    10,
    "gradovi"
  ),
];

console.log(p1);
