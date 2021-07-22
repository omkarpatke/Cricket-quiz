var readlinesync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var highScore = [
  {
    name: 'Omkar',
    score: 18,
  },
  {
    name: 'Ajit',
    score: 16,
  },
]



var questions = [{
  question: " \n1. Who is the popular known as Master Blaster?\n   a. Sachin Tendulkar \n   b. Ravindra Jadeja \n   c. Virat Kohli \n   d. Rohit Sharma \n ",
  answer: "a"
},
{
  question: " \n2. Who is the best yorker bowler? \n   a. MS Dhoni \n   b. Malinga \n   c. Virat Kohli \n   d. Kuldip Yadav \n ",
  answer: "b"
},
{
  question: " \n3. Who is the King of Sixer? \n   a. Dinesh Kartik \n   b. Chris Gayle \n   c. Jusprit Bumrah \n   d. Virat Kohli \n ",
  answer: "b"
},
{
  question: " \n4. Who hit the longest six? \n   a. Shahid Afridi \n   b. Malinga \n   c. Hardik Pandya \n   d. Rohit Sharma \n  ",
  answer: "a"
},
{
  question: " \n5. Who hit biggest six in IPL? \n   a. Sachin Tendulkar \n   b. Ravindra Jadeja \n   c. Virat Kohli \n   d. Pollard \n  ",
  answer: "d"
},
{
  question: " \n6. Who is the king of leg spin? \n   a. Hardik Pandya\n   b. Shahid Afridi \n   c. Shane Warne \n   d. Rohit Sharma \n  ",
  answer: "c"
},
{
  question: " \n7. Whos is The Captain of Indian Cricket Team ? \n   a. Sachin Tendulkar \n   b. Ravindra Jadeja \n   c. Virat Kohli \n   d. Rohit Sharma \n ",
  answer: "c"
},
{
  question: "\n8. who is the winner of world cup 2019? \n   a. India \n   b. England \n   c. Australia \n   d. South Africa \n  ",
  answer: "b"
},
{
  question: "\n9. Where is cricket most popular?? \n   a. India \n   b. South Africa \n   c. England \n   d. Australia \n ",
  answer: "a"
},
{
  question: " \n10. First sportsperson nominated for Rajya Sabha membership ? \n   a. Sachin Tendulkar \n   b. Ravindra Jadeja \n   c. Virat Kohli \n   d. Rohit Sharma \n  ",
  answer: "a"
}];



function cheakAnswer(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer) {
    console.log(chalk.green('Right!'))
    score = score + 2;
  } else {
    console.log(chalk.greenBright('Wrong'))
    score = score - 1;
  }
  console.log(chalk.red('Current Score = ', score));
  console.log('---------------------');


}

function questionloop() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    cheakAnswer(currentQuestion.question, currentQuestion.answer)
  }
}




function showscore() {
  highScore.map(score => console.log(score.name, ':', score.score));
}


//Welcome
console.log(chalk.green('Hello Cricket Fans! Welcome To the Cricket quiz !! \n'));



// Getting user Name
var userName = readlinesync.question('May I Know Your Name? ');
console.log(chalk.green(' \n Welcome', userName, 'to the Cricket quiz.'));



// Rules of the game
console.log(chalk.cyan.bold('\nRules of the game and score system : '));
console.log(chalk.cyan.bold(' 1.If you answer the question you will get 2 points.'))
console.log(chalk.cyan.bold(' 2.If you will not answer the question your score will be -1.'))
console.log(chalk.cyan.bold(' 3.Put the answer option like this c'));


// Start the Game
console.log(chalk.green(' \n Lets Start the Game !! '));


questionloop();
console.log(' \n            Your Final Score is ', score, ' out of 20');
console.log(' \nOur High Score is:')
showscore();

console.log(chalk.green('\nCheck out the high scores, if you should be there message me and I will update it'))

console.log(chalk.green(' \nThanks for playing Hope you enjoy it'));
