player1name=localStorage.getItem("name1");
player2name=localStorage.getItem("name2");

player1_score=0;
player2_score=0;

document.getElementById("p1name").innerHTML=player1name + ":";
document.getElementById("p2name").innerHTML=player2name + ":";

document.getElementById("p1score").innerHTML=player1_score;
document.getElementById("p2score").innerHTML=player2_score;

document.getElementById("player_ques").innerHTML="Question turn="+player1name;
document.getElementById("player_ans").innerHTML="Answer turn="+player2name;

function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);



question_number="<h4>" + number1 + "X" + number2 + "</h4>";
input_box= "<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";
}
ques_turn="p1";
ans_turn="p2"

function check(){
    get_answer=document.getElementById("input_check_box").value;
    

    if(get_answer == actual_answer){
        if(ans_turn == "p1"){
            player1_score=player1_score + 1;
            document.getElementById("p1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score + 1;
            document.getElementById("p2score").innerHTML=player2_score;
        }
    }
    if(ques_turn == "p1"){
        ques_turn="p2";
        document.getElementById("player_ques").innerHTML="Question turn:"+player2name;
    }
    else{
        ques_turn="p1";
        document.getElementById("player_ques").innerHTML="Question turn:"+player1name;
    }
    if(ans_turn == "p1"){
        ans_turn="p2";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player2name;
    }
    else{
        ans_turn="p1";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player1name;
    }
    document.getElementById("output").innerHTML="";

}