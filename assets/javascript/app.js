$(document).ready(function(){
console.log("hello world");

// create variables for game start
var timer=10;
var questionNumber=0;
var correctAnswers=0;
var wrongAnswers=0;
var intervalId;

// questions and answers
var triviaQuestions=[
    {
        question: "What year did Seattle lose the Super Sonics?",
        options: [2005,2010,2008,2009],
        answer: 2008
    },

    {
        question:"Who was the leading scorer for the last two years? (2017-2019)",
        options: ["James Harden","Lebron James","Russel Westbrook","Kevin Durant"],
        answer: "James Harden"
    },

    {
        question: "Who leads the league in assists for the 2018/2019 season?",
        options: ["Trae Young","Russel Westbrook","Stephen Curry","Chris Paul"],
        answer: "Russel Westbrook"
    },

    {
        question: "How many championships does Michael Jordan have?",
        options: [3,5,7,6],
        answer: 6
    },

    {
        question: "How many championships does Lebron James have?",
        options: [3,2,4,6],
        answer: 3
    },

    {
        question: "How many championships does Kobe Bryant have?",
        options: [3,6,4,5],
        answer: 5
    },

    {
        question: "How many NBA teams are there?",
        options: [20,25,30,35],
        answer: 30
    },

    {
        question: "Who leads the league in all-time scoring?",
        options: ["Kobe Bryant","Lebron James","Karl Malone","Kareem Abdul-Jabbar"],
        answer: "Kareem Abdul-Jabbar"
    },
];



//function clicking start button to start game
$(".startButton").click(function(){
    //clearing div
    console.log("button clicked");

    $(".questionDiv").remove();

    loadQuestion();
    


    

});





// *******************************FUNCTIONS************************
//function that will run in 10 seconds

function tenSecondTimer(){
    
    
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $(".countdownTimer").html("<p>Time Remaining: "+ timer +" seconds</p>");

}

function timesUp(){
    clearInterval(intervalId);
    wrongAnswers++;
}


function decrement(){
    timer--;

    tenSecondTimer();

    if(timer===0){
        timesUp();
        nextQuestion();

    }
}




function loadQuestion(){
    //pulling question from array with index value of questionNumber
    var currentQuestion = triviaQuestions[questionNumber].question;
    //pulling choices
    var currentChoices = triviaQuestions[questionNumber].options;
    //pulling answers
    var currentAnswer = triviaQuestions[questionNumber].answer;

    //reset timer each time question is loaded
    timer=10;

    tenSecondTimer();


    $("#question").text(currentQuestion);
    $(".choices").html(loadChoices(currentChoices));
}




function loadChoices(currentChoices){
    var result = ' ' ;
    
    for (var i = 0; i < currentChoices.length; i++){
        result += `<button id="choice" data-answer =`+currentChoices[i]+ `>` + currentChoices[i] + `</button>`;
        $("#choice").attr('data-answer', currentChoices[i]);
    }
    return result;

}

function nextQuestion(){

    //checking to see if theres no more questions
    var triviaCheck = (triviaQuestions.length-1)===questionNumber;// (8-1) === questionNumber(last question is [7])

    if(triviaCheck){
        console.log("game over");
        results();

    }else {
    questionNumber++;
    loadQuestion();

    }
    

}

function results(){
    var result = "<p>You got "+correctAnswers+" question(s) correct!</p> <p>You got "+ wrongAnswers+" question(s) wrong!</p> <button id='retry'>Retry</button>";
    $(".choices").html(result);
};


//checking if user picks the right answer

$(document).on("click", "#choice", function(){
    var dataAnswer = $(this).attr("data-answer");
    var answer = triviaQuestions[questionNumber].answer;
    console.log(dataAnswer);

    if(answer==dataAnswer){
        console.log(true);
        correctAnswers++;
        nextQuestion();
    }else{
        console.log(false);
        wrongAnswers++;

        nextQuestion();

    }
    
});

//restart button
$(document).on("click","#retry",function(){
    timer=10;
    questionNumber=0;
    correctAnswers=0;
    wrongAnswers=0;


    loadQuestion();
    
});









});
