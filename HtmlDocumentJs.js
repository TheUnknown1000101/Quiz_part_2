function buttonFunction() {

	//document.getElementsByTagName("a")[0].href = "https://www.youtube.com/watch?v=j7qVcc6X8g4";

	//let ul1 = document.createElement("ul");
	//document.body.appendChild(ul1);
	//let li1 = document.createElement("li");
	//li1.innerHTML = "List element 1";
	//document.getElementsByTagName("ul")[0].appendChild(li1);

	//let x = 1 + 1;
	//let li2 = document.createElement("li");
	//li2.innerHTML = x.toString();
	//ul1.appendChild(li2);
	
	//score total
	let sum = 0;
	
	let textsum = 0;
	
	//textboxes
	let text1 = document.getElementById("enter1").value;
	console.log(text1);
	
	let text2 = document.getElementById("enter2").value;
	console.log(text2);
	
	//checkboxes
	let checkbox1 = document.querySelector("#checkbox1").checked;
	console.log(checkbox1);
	
	let checkbox2 = document.querySelector("#checkbox2").checked;
	console.log(checkbox2);
	
	let checkbox3 = document.querySelector("#checkbox3").checked;
	console.log(checkbox3);
	
	let checkbox4 = document.querySelector("#checkbox4").checked;
	console.log(checkbox4);
	
	//radio
	let radio1 = document.querySelector("#radio1").checked;
	console.log(radio1);
	
	let radio2 = document.querySelector("#radio2").checked;
	console.log(radio2);
	
	let radio3 = document.querySelector("#radio3").checked;
	console.log(radio1);
	
	let radio4 = document.querySelector("#purple1").checked;
	console.log(radio4);
	
	let radio5 = document.querySelector("#purple2").checked;
	console.log(radio5);
	
	let radio6 = document.querySelector("#purple3").checked;
	console.log(radio6);
	
	if (text1) {
		sum = sum +1;
	}
	if (text2 == ("green") || text2 == ("Green")) {
		sum = sum +1;
	}
	if (checkbox3){
		sum = sum +1;
	}
	if (radio1) {
		sum = sum +1;
	}
	if (radio4) {
		sum = sum +2;
	}
	if (radio5) {
		sum = sum +1;
	}
	console.log(sum);
	console.log("/6");
	
	//display score and stuff
	//document.getElementById("p1").innerHTML = "Hello World!";
	document.getElementsByClassName("paragraph")[0].innerHTML = sum.toString() + "/6";
	document.getElementsByClassName("paragraph")[1].innerHTML = "Congratulations you have finished this little quiz.";
	if (sum == 6) {
		document.getElementsByClassName("paragraph")[2].innerHTML = "Wow! You finished with a perfect score.";
	} else if ((sum >= 3) && (sum != 0)) { 
		document.getElementsByClassName("paragraph")[2].innerHTML = "You have passed the test.";
	} else {
		document.getElementsByClassName("paragraph")[2].innerHTML = "You have failed the test, you suck.";
	}
	if (text2 == ("Green") || text2 == ("green")) {
		textsum = textsum + 1;
	}
	document.getElementsByClassName("paragraph")[3].innerHTML = "Input Questions"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ textsum.toString() +"/2"+"&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The first question is a freebie question, but the following question is green.";
	if (text2) {
		document.getElementsByClassName("paragraph")[3].innerHTML = "Input Questions"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ textsum.toString() +"/2"+"&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The first question is a freebie question, but the following question is green.";
	}
	if (text1) {
		textsum = textsum + 1;
		document.getElementsByClassName("paragraph")[3].innerHTML = "Input Questions"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ textsum.toString() +"/2"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "(The colour "+text1+" is quite an interesting choice.)"+"&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The first question is a freebie question, but the answer to the following question is green.";
	}
	if (checkbox3) {
		document.getElementsByClassName("paragraph")[4].innerHTML = "Which of these are the background colour of this page?"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "1/1"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The correct answer is Blue.";
	} else {
		document.getElementsByClassName("paragraph")[4].innerHTML = "Which of these are the background colour of this page?"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "0/1"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The correct answer is Blue.";
	}
	if (radio1) {
		document.getElementsByClassName("paragraph")[5].innerHTML = 'What colour is "My header"?'+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "1/1"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The correct answer is Black.";
	} else {
		document.getElementsByClassName("paragraph")[5].innerHTML = 'What colour is "My header"?'+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "0/1"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The correct answer is Black.";
	}
	document.getElementsByClassName("paragraph")[6].innerHTML = "This is purple"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "0/2"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The best answer is yes.";
	if (radio4) {
		document.getElementsByClassName("paragraph")[6].innerHTML = "This is purple"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "2/2"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The best answer is yes.";
	}
	if (radio5) {
		document.getElementsByClassName("paragraph")[6].innerHTML = "This is purple"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "1/2"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+ "&nbsp;"+" The best answer is yes.";
	}



}












