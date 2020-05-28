
function check(){
	window.scrollTo(0,0);
  document.getElementById('timetime').style.display="none";
	var ques1 = document.quiz.ques1.value;
	var ques2 = document.quiz.ques2.value;
	var ques3 = document.quiz.ques3.value;
	var ques4 = document.quiz.ques4.value;
	var ques5 = document.quiz.ques5.value;
	var ques6 = document.quiz.ques6.value;
	var ques7 = document.quiz.ques7.value;
	var ques8 = document.quiz.ques8.value;
	var ques9 = document.quiz.ques9.value;
	var ques10 = document.quiz.ques10.value;
	var message = ["#Answer for first question is 12 March 2015.<br>","#Answer for second question is Miroslave Klose.<br>","#Answer for third question is Episkyros.<br>","#Answer for fourth question is Luzhniki Stadium.<br>","#Answer for fifth question is Tottenham Hotspur.<br>","#Answer for sixth question is Russia and Saudi Arabia.<br>","#Answer for seventh question is Uruguay.<br>","#Answer for eigith is Brazil.<br>","#Answer for ninth question is Lucien Laurent.<br>","#Answer for tenth question is Bert Patenaude."];
	var ans= " ";
	var inc =0;
	var dic =0;
	var correct = 0;
	var incorret = 0;


	if (ques1 == "12 March 2015") {
		correct++;
		inc++;
}
	if (ques2 == "Miroslave Klose") {
		correct++;
		inc++;
}	
	if (ques3 == "Episkyros") {
		correct++;
		inc++;
	}
	
	if (ques4 == "Luzhniki Stadium") {
		correct++;
		inc++;
}
	if (ques5 == "Tottenham Hotspur") {
		correct++;
		inc++;
}	
	if (ques6 == "Russia and Saudi Arabia") {
		correct++;
		inc++;
	}
	

	if (ques7 == "Uruguay") {
		correct++;
		inc++;
}
	if (ques8 == " Brazil") {
		correct++;
		inc++;
}	
	if (ques9 == "Lucien Laurent") {
		correct++;
		inc++;
	}

	if (ques10 == " Bert Patenaude") {
		correct++;
		inc++;
}
	
	if ( ques1 == " 14 April 2015" || ques1 == "19 May 2015" || ques1== "10 March 2015") {
		dic++;
		ans += message[0];
		incorret++;
		
	}

	if (ques2 == "Jurgen Klinsmann" || ques2 == "Meradona" || ques2 == "Pele") {
		dic++;
		ans += message[1];
		incorret++;
	}

	if (ques3 == "kemari"|| ques3 == "Cuju" || ques3 =="Inuit") {
		dic++;
		ans += message[2];
		incorret++;
	}
	
	if(ques4 == "Krestovsky Stadium" || ques4 == "Kaliningrad Stadium" || ques4 == "Central Stadium"){
		dic++;
		ans += message[3];
		incorret++;
	}
	
	if(ques5 == "Newcastle" || ques5 == "Southampton" || ques5 == "Lincoln City"){
		dic++;
		ans += message[4];
		incorret++;
	}
	
	if(ques6 == "Russia and Egypt" || ques6 == "Russia and Uruguay" || ques6 == "Poland and Russia"){
		dic++;
		ans += message[5];
		incorret++; 
	}
	
	if(ques7 == "Germany" || ques7 == "Argentina" || ques6 =="Belgium"){
		dic++;
		ans += message[6];
		incorret++;
	}
	
	if(ques8 == "Russia" || ques8 == "Germany" || ques8 == "France" ){
		dic++;
		ans += message[7];
		incorret++;
	}
	
	if(ques9 == "Johino" || ques9 == "Bert Patenaude" || ques9 ==" Pele"){
		dic++;
		ans += message[8];
		incorret++;
	}
	
	if(ques10 =="Johino" || ques10 == "Lucien Laurent" || ques10 == "Pele" ){
		dic++;
		ans += message[9];
		incorret++;
		
		
	}
	
	
	  inc += inc;
	  var totalMarks =0 ;
	if(inc > dic){
		 totalMarks = inc - dic;
	 }
	
	 if(inc < dic){
		 totalMarks = 0;	 
	 } 
	  
	if(totalMarks == 10){
		document.getElementById("change").style.backgroundColor = "green";
		document.getElementById("total_marks").innerHTML = "Total marks is "  + totalMarks ;
		
	}
	
	
	if(totalMarks <= 5){
    document.getElementById("change").style.backgroundColor = "red";
	document.getElementById("total_marks").innerHTML = "Total marks is "  + totalMarks ;
	}
	 
	if(totalMarks > 5 && totalMarks < 10 ){
		document.getElementById("change").style.backgroundcolor = "blue";
		document.getElementById("total_marks").innerHTML = "Total marks is "  + totalMarks ;
	}
	document.getElementById("quiz").style.display = "none";
	document.getElementById("after_submit").style.display = "block";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct answers.";
	document.getElementById("number_incorrect").innerHTML = "You got " + incorret + " incorrect answers. ";
	document.getElementById("message").innerHTML = ans; 
}

function counterStart(){
document.getElementById("timer").innerHTML = "Time left ="+
  00 + ":" + 25	;
startTimer();
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  
  if(s==0)
		{
			check();
		}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0)
  {sec = "0" + sec;} // add zero in front of numbers < 10
  if (sec < 0)
  {sec = "59";}
  return sec;
}