var amount=document.getElementById('amount');
var rate=document.getElementById('rate');
var months=document.getElementById('months');
var button=document.getElementById('btn');
var span=document.getElementById('span');



button.addEventListener('click',function(calc,total){
    var calc=amount.value*(rate.value/100)*months.value;
    var total= (calc);
    span.textContent=total;
})