'use strict';

var count = 0;
var userName = prompt('Hi! Glad you are here! What\'s your name?');
console.log('The user entered' + userName + ' when asked to give their name');
alert('Hi, ' + userName +   ' nice to meet you! Im going to ask you a few questions so you can get to know me. Please answer with y/n or yes/no');

function question1() {
  var answer1 = prompt('Do you think I own a dog?').toLowerCase().trim();
  console.log('the user put ' + answer1 + ' for if i have a dog.');

  if (answer1 === 'yes'|| answer1 === 'y') {
    console.log('User entered ' + answer1 + ' as a correct answer to question number  1.');
    alert('You ' + userName + ' are correct! I have a Corgi named Butters');
    count++;
  } else if (answer1 === 'Um, no' || answer1 === 'n') {
    console.log(' User entered ' + answer1 + ' which is incorrect for question number 1');
    alert('Sorry ' + userName + ' you\'re incorrect, I have a Corgi named Butters!');
  } else {
    console.log('User entered ' + answer1 + ' which is not a valid answer for question number 1');
    alert('Sorry that was not a valid answer. Maybe you made a typo? Lets move on to the next question.');
  }
}
question1();

function question2() {
  var answer2 = prompt('Next question! Do you think I have a brother?').toLowerCase().trim();
  console.log('the user put ' + answer2 + ' for if I have a brother.');

  if (answer2 === 'no' || answer2 === 'n') {
    console.log('The user entered ' + answer2 + ' which is a incorrect answer for question number 2');
    alert('You\'re incorrect, ' + userName + ' I have 2 brothers');
  } else if (answer2  === 'yes'|| answer2 === 'y') {
    console.log(' The user entered ' + answer2 + ' which is an correct answer for question number 2');
    alert('Correct, I have two brothers!');
    count++;
  } else {
    console.log('The user entered ' + answer2 + ' which is an invalid response to question number2');
    alert('Invalid Response, but let\'s move on.');
  }
}
question2();

function question3(){
  var answer3 = prompt('Do you think I\'ve spent my entire life in Washington?').toLowerCase().trim();
  console.log('the user put ' + answer3 + ' for whether I\'ve spent my entire life in Washington or not.');

  if (answer3 === 'yes' || answer3 === 'y') {
    console.log(' The user entered ' + answer3 + ' which is a incorrect guess to question number 3');
    alert('I\'m sorry, but ' + userName + ' you\'re wrong, as an army brat I\'ve moved around a lot.');
  } else if (answer3 === 'no' || answer3 === 'n') {
    console.log(' The user entered ' + answer3 + ' which is a correct guess to question number 3');
    alert('You are correct ' + userName + ' as an Army brat my family and I moved just about every two years');
    count++;
  } else {
    console.log('The user entered ' + answer3 + ' which is an invalid response to question number2');
    alert('Sorry that response is not valid, but let\'s just continue.');
  }
}

question3();

function question4(){
  var answer4 = prompt('Do you think I enjoy playing golf?').toLowerCase().trim();
  console.log('the user put ' + answer4 + ' for whether I enjoy playing golf or not.' );

  if (answer4 === 'yes' || answer4 === 'y') {
    console.log('The user enterd ' + answer4 + ' which is the correct answer to question number 4');
    alert('You ' + userName + ' are right, I\'ve been golfing for over twenty years.');
    count++;
  } else if (answer4 === 'no' || answer4 === 'n') {
    console.log('The user entered ' + answer4 + ' an incorrect answer for whether I enjoy playing golf or not.');
    alert('Sorry you\'re wrong, I\'ve golfed for over twenty years!');
  } else {
    console.log(' The user entered ' + answer4 + ' which is an invalid response to the question.');
    alert('I\'m sorry ' + userName + ' invalid answer, let\'s just continue.');
  }
}
question4();

function question5(){
  var answer5 = prompt('Do you think I would drive every day to class?').toLowerCase().trim();
  console.log('the user put ' + answer5 + ' for whether I drive to class or not.');

  if (answer5 === 'yes' || answer5 === 'y') {
    console.log(' The user entered ' + answer5 + ' which is a incorrect answer to my driving to class question.');
    alert('Sorry ' + userName + ' incorrect I couldn\'t justify spending that much on parking. I bus in from Issaquah.');
  } else if (answer5 === 'no' || answer5 === 'n') {
    console.log(' The user entered ' + answer5 + ' a correct answer to my driving to class question.');
    alert('You ' + userName + ' are correct, I could never justify spending that much money on parking');
    count++;
    
  } else {
    console.log('The user entered ' + answer5 + ' which is an invalid response to my driving to class question.');
    alert('Sorry ' + userName + ' you\'ve enterd an invalid response, but thank you for playing my guessing game.');
  }
}
question5();

function question6() {
  var rightNum = 4; //variable rightNum is used to store the answer for the guessing game.
  for (var i = 0; i < 4; i++) {
    var answer6 = prompt('Hey ' + userName + ' lets play a little game. I would like you to guess a number from 1 to 10. I\'ll give you 4 chances.');
    var num = parseInt(answer6); // Variable 'num' used to store the answer given by user in prompt box. parseInt store what the user has entered.
    
    if (num > rightNum && num > 0 && num < 11) { // If answer given is greater than rightNum(4).
      console.log('The user input ' + num + ' as a guess to what number I selected was too high');
      alert('Sorry ' + userName + ' your guess is too high ' + (4 - (1 + i)) + ' guesses left.'); //remain.toString().Converts remaining guesses after each loop
    } else if (num < rightNum && num > 0 && num < 11) { // If answer given is less than rightNum(4).
      console.log('The user input ' + num + ' as a guess to what number I selected was too low');
      alert('Sorry ' + userName + ' your guess is too low ' + (4 - (i + 1)) + ' guesses left.');
    } else if (num === rightNum) { 
      console.log('The user input ' + num + ' as a guess to what number I selected was correct');
      alert('Great guess ' + userName + ' you are correct!');
      count++;
      break;
    } else {
      console.log('The user input ' + num + ' as a guess to what number I selected was invalid');
      alert('You have entered an invalid response!');
    } 
  }
}
question6();

function question7(){
  var states = ['Virginia', 'Alabama']; //array of correct answers.

  for (var i = 0; i < 6; i++) { //Counter starts at (i) zero, and stops at 6, incrementing by one each iteration of the loop.
    console.log('The user put ' + answer7 + ' for try number ' + (1 + i)); //log the answer for each guess,  incrementing  the guess by one for each entry to guess prompt.
    var answer7 = prompt('Alright ' + userName + ' last question I promise. Can you guess which states I\'ve lived in besides Washington?').toLowerCase().trim();
  
    if (answer7 === states[0].toLowerCase() || answer7 === states[1].toLowerCase()) { //If answer is in array index, either [0] or [1].
      console.log('The user entered ' + answer7 + ' which is a correct guess for question 7');
      alert('You ' + userName + ' are correct, the answers were ' + states[0] + ' and ' + states[1]); // response to correct answer
      count++; // logs correct answers!
      break; //exit loop if conditions are met.
    } else if (i === 5) { // If user is out of guesses. Count will reach 6 attempts here.
      console.log(' The user entered ' + answer7 + ' which was incorrect, for their final guess.');
      alert('I\'m so sorry you\'ve run out of guesses ' + userName + '. the right answers were Alabama and Virginia. Thanks for playing!' ); // Notify of reaching max guesses.
    } else if (answer7 === '' || !isNaN(parseInt(answer7))) {
      console.log('User entered ' + answer7 + ' which is an invalid answer for the question.');
      alert('Sorry ' + userName + ' its a invalid answer. You have ' + (5 - i) + ' more attempts');
    } else { 
      console.log('The user entered ' + answer7 + ' which is an incorrect anwer for question 7.');
      alert('Sorry ' + userName + ' incorrect. You have ' + (5 - i) + ' tries left');// Condition run for each wrong answer.
    }       
  }
}
question7();
console.log(' Users total number of correct guesses are logged against total number of questions');
alert('Well done ' + userName + ' you got ' + count + ' out of 7 questions right? Thanks for playing?' ); //Final alert. String built to store the count of correct answers VS number of questions.