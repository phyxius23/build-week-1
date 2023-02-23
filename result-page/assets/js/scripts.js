
let answersCorrect = ".....";
let numberQuestions = 7;

function cerchiofrase() {

    let frasehtml = document.querySelector('.results__text');
    let frase1 = `<b>Congratulations!</b><br><b class="bold-color">You passed the exam</b><p>We'll send you the certificate<br>in few minutes<br>check your email (including<br>promotions / spam folder)</p>`;
    let frase2 = "non hai superato l'esame";
    let percentuale = Math.floor((100 / numberQuestions) * answersCorrect.length);

    document.querySelector('.results__left .results__percent').innerText = percentuale + "%";
    document.querySelector('.results__right .results__percent').innerText = 100 - percentuale + "%";
    document.querySelector('.results__left .results__questions').innerText = `${answersCorrect.length}/${numberQuestions} questions`;
    document.querySelector('.results__right .results__questions').innerText = `${numberQuestions - answersCorrect.length}/${numberQuestions} questions`;

    if (percentuale >= 60) {

        frasehtml.innerHTML = frase1;
    } else if (percentuale < 60) {

        frasehtml.innerHTML = frase2;
    }
}
cerchiofrase();

