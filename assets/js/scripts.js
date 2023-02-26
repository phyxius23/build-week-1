/**
 * MATERIALE FORNITO
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
let answerCorrect = [];                //salvo le risposte corrette di ciascun oggetto (lo utilizzo per il confronto)
let userAnswer = [];                   //salvo le risposte dell'utente (lo utilizzo per il confronto)
let userAnswersCorrect = "";           //salvo la quantità di riposte corrette (lo utilizzo per il confronto)
let numberQuestions = 7;

// array con all'interno delle domande random
let requests = randomQuestions(numberQuestions);


/**
 * se input:checked aggiungo classe btn-start-accept che mi rende btn-start con opacity 1 e soprattutto mi permette poi di avviare la funzione
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
let next = document.querySelector('.btn-next'); //seleziono il button.next

next.addEventListener('click',function(){

   //se indice inferiore al totale degli elementi di requests
   if(indice < requests.length){

      newQuestion(requests[indice]); //eseguo Fn newQuestion() => mostra domanda/risposte

      indice++; //incremento indice
   }
   
   //se indice uguale al totale degli elementi di requests e l'elemento next contiene la classe btn-start-next
   if(indice == requests.length && next.classList.contains("btn-start-next")){

      next.innerText = 'Passa ai risultati';    //cambio testo del button
      next.classList.remove('btn-start-next');  //elimino classe btn-start-next
      next.classList.add('btn-start-rate');     //aggiungo classe btn-start-rate

   //se indice uguale al totale degli elementi di requests e l'elemento next contiene la classe btn-start-rate
   }else if(indice == requests.length && next.classList.contains("btn-start-rate")){

      next.textContent = 'Rate us';             //cambio testo del button
      next.classList.remove('btn-start-rate');  //elimino classe btn-start-rate
      next.classList.add('btn-start-feed');     //aggiungo classe btn-start-feed

      checkAnswers();                           //eseguo Fn che calcola le risposte corrette
      viewResults();                            //eseguo Fn che mostra la pagina dei risultati

   //se indice uguale al totale degli elementi di requests e l'elemento next contiene la classe btn-start-feed
   }else if(indice == requests.length && next.classList.contains("btn-start-feed")){

      next.textContent = 'More info';           //cambio testo del button
      
      viewFeedback();                           //eseguo Fn che mostra la pagina di feedback
   }
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

   viewCountdown(html);
   
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

         console.log(answerCorrect, userAnswer)

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

   next.classList.remove('btn-next'); //rimuovo classe per stilizzare il button
   next.classList.add('btn-rate'); //aggiungo classe per stilizzare il button

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

   doughnut(html);

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

   next.classList.remove('btn-rate'); //rimuovo classe per stilizzare il button
   next.classList.add('btn-feed'); //aggiungo classe per stilizzare il button

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


/**
 * Fn per disegnare il grafico a ciambella
 * ------------------------------------------------------------------------
 */
function doughnut(html){

   const ctx = html.querySelector('.results__center #myChart');

   const data = {
      datasets: [{
         label: 'My First Dataset',
         data: [
            numberQuestions-userAnswersCorrect.length, //risposte sbagliate
            userAnswersCorrect.length                  //risposte corrette
         ],
         backgroundColor: [
            '#D20094', //rgb(54, 162, 235)',       //colore wrong
            '#00ffff', //rgb(255, 99, 132)',       //colore correct
         ],
         hoverOffset: 4,
         borderWidth: 0,
         cutout: '70%',
         responsive: true,
         maintainAspectRatio: true,
         aspectRatio: 1
      }]
   };

   const config = {
      type: 'doughnut',
      data: data,
   };

   new Chart(ctx, config);
}


// Fn timer
function viewCountdown(html){

   let count = 15;
   let countdownEl = html.querySelector('.countdown .timer');
   let textUp = document.createElement('p');
   let textCenter = document.createElement('p');
   let textDown = document.createElement('p');


   let timer = setInterval(function(){

      let seconds = count % 60;


      textUp.classList.add('timer-up');
      textCenter.classList.add('timer-center');
      textDown.classList.add('timer-down');

      textUp.textContent = 'Seconds';
      textCenter.textContent = seconds;
      textDown.textContent = 'remaining';

      countdownEl.append(textUp);
      countdownEl.append(textCenter);
      countdownEl.append(textDown);

      if(count == 0){
         clearInterval(timer)//fermo il timer

         newQuestion(requests[indice]); //eseguo Fn newQuestion() => mostra domanda/risposte

         indice++; //incremento indice   
      }
      count--;//riduco count di 1

   },1000)

}


// Merge