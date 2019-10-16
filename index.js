//Select 10 questions randomly from the questions array.
const chooseQuestions = qA.sort(() => { return (Math.random() - Math.random()) }).slice(0, 10);
let scorePoint = 0;
let questionIndex = 0;

const gradeQuestion = (ans) => {

    if (ans === chooseQuestions[questionIndex].answer) {
        //Increase scorePoint by 1 if correct answer is selected.
        scorePoint += 1;

    }
    //Increase question number and move to next question.
    questionIndex += 1;
}

const renderSuccess = () => {

    $('.quizNumber').text('');
    $('.quizQuestion ').text('');
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');
    if (scorePoint < 5) {
        $('<p>Olodo! Take the Quiz Again.</p>').appendTo('.quizQuestion');
        $('.option-container').text('Your Score is ' + (scorePoint) + '/' + '10');
        $('<img src="https://media.giphy.com/media/d8KOpGnzaAEI7JiVUp/giphy.gif">').appendTo('.success-image');

    } else if (scorePoint < 8) {
        $('<p>Average, You need to know more!</p>').appendTo('.quizQuestion');
        $('.option-container').text('Your Score is ' + (scorePoint) + '/' + '10');
        $('<img src="https://media.giphy.com/media/xTiQyBOIQe5cgiyUPS/giphy.gif">').appendTo('.success-image');

    } else {
        $('<p>Congrats, You\'re a Genius!</p>').appendTo('.quizQuestion');
        $('.option-container').text('Your Score is ' + (scorePoint) + '/' + '10');
        $('<img src="https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy.gif">').appendTo('.success-image');
    }
}

const showQuestion = (qIndex) => {
    let question = chooseQuestions[qIndex];
    $('.quizNumber').text('Que' + (qIndex + 1));
    $('.quizQuestion').text(question.question);
    $('.option1').text('');
    $('.option2').text('');
    $('.option3').text('');
    $('.option4').text('');

    question.option.forEach((element, i) => {
        let opt = '.option' + (i + 1);
        let radioButton = $('<input type="radio" name="answer" value=' + element + '  /> + ');
        let radioLabel = $('<label for=' + element + '>' + element + '</label> +  ');
        radioButton.appendTo(opt);
        radioLabel.appendTo(opt);

    });

    $("input:radio[name='answer']").click(function() {
        //On click, let question and option change to the next. 
        gradeQuestion(this.value);
        //If number of question answered is 10, render success.
        if (questionIndex == (chooseQuestions.length)) {
            renderSuccess();
        } else {
            showQuestion(questionIndex);
        }

    })
}


$(document).ready(function() {
    showQuestion(questionIndex);
});