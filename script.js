function submitAnswers(){
	var total = 10;
	var score= 0;
	
	//get user input
	
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
		alert('잊지 마세요,먼저 '+i+'번 문제를 답하세요 \n다시 확인하고 SUBMIT 버튼 누르면 돼요');
		return false;
	}
	
	}
	//set Correct Answers
	var answers = ["a","d","c","c","b","c","b","c","d","a"];
	
	//check answers
	for(i = 1; i <= total;i++){
	if(eval('q'+i) == answers[i - 1]){
		score++;
	}
	}
	
	//display result
	var results = document.getElementById('results');
	results.innerHTML = '<h3>Anda mendapat nilai <span>'+score+'</span> dari <span>'+total+'</span> Soal</h3>';
	
	alert('Jumlah Benar '+score+' dari '+total+' soal');
	
	return false;
}