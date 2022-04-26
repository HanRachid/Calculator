

// query selectors
const numbers = document.querySelectorAll('.buttons.num');
const couleurs = document.querySelectorAll('.color');
const corps = document.querySelector('.console');
const display = document.querySelector('.display');
const rouge = document.querySelector('.red');
const jaune = document.querySelector('.yellow');
const violet = document.querySelector('.purple');
const equals = document.querySelector('.equals');
const remove = document.querySelector('.delete');
const signs = document.querySelectorAll('.operation');
const historique = document.querySelector('.history');
const floteur = document.querySelector('.floater');
const egaliseur = document.querySelector('.equals');
// operations

const add = function(a,b) {
	return a+b;
};
const sub = function(a,b) {
	return a-b;
};

const mul = function(a,b) {
	return a*b;
};

const divi = function(a,b) {
	if (b==0){
        display.textContent ="MATH ERROR";
    }else{
        return a/b;
    }

};

function operationPrec(operation){
    
    switch (operation){
        case "+":
            return add(parseFloat(historique.textContent), parseFloat(display.textContent));
        case "-":
            return sub(parseFloat(historique.textContent), parseFloat(display.textContent));
        case "x":
            return mul(parseFloat(historique.textContent), parseFloat(display.textContent));
        case "➗":
            return divi(parseFloat(historique.textContent), parseFloat(display.textContent));
    }
}

// all the magic



const clear = function(){
    display.textContent=0;
    historique.textContent="-";
}

const arrayNumbers = Array.from(numbers);
let currentValue=0;
arrayNumbers.forEach((element)=> {
    element.addEventListener('click' , (e)=>{
        if (display.textContent=="0"){
            display.textContent=element.textContent;
            currentValue = element.textContent;
        }else{
            display.textContent=display.textContent+""+element.textContent;
            currentValue = display.textContent;
        }
    });

});

let isRed = false;
let isPurple = false;
let isYellow = false;
let isBlue = false;

// Eventlisteners

const colorYellow = "#ffe943";
const colorRed = '#fb0b62';
const colorPurple = '#7949bf';
const colorBlue = "#02b7d4";
rouge.addEventListener('click', (e)=> {
    if (!isRed ){
        corps.style.backgroundColor = colorRed;
        rouge.style.backgroundColor = colorBlue;
        violet.style.backgroundColor = colorPurple;
        jaune.style.backgroundColor = colorYellow;
        isRed = true;
    }else{
        corps.style.backgroundColor = colorBlue;
        rouge.style.backgroundColor = colorRed;
        violet.style.backgroundColor = colorPurple;
        jaune.style.backgroundColor = colorYellow;
        isRed = false;
        isPurple = false;
        isYellow = false;
    }
});

violet.addEventListener('click', (e)=> {
    if (!isPurple){
        corps.style.backgroundColor = colorPurple;
        rouge.style.backgroundColor = colorRed;
        violet.style.backgroundColor = colorBlue;
        jaune.style.backgroundColor = colorYellow;
        
        isPurple = true;
    }else{
        corps.style.backgroundColor = colorBlue;
        rouge.style.backgroundColor = colorRed;
        violet.style.backgroundColor = colorPurple;
        jaune.style.backgroundColor = colorYellow;
        isRed = false;
        isPurple = false;
        isYellow = false;
    }
});

jaune.addEventListener('click', (e)=> {
    if (!isYellow){
        corps.style.backgroundColor = colorYellow;
        rouge.style.backgroundColor = colorRed;
        violet.style.backgroundColor = colorPurple;
        jaune.style.backgroundColor = colorBlue;
        isYellow = true;
    }else{
        corps.style.backgroundColor = colorBlue;
        rouge.style.backgroundColor = colorRed;
        violet.style.backgroundColor = colorPurple;
        jaune.style.backgroundColor = colorYellow;
        isRed = false;
        isPurple = false;
        isYellow = false;
    }
});


remove.addEventListener('click', (e) => {
    clear();
});


const opesigns = Array.from(signs)

let operationValue = 0;
previousOperation = "";
opesigns.forEach((element) => {
    element.addEventListener('click' , (e) => {   
        
        if (historique.textContent=="-"){
           
            historique.textContent=parseFloat(display.textContent)
            display.textContent="0";
            previousOperation=element.textContent;
            isFloat=false;
        }else{
                historique.textContent = operationPrec(previousOperation)
                previousOperation = element.textContent;
                display.textContent=0
                isFloat=false;
   
        }
    });

});

let isFloat=false;

floteur.addEventListener('click' , (e) => {
  
    if (!isFloat){
        display.textContent=display.textContent+"."
        isFloat=true;
    }

   

});

egaliseur.addEventListener('click' , (e) => {
    
    console.log(previousOperation);
    historique.textContent="-"
    isFloat=false;
   

});



// const lesCouleurs = Array.from(couleurs)
// blueColor = "#02b7d4";
// lesCouleurs.forEach((element)=> {
//     element.addEventListener('click', (e)=> {
        
//         const choix = getComputedStyle(e.currentTarget).backgroundColor;
//         if (!isBlue){
//             element.style.backgroundColor = blueColor;
//             corps.style.backgroundColor = choix;
//         }else{
//             corps.style.backgroundColor = blueColor;
//             element.style.backgroundColor = choix;
//         }
//     });

// });