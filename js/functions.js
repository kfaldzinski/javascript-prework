function printMessage(msg, elementId){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(elementId).appendChild(div);
}

function clearMessages(elementId){
	document.getElementById(elementId).innerHTML = '';
}
function calculateResult(computerMove, playerMove){

	return 'Zagrałem ' + computerMove + ', a Ty ' + playerMove;	
}