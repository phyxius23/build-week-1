let stelle = document.querySelectorAll('.star');
console.log(stelle);

for(let i = 0; i < stelle.length; i++){

    stelle[i].addEventListener('click', function(){
        for(let stella of stelle){
            stella.style.fill = '';
        }
        for(let y = 0; y <= i; y++){
            stelle[y].style.fill = '#00FFFF'
        }
    })
}