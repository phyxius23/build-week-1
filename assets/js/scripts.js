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

window.onload = function () {
   // TIPS:

   // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
   // Per ogni domanda, crea un container e incorporale tutte all'interno. 
   // Crea poi dei radio button
   // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
   // con le risposte corrette e incorrette come opzioni
   // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
   //
   // SE MOSTRI UNA DOMANDA ALLA VOLTA:
   // Mostra la prima domanda con il testo e i radio button.
   // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
   // salvando le risposte dell'utente in una variabile

   let divQuestion = document.querySelector('.question');
      
   let title = document.createElement('h1');
   let contentTitle = document.createTextNode(questions[9].question);
   title.classList.add('bench-title');
   
   let divAnswers = document.createElement('div');
   divAnswers.classList.add('answers');

   title.appendChild(contentTitle);
   
   divQuestion.appendChild(title);
   divQuestion.appendChild(divAnswers);

   
   for(answer of questions[9].answers){
      let divAnswer = document.createElement('div');
      let input = document.createElement('input');
      let label = document.createElement('label');

      let contentLabel = document.createTextNode(answer);

      divAnswer.classList.add('answer');

      input.setAttribute('type','radio');
      input.setAttribute('id', answer.toLowerCase());

      label.setAttribute('for', answer.toLowerCase());

      label.appendChild(contentLabel);
      divAnswer.appendChild(input);
      divAnswer.appendChild(label);
      divAnswers.appendChild(divAnswer);
   }

   let n = 1;
   let p = document.createElement('p');
   let contentP = document.createTextNode(`Question ${n}<span>/10</span>`);
   p.classList.add('bench-footer');
   p.appendChild(contentP);
   divQuestion.appendChild(p);
   
};
