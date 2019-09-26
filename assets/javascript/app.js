// $(document).ready(function(){
console.log("hello world");

// create variables for game start
var timer=10;
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

    startGame();
    

});

//start game 
function startGame(){
    correctAnswers=0;
    wrongAnswers=0;
    timer=10;

    //getting questions to pop up
    for(var i = 0;i=questions.length;i++){
        var question = Object.values(questions);
    $("#question").text(question);
        

    }
    
    
   
    tenSecondTimer();
}

//function that will run in 10 seconds

function tenSecondTimer(){
    
    
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $(".countdownTimer").html("<h2>Time Remaining: "+ timer +" seconds</h2>");

}

function decrement(){
    timer--;

    if(timer===0){

    }

    tenSecondTimer();
}












// });
