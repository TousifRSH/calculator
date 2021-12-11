var resulthistory=document.getElementById('resulthistory')

var result=document.getElementById('result');



var buttons = document.querySelectorAll('#keysbords button')
console.log(buttons);

var output='';

buttons.forEach(function(btn){
   btn.addEventListener('click',function(e){
        var txt=btn.innerText;
        if(txt ==='X'){
            txt="*"
            output+=txt;
            result.textContent=output;
        }
        else if(txt==='÷'){
            txt='/'
            output+=txt;
            result.textContent=output;
        }
        else if(txt ==='='){
            output=eval(output);
            resulthistory.textContent=result.textContent;
            result.textContent=output;
        }
        else if(txt==='C'){
            output=''
            result.textContent=output;
        }
        else if(txt==='AC'){
            output=''
            result.textContent=''
            resulthistory.textContent=''
        }
        else{
            output+=txt;
            result.textContent=output;
            console.log(output);
        }
       

   })

})

