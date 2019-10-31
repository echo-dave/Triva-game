$(document).ready(function () {

    //questions and answers object
    let qaObject = {
        questions: ["Who wrote Hamlet?", "How many states are there in the U.S.?", "When was Alaska sold to the U.S.?", "Who invented the telephone?"],
        options: [
            ["Allie McBeal", "Tom Clancy", "Heraldo Riviera", "Shakespear"],
            [13, 50, 49, 47],
            [1867, 1994, 1776, 1819],
            ["Edison", "Bell","Galileo", "Da Vinci"]
        ],
        Answers: [3, 1, 1, 2]

    };

    //correct answer count
    let correctCount = 0;
    let wrongCount = 0;
    //index of question
    let qCount = 0;

    //answer index
    let answer = "";

    //timer display counter
    let counter = 0;
    
    //question builder
    function startQuestions() {
        $('.question').html(qaObject.questions[qCount]);
            $('li').remove();
        for (let i = 0; i < qaObject.options[qCount].length; i++) {
            $('ul.options').append(`<li value="${i}">${qaObject.options[qCount][i]}</li>`)
        }
        let answer = qaObject.Answers[qCount];
        qCount += 1;
        counter = 30;
        questionTimer()
        countDown();
        $('li').on("click", function () {
            console.log($(this).attr("value"));
            if ($(this).attr("value") == answer)  {
                $(this).addClass("answer");
                correctCount = correctCount + 1;
                answerTimer();
            } 
            else {
                $(this).addClass("wrong");
                wrongCount += 1;
                $(`li[value="${answer}"]`).addClass("answer");
                $('li').off();
                answerTimer();
            }
            // clearInterval(qTimer);
             clearInterval(timerCounter);


        });

        
    }

    //question timer
    function questionTimer() {
        qTimer = setTimeout(timeout, 30000);
    }
        function timeout() {
            wrongCount += 1;
            // some how this call add isn't working anymore
            $(`li[value="${answer}"]`).addClass("answer");

            // clearInterval(qTimer);
            console.log("wrong " + wrongCount);
            answerTimer();
            

        }

    
//10s timer after wrong answer
    function answerTimer() {
        if (qCount <  qaObject.options.length) {
            aTimer = setTimeout(startQuestions, 3000);
        }
        else {
            $('.wrap').prepend(`<h1>correct: ${correctCount}, wrong: ${wrongCount}</ha>`)
        }
    }
    
    $('#start').on('click', function () {

        startQuestions();
        questionTimer;

        $('#start').off();
        $('#start').css("display","none");
    });

//timer display
function countDown() {
    timerCounter = setInterval(count, 1000);

}
//timer display decrement
function count() {
    counter -= 1;
    $('#count').html(counter);
    if (counter <= 0) {
        clearInterval(timerCounter)
    }
}
    


});