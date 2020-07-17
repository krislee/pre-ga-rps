const player = {
    currentChoice: null
  };
  const computer = {
    currentChoice: null
  };
  const options = ["Lapis", "Papyrus", "Scalpellus"];
  function computerChooses(){
    return computer.currentChoice = options[Math.floor(Math.random()*options.length)]
  };
  
  const div = document.querySelector('div.para');
  const resetButton = document.querySelector('#reset');
  const buttonAllOptions = document.querySelectorAll('.buttons');
  const para = document.createElement('p');
  const para2 = document.createElement('p');
  let playerPoints = 0;
  let computerPoints = 0;
  
  function playerChooses(){
    for(let i=0; i<buttonAllOptions.length; i++){
      buttonAllOptions[i].addEventListener ('click',function(e){
        player.currentChoice = options[i]
        return player.currentChoice
      })
    }
  };
  
  function compareChoices(){
  if (computer.currentChoice === player.currentChoice){
    displayResults(`Tie! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`)
    displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
  } else if(computer.currentChoice === options[0]){
      if(player.currentChoice === options[1]){
        ++playerPoints
        displayResults(`The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } else {
        ++computerPoints
        displayResults(`The computer wins! The computer chose ${computer.currentChoice} and the player ${player.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } 
  } else if (computer.currentChoice === options[1]){
      if(player.currentChoice === options[2]){
        ++playerPoints
        displayResults(`The player wins! The computer chose ${computer.currentChoice} and the player chose ${player.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } else {
        ++computerPoints
        displayResults(`The computer wins! The computer chose ${computer.currentChoice} and the player ${player.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } 
  } else if (computer.currentChoice === options[2]){
      if(player.currentChoice === options[0]){
        ++playerPoints
        displayResults(`The player wins! The computer chose ${computer.currentChoice} and the player chose ${computer.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } else {
        ++computerPoints
        displayResults(`The computer wins! The computer chose ${computer.currentChoice} and the player chose ${computer.currentChoice}.`)
        displayResults2(`The player has ${playerPoints} points. The computer has ${computerPoints} points.`)
      } 
  }
  };
  
  function displayResults(result){
    // can use the following if we wanted to always keep the paragraphs:
    //const para = document.createElement('p'); 
    para.textContent = (result);
    para.setAttribute('class', 'results')
    div.append(para);
  };
  
  function displayResults2(result){
    // can use the following if we wanted to always keep the paragraphs: 
    //const para = document.createElement('p');
    para2.textContent = (result);
    para2.setAttribute('class', 'results2')
    div.append(para2);
  };
  
  function reset(){
    playerPoints = 0;
    computerPoints = 0;
    div.innerText = ""
  };
  
  function playGame(){
    playerChooses()
    for(let i=0; i<buttonAllOptions.length; i++){
      buttonAllOptions[i].addEventListener ('click',function(e){
        computerChooses();
        if(playerPoints >=5 ){
          //displayResults2("");
          displayResults("Game ends. Player wins");
          //add a class to make the text bigger and bolder?
        } else if (computerPoints >= 5){
          //displayResults2("");
          displayResults("Game ends. Computer wins");
        } else return compareChoices();
      })
    } 
    resetButton.onclick = reset
  };
  
  playGame();