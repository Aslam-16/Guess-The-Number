var num=document.getElementById('num');
var btn=document.getElementById('btn');
var result=document.getElementById('result');
var mx=document.getElementById('max');
var mn=document.getElementById('min')
var min=1;
var max=10;
var win=Math.floor(Math.random()*(max-min));
var limit=2;
mx.textContent=max;
mn.textContent=min;
btn.addEventListener('click',guess);
btn.addEventListener('mousedown',(e)=>{
    if(e.target.className=="again"){
        again();
    }

});

function guess(e) {
    let n=parseInt(num.value);
    e.preventDefault();
    if(n==win){
        error("Correct Answer U won",'green')
        num.disabled=true;
        btn.value="Play Again";
        btn.className+="again"
        
    }
    else{
        if(!isNaN(n) || (n>=min &&n<=max)){
         if(limit>0){
             error(` wrong answer ${limit} limit left`,'red');
             limit-=1;
                   
         }
         else{
             error(`Game Over.. The Answer is ${win}`);
             num.disabled=true
             btn.value="Play Again";
             btn.className+="again"
                    
         }
 
        }
        else{
            error(`Wrong Input ${limit} limit left.. Try again`,'red');
            limit-=1;
                   

        }
        

    }
    
}
function error(data,color){
    result.style.color=color;
    num.style.borderColor=color;
    result.textContent=data;


}
function again(){
    window.location.reload();
}
