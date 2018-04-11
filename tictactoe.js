const inquirer = require('inquirer');


// inquirer.prompt([/* Pass your questions in here */]).then(answers => {
//   // Use user feedback for... whatever!!
// });
// use minimist and inquirer to get input from the command line

// build basic board structure
const board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

let player1Turn = true;
let player;

if (player1Turn === true) {
  player = 'player1';
} else {
  player = 'player2';
}

const printBoard = () => {
  console.log(`${board[0][0]} | ${board[0][1]} | ${board[0][2]}`);
  console.log('---------');
  console.log(`${board[1][0]} | ${board[1][1]} | ${board[1][2]}`);
  console.log('---------');
  console.log(`${board[2][0]} | ${board[2][1]} | ${board[2][2]}`);
  console.log(`${player}, it is your turn`);
};

printBoard();

inquirer
  .prompt([
    {
      type: 'list',
      name: 'move',
      message: 'Where do you want to move? ',
      choices: [
        'Top Left',
        'Top Middle',
        // new inquirer.Separator(),
        'Top Right',
        'Mid Left',
        'Mid Mid',
        'Mid Right',
        'Bottom Left',
        'Bottom Mid', 
        'Bottom Right'
      ]
    },
  ])
  .then(answers => {
    console.log(JSON.stringify(answers));
  });




// display the current board and who's turn it is

// display options for choosing the next move 

// create win logic