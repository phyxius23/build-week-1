/**
 * MATERIALE FORNITO DALLA SCUOLA
 * ------------------------------------------------------------------------
 */
const questions = [
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
         "Central Process Unit",
         "Computer Personal Unit",
         "Central Processor Unit",
      ],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
         "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
         "Counter Strike: Source",
         "Corrective Style Sheet",
         "Computer Style Sheet",
      ],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
         "Ice Cream Sandwich",
         "Jelly Bean",
         "Marshmallow",
      ],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
   },
   {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
   },
   {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
         "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"]
   },
];

// variabili dove salvo le risposte corrette e la quantita di domande
let anwersCorrect = "";
let numQuestions = 7;

// array con all'interno delle domande random
let requests = randomQuestions(numQuestions);

// avvio il quiz
let start = document.querySelector('.start');
let indice = 0;


/**
 * funzione che sceglie random le domande dall'array questions fornito
 * ------------------------------------------------------------------------
 */
function randomQuestions(elements){

   let chosenQuestions = [];
   let usedQuestions = [];

   while(chosenQuestions.length < elements){

      let randomIndex = Math.floor(Math.random() * questions.length);

      if(!usedQuestions.includes(randomIndex)){

         usedQuestions.push(randomIndex);
         chosenQuestions.push(questions[randomIndex]);
      }
   }

   return chosenQuestions;
}


/**
 * funzione che unisce le risposte sbagliate e corrette e le ritorna random
 * ------------------------------------------------------------------------
 */
function randomAnswers(singleObj){

   let chosenAnswers = [];
   let usedAnswers = [];
   let allAnswers = singleObj.incorrect_answers;

   //array contenente tutte le possibili risposte
   allAnswers.push(singleObj.correct_answer);
   
   // ciclo fino a quando non ho creato una variabile contenente le risposte disposte random
   while(chosenAnswers.length < allAnswers.length){

      let randomIndex = Math.floor(Math.random() * allAnswers.length);

      if(!usedAnswers.includes(randomIndex)){

         usedAnswers.push(randomIndex);
         chosenAnswers.push(allAnswers[randomIndex]);
      }
   }

   return chosenAnswers;
}


/**
 * inizio il quiz al click su button start
 * ------------------------------------------------------------------------
 */
start.addEventListener('click',()=>{
   newQuestion(requests[indice], indice);
   indice++;

   document.querySelector('.start').classList.add('dnone');
   document.querySelector('.next').classList.remove('dnone');
})


/**
 * passo alla domanda successiva al click su button next
 * ------------------------------------------------------------------------
 */
let next = document.querySelector('.next');

next.addEventListener('click',function(){


   if(indice < requests.length){
      newQuestion(requests[indice]);
      indice++;
   }
   if(indice == requests.length){
      next.innerText = 'Passa ai risultati';
      return //valutare se il ramo false è necessario
   }

   console.dir(next)
})


/**
 * Fn che crea l'html di una nuova slide question
 * ------------------------------------------------------------------------
 */
function newQuestion(answerObj){
   // if(indice >= 1){
   //    let rispostaChecked = document.querySelector('input:checked').value;

   //    console.log(rispostaChecked);
   //    console.log(answerObj.correct_answer);
      
   //    if(rispostaChecked === answerObj.correct_answer){
   //       // anwersCorrect += ".";
   //       console.dir("test");
   //    }
   // }

   // ciao Michele, mi sono impantanato. Devo selezionare 

   
   
   let target = document.querySelector('#target');
   let html = document.querySelector('#template .slide').cloneNode(true);

   let randomAnswersObj = randomAnswers(answerObj);

   target.innerHTML = '';
   
   //seleziono gli elementi
   let titleDOM = html.querySelector('.title');
   let answersDOM = html.querySelector('.answers');
   let questionCounter = html.querySelector('.question-counter');

   //inserisco contenuto
   titleDOM.textContent = answerObj.question;


   for(let risp of randomAnswersObj){
      let answerClone = html.querySelector('.answer').cloneNode();
      let inputClone = html.querySelector('.answer .input').cloneNode();
      let optionClone = html.querySelector('.answer .option').cloneNode();

      inputClone.setAttribute('id', risp.toLowerCase());
      inputClone.setAttribute('value', risp.toLowerCase());

      optionClone.textContent = risp;
      optionClone.setAttribute('for', risp.toLowerCase());

      answerClone.append(inputClone);
      answerClone.append(optionClone);
      answersDOM.append(answerClone);
   }
   html.querySelector('.answers .answer').remove(); //rimuovo la prima answer
   html.querySelector('.slide .question-counter').remove(); //rimuovo la prima question-counter

   questionCounter.innerHTML = `Question ${indice+1}<span>/${requests.length}</span>`;

   console.dir(html)

   html.append(questionCounter);
   target.append(html);

   if(indice >= 1){
      let risposta = "";
      // let risposte = document.querySelectorAll('.answer input');
      console.log(html.querySelectorAll('.answers input'));
      html.querySelectorAll('.answers input:checked').addEventListener('click', function(){
         console.log("test");
      })

      // for(let answer of risposte){
      //    answer.addEventListener('click', function(){
      //       if(answer.checked === true){

      //          console.log(answer.value);
      //       }
      //    })
      // }
      // risposte.addEventListener('click', function(){
      //    for(let answer of risposte){
      //       if(answer.value){

      //          console.log(answer.value);
      //       }
      //    }
      // })
   }

}


/**
 * Fn che crea l'html di una nuova slide question
 * ------------------------------------------------------------------------
 */



/**
 * aggiungere funzione che:
 * 1)  testa se ho scelto una input type radio
 * 2a) se si, al click, passi il valore della risposta dell'utente ad una
 *     variabile insieme al valore corretto
 * 2b) se no, riesegua il punto 1 fino a conferma
 * 3)  aggiungere timer che allo scadere passa alla domanda successiva
 * ------------------------------------------------------------------------
 */
