"use strict";

// Entscheidungsstrukturen | control flow

//Deklaration + Assignment
const ageJohn = 35;
const ageMark = 30;

//Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);


 //Ausgabe
 console.log("ageJohn: " + ageJohn);
 console.log("ageMark: " + ageMark);
 console.log("isJohnOlder: " + isJohnOlder);
 console.log("isJohnEqual: " + isJohnEqual);
 console.log("------------------");

 //*******************  IF   ****************** */
// TINA ---> tHERE IS NO aLTERNATIVE 
// entweder JA oder nix .... Alternativelos
//if(true)
//if(false)
//if(isJohnOlder)
//if(ageJohn > ageMark)
//{
   //  console.log("John is älter!");
//}

//*******************  IF - ELSE   ****************** */
// mit Alternative
// entweder JA oder Nein

//if (isJohnOlder)
 //{
    //console.log("John is älter!"); 
//} 
//else 
//{
   // console.log("John is Jünger!"); 
//}

/************  Ternäre (ternary) Schreibweise ************/
 //console.log( (isJohnOlder) ? "John is older" : "Mark is older");

 /************  IF - ELSE - IF ************/
 //Mit alternativen Fällen (älter, jünger, gleich alt)

 if (isJohnOlder)                    // 1. variante
 {
    console.log("John is älter!"); 
}  
else if (isJohnEqual)                 //2. Fall     
 {
    console.log("John is gleich alt!"); 
}                                    //evt. weitere alternative (n) else if(){}
else                                // Gemeinsame else-zweig
{
    console.log("John is Jünger!"); 
}

/************  Fallunterscheidung / SWITCH | CASE ************/
