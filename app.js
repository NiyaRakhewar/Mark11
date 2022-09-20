const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkNumBtn = document.querySelector("#check-num");
const outputBox = document.querySelector("#output");

function compareValues(sum,luckyNum){
    if(sum % luckyNum===0){
        outputBox.innerText="Your birthday is Lucky!!🤩";
    }else{
        outputBox.innerText= "We make our own Luck !!🙃";
    }

}

function checkBirthDateIsLucky(){
    const dob = birthDate.value;
    const sum = sumCalculate(dob);
    if( sum && dob )
    compareValues(sum,luckyNum.value)
    else
    outputBox.innerText = "please enter both the field!!";
}

function sumCalculate(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length; i++){
        sum= sum + Num(dob.charAt(i));
    }
    return sum;
}

checkNumBtn.addEventListener('click',checkBirthDateIsLucky)