let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if( answer.value == ' ' || attempt.value == ' '){
        setHiddenFields();
    }
    if(!validateInput(input.value)) {
        return false;
    }
    else{
        attempt++;
    }
    if(getResults(input.value) == true)
    {
        setMessage("You Win! :)");
    }
    else if(getResults(input.value)== false && attempt >= 10){
        setMessage("You Lose! :(");
    }
    else {
        setMessage("Incorrect, try again.");
    }
}
function setHiddenFields(){
    answer = Math.floor(Math.random()*10000);
    while(answer.value.length < 4){
        answer.value = 0 + answer.value.toString();
    }
 
}
//implement new functions here
function setMessage(input){
    document.getElementById('message').innerHTML = input;
    
}

function validateInput(input){
    if(input.length == 4){
        return true;
    }else{
        setMessage('Guesses must be exactly 4 characters long.');
       return false;
    }

}

function getResults(input) {
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (i = 0; i < input.length; i++) {
      if (input.charAt(i) == answer.value.charAt(i)) {
        html += '<span class="glyphicon glyphicon-ok"></span>';
      } else if (answer.value.indexOf(input.charAt(i)) > -1) {
        html += '<span class="glyphicon glyphicon-transfer"></span>';
      } else {
        html += '<span class="glyphicon glyphicon-remove"></span>';
      }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;
  
    if (input == answer.value) {
      return true;
    } else {
      return false;
    }
  }
function showAnswer(winner){
    let code = document.getElementById('code');
    code.innerHTML  = answer.value;

    if(winner) {
        code.className += "success";
    } else{
        code.className += "failure";
    }
}
function showReplay(){
    document.getElementById('replay-div').style.display = "block";
    document.getElementById('guessing-div').style.display = "none";
    
    
     }
  