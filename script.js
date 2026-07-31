const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch{
        display.value="Error";
    }

}

function sqrt(){

    if(display.value==="") return;

    display.value = Math.sqrt(eval(display.value));

}

function square(){

    if(display.value==="") return;

    let num = eval(display.value);

    display.value = num*num;

}

function reciprocal(){

    if(display.value==="") return;

    display.value = 1/eval(display.value);

}

function percent(){

    if(display.value==="") return;

    display.value = eval(display.value)/100;

}

// Keyboard Support

document.addEventListener("keydown",function(e){

    const key=e.key;

    if((key>='0' && key<='9') ||
       key=="+" ||
       key=="-" ||
       key=="*" ||
       key=="/" ||
       key=="."){
        append(key);
    }

    if(key=="Enter"){
        calculate();
    }

    if(key=="Backspace"){
        backspace();
    }

    if(key=="Escape"){
        clearDisplay();
    }

});