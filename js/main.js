// - pick a choice
// - computer picks a choice
// - compare choices
// - print result
var compArr = ['R', 'P', 'S']


function startGame(e) {
  var choice = e.target.id
  console.log(choice)
  // compChoice
  var comp = Math.random()
  if (comp >= 0.66) {
    comp = 'paper'
  }
  else if (comp <= 0.33) {
    comp = 'rock'
  }
  else {
    comp = 'scissors'
  }
  if (choice === 'paper' && comp === 'paper') {
    console.log('TIE') }
  else if (choice === 'paper' && comp === 'rock') {
    console.log('VICTORY ACHIEVED') }
  else if (choice === 'paper' && comp === 'scissors') {
    console.log('YOU DIED') }
  else if (choice === 'rock' && comp === 'paper') {
    console.log('YOU DIED') }
  else if (choice === 'rock' && comp === 'rock') {
  console.log('TIE') }
  else if (choice === 'rock' && comp === 'scissors') {
    console.log('VICTORY ACHIEVED') }
  else if (choice === 'scissors' && comp === 'paper') {
    console.log('VICTORY ACHIEVED') }
  else if (choice === 'scissors' && comp === 'rock') {
    console.log('YOU DIED') }
  else  {
    console.log('TIE') } 
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}


