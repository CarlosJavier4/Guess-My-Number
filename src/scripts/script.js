'use strict';

console.log(`--> Starting`);

const secretNumber = Math.trunc(Math.random()*20)+1;

let score = document.querySelector('#score');
let highscore = document.querySelector('#highscore');
let result = document.querySelector('.result');
let message = document.querySelector('.status__answer');

const again = function (sms) {
	result.textContent = '?';

	highscore.textContent =
		highscore.textContent < score.textContent
			? score.textContent
			: highscore.textContent;

	score.textContent = '20';

	message.textContent = sms;

	document.querySelector('body').style.backgroundColor = '#121111d0';
	document.querySelector('.answer__input').style.backgroundColor = 'inherit';
	document.querySelector('.answer__input').style.color = '#fff';

};

document.querySelector('.check').addEventListener('click', function () {
	console.log(`--> Getting the number selected for user`);

	const inp = document.querySelector('.answer__input').value;

	if (score.textContent == 0) {
		/* Game Over */

		console.log('== Game Over ==');
		again(':( You lost the game');
	} else {
		if (!inp || typeof parseInt(inp) != 'number') {
			console.log(`--> Invalid input`);
			message.textContent = `${String.fromCodePoint(0x26D4)} Not a number`;
			result.textContent = '-';
		} else if (inp == secretNumber) {
			console.log('== Correct Number ==');
			message.textContent = `${String.fromCodePoint(0x1F44C)} Correct Number`;

			highscore.textContent =
				highscore.textContent < score.textContent
					? score.textContent
					: highscore.textContent;

			result.textContent = secretNumber;

			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.answer__input').style.backgroundColor =
				'white';
			document.querySelector('.answer__input').style.color = '#000';

		} else if (inp > secretNumber) {
			message.textContent = `${String.fromCodePoint(0x1F53A)} Too high`;
			score.textContent = score.textContent - 1;
			result.textContent = '?';
		} else if (inp < secretNumber) {
			message.textContent = `${String.fromCodePoint(0x1F53B)} Too low`;
			score.textContent = score.textContent - 1;
			result.textContent = '?';
		}
	}
});

document
	.querySelector('.header__again')
	.addEventListener('click', function () { again('Start guessing...') });
