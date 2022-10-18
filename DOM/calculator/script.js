function displayValue(event){
    console.log(event.target.value);
    result.value+=event.target.value;

}
function clearBox(){
    result.value="";
}

function evaluateExpreesion(){
    let expr=result.value
    let out=eval(expr)
    result.value=out
}


