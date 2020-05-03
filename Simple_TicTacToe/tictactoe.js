var restartButton = document.querySelector('#b')//getting the restart button
var squares = document.querySelectorAll('td')//grabs all the square
                                            //squares is an array

restartButton.addEventListener('click', function(){
    for(var i=0; i<squares.length; i++){
        squares[i].textContent=''
    }
})

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener('click', function(){
        if(this.textContent===''){
            this.textContent='X';
        }else if(this.textContent==='X'){
            this.textContent='O';
        }else{
            this.textContent='';
        }
    })
}