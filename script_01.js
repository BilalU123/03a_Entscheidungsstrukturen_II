"use strict";

// Entscheidungsstrukturen | control flow

//Deklaration + Assignment
const ageJohn = 30;
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
if(ageJohn > ageMark)
{
     console.log("John is älter!");
}

//*******************  IF - ELSE   ****************** */
// mit Alternative
// entweder JA oder Nein