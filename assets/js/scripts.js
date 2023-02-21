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
      incorrect_answers: ["Python", "C", "Jakarta"],
      answers: ["Java", "Python", "C", "Jakarta"],
   },
];

/** ------- test page ------- */
/* ---------------------- ------ */

/** ------- central content ------- */
let injectionDiv = document.querySelector('.container-js');

/**
 * funzione che sceglie random le domande dall'array questions fornito
 */
function randomQuestions(numElements){

   let chosenQuestions = [];
   let usedQuestions = [];

   while(chosenQuestions.length < numElements){

      let randomIndex = Math.floor(Math.random() * questions.length);

      if(!usedQuestions.includes(randomIndex)){

         usedQuestions.push(randomIndex);
         chosenQuestions.push(questions[randomIndex]);
      }
   }

   return chosenQuestions;
}

/**
 * funzione che unisce le risposte sbagliate e corrette e le ritorna randomizzata
 */
function randomAnswers(numElements){

   let chosenAnswers = [];
   let usedAnswers = [];

   //array contenente tutte le possibili risposte
   let allAnswers = numElements.incorrect_answers;
   allAnswers.push(numElements.correct_answer);
   
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
 * funzione con la quale creo il button e mostro una slide diversa ad ogni click
 */
function showSlide(arrayWrapper){

   let btnNextSlide = document.createElement('button');
   let index = 0;

   btnNextSlide.classList.add('btn', 'btn-next');
   btnNextSlide.innerText = `NEXT QUESTION`;

   arrayWrapper[index].classList.add('d-block');

   btnNextSlide.addEventListener('click', function(){

      index++;

      if(index < arrayWrapper.length){
         
         console.log(index);
                  
         for(element of arrayWrapper){
            
            element.classList.remove('d-block');
         }
         
         arrayWrapper[index].classList.add('d-block');
      }
      if(index == arrayWrapper.length-1){

         btnNextSlide.innerText = `Mostra il risultato`;
      }
   })

   injectionDiv.appendChild(btnNextSlide);
}


/**
 * funzione che mi permetta di generare il codice html necessario per strutturare 
 * ogni singola domanda (ogni struttura la salvo in una variabile e 
 * ad ogni click vado ad eliminare quella appena visualizzata)
 */

function startQuiz(arrayRandom){

   let counter = 0;
   let arrayWrapper = [];
   
   for(let element of arrayRandom){

      let wrapperDiv = document.createElement('div'); //div contenente tutta la slide
      let title = document.createElement("p");
      let divQuestions = document.createElement('div'); //div contenente tutte le risposte
      let p = document.createElement('p');
      
      counter++;

      title.classList.add('title','title-test');
      title.innerHTML = element.question;

      //imposto le proprietà di input
      wrapperDiv.classList.add(`slide${counter}`);
      wrapperDiv.append(title);

      // questions (flexbox)
      divQuestions.classList.add('questions');

      /**
       * funzione che visualizza random le risposte corrette e non
       */
      let arrayAnswers = randomAnswers(element);

      // ciclo arrayAnswers
      for(let answer of arrayAnswers){

         let divQuestion = document.createElement('div');
         let input = document.createElement('input');
         let label = document.createElement('label');
         let contentLabel = document.createTextNode(answer);
         
         // aggiungo una classe a divQuestion
         divQuestion.classList.add('question');
         
         //imposto le proprietà di input
         input.setAttribute('type','radio');
         input.setAttribute('name','answer');
         input.setAttribute('id', answer.toLowerCase());
         
         //imposto la proprietà for di label per collegarla ad input
         label.setAttribute('for', answer.toLowerCase());

         label.appendChild(contentLabel);
         divQuestion.appendChild(input);
         divQuestion.appendChild(label);
         divQuestions.appendChild(divQuestion);
      }
  
      p.classList.add('footer-test');
      p.innerHTML = `Question ${counter}<span>/${arrayRandom.length}</span>`;

      wrapperDiv.appendChild(divQuestions);

      wrapperDiv.appendChild(p);
      
      arrayWrapper.push(wrapperDiv);

      injectionDiv.appendChild(wrapperDiv);
   }

   showSlide(arrayWrapper);
}
startQuiz(randomQuestions(7));

/**
 * provare ad implementare le nuove funzionalità mostrate da Michele questa sera
 */

/**
 * TIMER
 */
// let count = 20;

// let timer = setInterval(function(){
//                console.log(count);//mostro il valore aggiornato
//                if(count == 0){
//                      clearInterval(timer)//fermo il timer
//                }
//                count--;//riduco count di 1
//             },1000)