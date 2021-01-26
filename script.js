// 'use strict';

// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Correct Number!';
// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.secretNumber').textContent = 13;
// // document.querySelector('.score').textContent = 20;

// // document.querySelector('.guess').value = 23;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20; // keep the variable in the code, not the dom
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayNumber = function (number) {
//   document.querySelector('.number').textContent = number;
// };

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.score').textContent = score;
//   displayMessage('Start guessing...');
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
//   displayNumber('?');
// });

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // when there is no input
//   if (!guess) {
//     displayMessage('⛔️ No number!');

//     // when the player wins
//   } else if (guess === secretNumber) {
//     displayMessage('🎉 Correct Number!');
//     displayNumber(secretNumber);
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     highscore = score;
//     if (document.querySelector('.highscore').textContent < highscore)
//       document.querySelector('.highscore').textContent = highscore;
//   } else {
//     if (score > 0) {
//       if (guess < secretNumber) {
//         document.querySelector('.message').textContent =
//           guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       }
//     } else displayMessage('🤡 You lost the game!');
//   }
// });

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
