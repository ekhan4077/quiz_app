const quizData = [
    {
        question : 'What is the capital of India?' ,
        a  : 'New Delhi' ,
        b : 'Chennai' ,
        c : 'Srinagar' ,
        d : 'Shilong' ,
        correct : 'a'
    }, 
    {
        question : 'What is the national fruit of India?' ,
        a : 'Peas' ,
        b : 'Pineapple' ,
        c : 'Mango' ,
        d : 'Guava' ,
        correct : 'c'
    },
    {
        question : 'Who is the Prime Minister of India?' ,
        a : 'Narendra Modi' ,
        b : 'Manmohan Singh' ,
        c : 'AB Bajpayee' ,
        d : 'Mamta Banarjee' ,
        correct : 'a'
    },
    {  question : 'Who killed Mahatma Gandhi?' ,
        a : 'Merlyn' ,
        b : 'Godse' ,
        c : 'Krishnamurty' ,
        d : 'Narendra Modi' ,
        correct : 'b'    
    },
    {
        question : 'Who created Python?' ,
        a : 'ST Huing' ,
        b : 'Guido Van Rossum' ,
        c : 'David Jeffery' ,
        d : 'Govind Jha' ,
        correct : 'b'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
let answer = undefined;
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
     
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id;

        }
    });
    return answer;
}

function deselectAnswers(){
     answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', ()=>{
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You Scored ${score} out of ${quizData.length}.</h2> <button onclick= 'location.reload()'>Play Again!</button>`
        }
 
    }

});
