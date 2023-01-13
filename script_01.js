"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze";
// console.log(familyName);
// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test; 
// test = "hallo";
// test = 2;
// test = true;

// console.log("Datenyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

const test = "hallo";  // Variable mit KONSTANTEM Inhalt
test = "hi"; // KEINE neue Zuweisung zur LZ möglich! --> Fehler
console.log("Inhalt: " + test); // Ausgabe

