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
let answerCorrect = [];
let userAnswer = [];
let userAnswersCorrect = "";
let numberQuestions = 7;

// array con all'interno delle domande random
let requests = randomQuestions(numberQuestions);


/**
 * se input:checked aggiungo classe btn-start-accept che mi rende btn-start con opacity 1
 * ------------------------------------------------------------------------
 */
let checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('click', function(){
   document.querySelector('.btn-start').classList.toggle('btn-start-accept');
})


/**
 * Fn che sceglie random le domande dall'array questions fornito
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
 * Fn che unisce le risposte sbagliate e corrette e le ritorna random
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
 * inizio il quiz al click su .btn-start
 * ------------------------------------------------------------------------
 */
let start = document.querySelector('.btn-start');
let indice = 0;

start.addEventListener('click',()=>{

   // se input:checked allora posso eseguire il codice che mi porta al quiz
   if(document.querySelector('#checkbox').checked){

      newQuestion(requests[indice], indice);
   
      indice++;
   
      document.querySelector('.btn-start').classList.add('dnone');
      document.querySelector('.btn-next').classList.remove('dnone');   
   }else{
      console.log('Devi accettare le condizioni!'); //sostituire console.log() coon un messaggio nel browser
   }

})


/**
 * passo alla domanda successiva al click su button next
 * ------------------------------------------------------------------------
 */
let next = document.querySelector('.btn-next');
// let btnResult; //punto a .btn-result => controllare se si può eliminare


next.addEventListener('click',function(){

   if(indice < requests.length){
      newQuestion(requests[indice]);
      indice++;
   }
   
   //indice inferiore a 7 and indice diverso da 7
   // if(indice < requests.length && indice != requests.length){
   //    newQuestion(requests[indice]);
   // }

   console.log(next.classList.contains("btn-start-rate"));

   // if(indice == requests.length && !next.classList.contains("btn-start-rate")){
   //    next.innerText = 'Passa ai risultati';
   //    next.classList.add('btn-start-rate');
   // }else if(indice == requests.length && next.classList.contains("btn-start-rate")){
   //    next.textContent = 'Rate us';
   //    next.classList.remove('btn-next');
   //    next.classList.add('btn-rate');
   //    checkAnswers();
   //    viewResults();
   // }else if(indice == requests.length && next.classList.contains("btn-start-feed")){
   //    viewFeedback();
   // }

   if(indice == requests.length && next.classList.contains("btn-start-next")){
      next.innerText = 'Passa ai risultati';
      next.classList.remove('btn-start-next');
      next.classList.add('btn-start-rate');
   }else if(indice == requests.length && next.classList.contains("btn-start-rate")){
      next.textContent = 'Rate us';
      next.classList.add('btn-rate btn-start-feed');
      next.classList.remove('btn-start-rate');
      checkAnswers();
      viewResults();
   }else if(indice == requests.length && next.classList.contains("btn-start-feed")){
      viewFeedback();
   }


   // if(indice == requests.length){
   //    next.innerText = 'Passa ai risultati';
   //    next.classList.add('btn-start-rate');
   //    return;
   // }
   // if(next.classList.contains("btn-start-rate")){
   //       checkAnswers();
   //       viewResults(); 
   // }


   // if(next.classList.contains("btn-start-rate")){
   //    console.log('next contiene una classe btn-rate');
   //    checkAnswers();
   //    viewResults();
   // }

         
   // if(indice > requests.length){
   //    next.textContent = 'Rate us';
   //    next.classList.remove('btn-next');
   //    next.classList.add('btn-rate');
   //    checkAnswers();
   //    viewResults();
   // }

   // devo avviare la funzione che visualizza la pagina di feedback, come posso fare?
   // if(next.classList.contains("btn-rate")){
   //    console.log('next contiene una classe btn-rate');
   //    viewFeedback();
   // }

})


/**
 * Fn che crea l'html di una nuova slide question
 * ------------------------------------------------------------------------
 */
function newQuestion(answerObj){
   
   let target = document.querySelector('#target');
   let html = document.querySelector('#template .slide').cloneNode(true);

   let randomAnswersObj = randomAnswers(answerObj);

   let idCounter = 0; //creo un contatore che utilizzerò per rendere univoco l'id di input e il for di label
   
   target.innerHTML = ''; //elimino il codice html contenuto nell'elemento #target
   
   //seleziono gli elementi
   let titleDOM = html.querySelector('.title');
   let answersDOM = html.querySelector('.answers');
   let questionCounter = html.querySelector('.question-counter');
   
   titleDOM.textContent = answerObj.question; //inserisco la domanda all'interno del titolo
   
   //ciclo l'array contenente le risposte e mi creo la struttura html
   for(let risp of randomAnswersObj){
      idCounter++;
      let answerClone = html.querySelector('.answer').cloneNode();
      let inputClone = html.querySelector('.answer .input').cloneNode();
      let optionClone = html.querySelector('.answer .option').cloneNode();
      
      inputClone.setAttribute('id', `input${idCounter}`);
      inputClone.setAttribute('value', risp);
      
      optionClone.textContent = risp;
      optionClone.setAttribute('for', `input${idCounter}`);
      
      answerClone.append(inputClone);
      answerClone.append(optionClone);
      answersDOM.append(answerClone);
   }

   // rimuovo gli elementi vuoti che ho usato per clonarli
   html.querySelector('.answer').remove(); //rimuovo la prima answer
   html.querySelector('.slide .question-counter').remove(); //rimuovo la prima question-counter
   
   questionCounter.innerHTML = `Question ${indice+1}<span>/${requests.length}</span>`;
   
   html.append(questionCounter); //aggiungo come ultimo figlio l'elemento questionCounter
   target.append(html); //inserisco il codice html generato all'interno dell'elemento #target

   saveAnswer(html);
   answerCorrect.push(answerObj.correct_answer);
}


/**
 * Fn che mi conta le risposte esatte date dall'utente
 * ------------------------------------------------------------------------
 */
function checkAnswers(){
   
   if(userAnswer != ''){
      
      for(let i = 0; i < userAnswer.length; i++){

         if(answerCorrect[i].includes(userAnswer[i])){ //se answerCorrect = userAnswer
         
            userAnswersCorrect += ".";           //aggiungo un punto alla stringa
         }   
      }
   }
}


/**
 * Fn che salva la risposta dell'utente in una variabile globale
 * ------------------------------------------------------------------------
 */
function saveAnswer(html) {

   let inputs = html.querySelectorAll('.slide input'); //seleziono tutti gli input interni alla slide

   // salva la risposta dell'utente
   for(let input of inputs){

      input.addEventListener('click', function(){
      
         userAnswer.push(input.value); //salvo la risposta dell'utente in userAnswer
      })
   }
}


/**
 * Fn che mi genera il codice html della pagina results
 * ------------------------------------------------------------------------
 */
function viewResults(){
   
   let target = document.querySelector('#target');
   let html = document.querySelector('#template-results .main-results').cloneNode(true);

   let percentuale = Math.floor((100/numberQuestions) * userAnswersCorrect.length);

   // next.classList.remove('btn-start-rate');
   // next.classList.add('btn-start-feed');

   target.innerHTML = "";

   // seleziono elementi 
   let resultsText = html.querySelector('.results__center .results__text');

   // seleziono gli elementi results__percent & results__questions di results__left
   let resultsPercent = html.querySelector('.results__left .results__percent');
   let resultsQuestions = html.querySelector('.results__left .results__questions');
   // html.querySelector('.results__left .results__percent').textContent = `${percentuale}%`;

   // inserisco contenuto su results__percent & results__questions di results__left
   resultsPercent.textContent = `${percentuale}%`;
   resultsQuestions.textContent = `${userAnswersCorrect.length}/${numberQuestions} questions`;

   // seleziono gli elementi results__percent & results__questions di results__right
   resultsPercent = html.querySelector('.results__right .results__percent');
   resultsQuestions = html.querySelector('.results__right .results__questions');

   // inserisco contenuto su results__percent & results__questions di results__right
   resultsPercent.textContent = `${100 - percentuale}%`;
   resultsQuestions.textContent = `${numberQuestions - userAnswersCorrect.length}/${numberQuestions} questions`;

   if (percentuale >= 60) {
      resultsText.innerHTML = `<b>Congratulations!</b><br><b class="bold-color">You passed the exam</b><p>We'll send you the certificate<br>in few minutes<br>check your email (including<br>promotions / spam folder)</p>`;
   }else if (percentuale < 60) {
      resultsText.innerHTML = "Non hai superato l'esame";
   }

   target.append(html);
}


/**
 * Fn che mi genera il codice html della pagina feedback
 * ------------------------------------------------------------------------
 */
function viewFeedback(){
   
   let target = document.querySelector('#target');
   let html = document.querySelector('#template-feedback .main-feedback').cloneNode(true);

   target.innerHTML = "";

   // seleziono il contenitore delle stelle
   let starsContainer = html.querySelector('.stars');
   
   // itero per creare le 10 stelle di cui ho bisogno
   for(let i = 0; i < 10; i++){
      
      let star = html.querySelector('.star').cloneNode(true);
      starsContainer.append(star);
   }

   // rimuovo gli elementi vuoti usati per clonarli
   html.querySelector('.star').remove(); //rimuovo la prima stella
      
   target.append(html);

   // avvio la Fn che mi permette di colorare le stelle
   colorStars(html);
}


/**
 * Fn per colorare le stelle
 * ------------------------------------------------------------------------
 */
function colorStars(html){

   let stars = html.querySelectorAll('.star');

   for(let i = 0; i < stars.length; i++){

      stars[i].addEventListener('click', function(){

         for(let star of stars){

            star.style.fill = '';
         }
         for(let y = 0; y <= i; y++){

            stars[y].style.fill = '#00FFFF'
         }
      })
   }
}