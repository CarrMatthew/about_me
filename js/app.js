'use strict';

var userName = prompt('Hi! Glad you are here! What\'s your name?');

alert('Hi, ' + userName +   ' nice to meet you! Im going to ask you a few questions so you can get to know me. Please answer with y/n or yes/no');

var answer1 = prompt('Do you think I own a dog?').toLowerCase().trim();
console.log('the user put ' + answer1 + ' for if i have a dog.');

if (answer1 === 'yes'|| answer1 === 'y') {
  alert('You ' + userName + ' are correct! I have a Corgi named Butters');
} else if (answer1 === 'Um, no' || answer1 === 'n') {
  alert('Sorry ' + userName + ' you\'re incorrect, I have a Corgi named Butters!');
} else {
  alert('Sorry that was not a valid answer. Maybe you made a typo? Lets move on to the next question.');
}

var answer2 = prompt('Next question! Do you think I have a brother?').toLowerCase().trim();
console.log('the user put ' + answer2 + ' for if I have a brother.');

if (answer2 === 'no' || answer2 === 'n') {
  alert('You\'re incorrect, ' + userName + ' I have 2 brothers');
} else if (answer2  === 'yes'|| answer2 === 'y') {
  alert('Correct, I have two brothers!');
} else {
  alert('Invalid Response, but let\'s move on.');
}

var answer3 = prompt('Do you think I\'ve spent my entire life in Washington?').toLowerCase().trim();
console.log('the user put ' + answer3 + ' for whether I\'ve spent my entire life in Washington or not.');

if (answer3 === 'yes' || answer3 === 'y') {
  alert('I\'m sorry, but ' + userName + ' you\'re wrong, as an army brat I\'ve moved around a lot.');
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('You are correct ' + userName + ' as an Army brat my family and I moved just about every two years');
} else {
  alert('Sorry that response is not valid, but let\'s just continue.');
}

var answer4 = prompt('Do you think I enjoy playing golf?').toLowerCase().trim();
console.log('the user put ' + answer4 + ' for whether I enjoy playing golf or not.' );

if (answer4 === 'yes' || answer4 === 'y') {
  alert('You ' + userName + ' are right, I\'ve been golfing for over twenty years.');
} else if (answer4 === 'no' || answer4 === 'n') {
  alert('Sorry you\'re wrong, I\'ve golfed for over twenty years!');
} else {
  alert('I\'m sorry ' + userName + ' invalid answer, let\'s just continue.');
}

var answer5 = prompt('Do you think I would drive every day to class?').toLowerCase().trim();
console.log('the user put ' + answer5 + ' for whether I drive to class or not.');

if (answer5 === 'yes' || answer5 === 'y') {
  alert('Sorry ' + userName + ' I couldn\'t justify spending that much on parking. I bus in from Issaquah.');
} else if (answer5 === 'no' || answer5 === 'n') {
  alert('You ' + userName + ' are actually correct, I could never justify spending that much money on parking');
} else {
  alert('Sorry ' + userName + ' you\'ve enterd an invalid response, but thank you for playing my guessing game.');
}