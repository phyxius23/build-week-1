let count = 30;
const countdownEl = document.getElementById('countdown');
let timer = setInterval(function(){
    let seconds = count % 60;
    countdownEl.innerHTML = `SECONDS <br> ${seconds} <br> REMANING`;
                if(count == 0){
                    clearInterval(timer)//fermo il timer
                }
                count--;//riduco count di 1
            },1000)