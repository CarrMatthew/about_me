'use strict';

var count = 0;
var userName = prompt('Hi! Glad you are here! What\'s your name?');

alert('Hi, ' + userName +   ' nice to meet you! Im going to ask you a few questions so you can get to know me. Please answer with y/n or yes/no');

var answer = prompt('Do you think I own a dog?').toLowerCase().trim();
console.log('the user put ' + answer + ' for if i have a dog.');

if (answer === 'yes'|| answer === 'y') {
  alert('You ' + userName + ' are correct! I have a Corgi named Butters');
  count++;
} else if (answer === 'Um, no' || answer === 'n') {
  alert('Sorry ' + userName + ' you\'re incorrect, I have a Corgi named Butters!');
} else {
  alert('Sorry that was not a valid answer. Maybe you made a typo? Lets move on to the next question.');
}

answer = prompt('Next question! Do you think I have a brother?').toLowerCase().trim();
console.log('the user put ' + answer + ' for if I have a brother.');

if (answer === 'no' || answer === 'n') {
  alert('You\'re incorrect, ' + userName + ' I have 2 brothers');
} else if (answer  === 'yes'|| answer === 'y') {
  alert('Correct, I have two brothers!');
  count++;
} else {
  alert('Invalid Response, but let\'s move on.');
}

answer = prompt('Do you think I\'ve spent my entire life in Washington?').toLowerCase().trim();
console.log('the user put ' + answer + ' for whether I\'ve spent my entire life in Washington or not.');

if (answer === 'yes' || answer === 'y') {
  alert('I\'m sorry, but ' + userName + ' you\'re wrong, as an army brat I\'ve moved around a lot.');
} else if (answer === 'no' || answer === 'n') {
  alert('You are correct ' + userName + ' as an Army brat my family and I moved just about every two years');
  count++;
} else {
  alert('Sorry that response is not valid, but let\'s just continue.');
}

answer = prompt('Do you think I enjoy playing golf?').toLowerCase().trim();
console.log('the user put ' + answer + ' for whether I enjoy playing golf or not.' );

if (answer === 'yes' || answer === 'y') {
  alert('You ' + userName + ' are right, I\'ve been golfing for over twenty years.');
  count++;
} else if (answer === 'no' || answer === 'n') {
  alert('Sorry you\'re wrong, I\'ve golfed for over twenty years!');
} else {
  alert('I\'m sorry ' + userName + ' invalid answer, let\'s just continue.');
}

answer = prompt('Do you think I would drive every day to class?').toLowerCase().trim();
console.log('the user put ' + answer + ' for whether I drive to class or not.');

if (answer === 'yes' || answer === 'y') {
  alert('Sorry ' + userName + ' I couldn\'t justify spending that much on parking. I bus in from Issaquah.');
} else if (answer === 'no' || answer === 'n') {
  alert('You ' + userName + ' are actually correct, I could never justify spending that much money on parking');
  count++;
} else {
  alert('Sorry ' + userName + ' you\'ve enterd an invalid response, but thank you for playing my guessing game.');
}


var rightNum = 4; //variable rightNum is used to store the answer for the guessing game.

for (var i = 1; i <= 4; i++) {
  answer = prompt('Hey ' + userName + ' lets play a little game. I would like you to guess a number from 1 to 10. I\'ll give you 4 chances.');
  var num = parseInt(answer); // Variable 'num' used to store the answer given by user in prompt box. parseInt store what the user has entered.
  console.log('The user input ' + num + ' as a guess to what number I selected');
  
  if (num > rightNum) { // If answer given is greater than rightNum(4).
    alert('Sorry ' + userName + ' your guess is too high ' + (4 - i) + ' guesses left.'); //remain.toString().Converts remaining guesses after each loop
  } else if (num < rightNum) { // If answer given is less than rightNum(4).
    alert('Sorry ' + userName + ' your guess is too low ' + (4 - i) + ' guesses left.');
  } else { 
    alert('Great guess ' + userName + ' you are correct!');
    count++;
    break;
  }
}


var states = ['virginia', 'alabama'];

for (var i = 0; i < 6; i++) {
  answer = prompt('Alright ' + userName + ' last question I promise. Can you guess which states I\'ve lived in besides Washington?').toLowerCase().trim();
  console.log('The user put ' + answer + ' for try number ' + (1 + i));
  
  if (answer === states[0] || answer === states[1]) {
    alert('You ' + userName + ' are correct, the answers were Virginia and Alabama');
    count++;
    break; 
  } else if (i === 5) {
    alert('I\'m so sorry you\'ve run out of guesses ' + userName + '.' );
  } else {
    alert('Sorry ' + userName + ' you are incorrect. You have ' + (5 - i) + ' amount of tries left');
  }       
}
alert('Well done ' + userName + ' you got ' + count + ' out of 7 questions right? Thanks for playing?' );