//Anagram game for the SafariZone group project.

const full_solution = $('#full_solution');
const audio = document.querySelector('audio');

function animationPlay() {
  audio.currentTime = 0;
  audio.play();
}

function animationStop() {
  audio.pause();
}

function reset() {
  animationPlay();
  container.empty();
  full_solution.empty();
}

function revealAnswer(answer) {
  reveal_answer.click(function() {
    full_solution.empty();
    animationStop();
    answer.split('').forEach(letter =>
      full_solution.append("<li>" + letter + "</li>"));
  });
}

const words = [
  ["EBZAR","ZEBRA"],
  ["RETIG", "TIGER"],
  ["TLEHPENA", "ELEPHANT"],
  ["NIOL","LION"],
  ["OAGAKRN","KANGARO"],
  ["TIRBAB","RABBIT"],
  ["LERRISQU","SQUIRREL"],
  ["AALOK","KOALA"],
  ["RTHEPAN","PANTHER"],
  ["SPUCOTO","OCTOPUS"],
  ["KSAHR","SHARK"],
  ["TAHEECH","CHEETAH"],
];

const container = $('#question');
const newGame = $('#newGame');
const reveal_answer = $('#reveal_answer');

function startGame() {
  reset();
  let question = words[Math.floor(Math.random() * words.length)];
  let questionArray = question[0].split('');
  questionArray.forEach(letter =>
  container.append("<li>" + letter + "</li>"));
  let answer = question[1];
  container.sortable({ // now we can drag things out, with sortable.
  axis: "x",
  stop: function() {
  let attempt = "";

  container.children().each(function() {
  attempt += $(this).text();
    });
    if (attempt === answer) {
      full_solution.empty();
      answer.split('').forEach(letter =>
        full_solution.append("<li>" + letter + "</li>"));
        animationStop()
    }
  }
});
  revealAnswer(answer);
}
// start the game.
newGame.click(startGame);
