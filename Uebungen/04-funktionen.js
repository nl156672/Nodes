console.log("FUNKTIONEN")
console.log("==========")

// Funktionen führen Operationen aus 

let laenge = 3
let breite = 5

let flaecheninhalt = laenge * breite

console.log("Flächeninhalt: " +flaecheninhalt)

// Jetzt die Berechnung in einer Funktion:

//  Zuerst wird die Funktion erstellt:

function berechneFlaecheninhalt(laenge, breite){
    return laenge * breite
}

// In einem zweiten Schritt wird die Funktion aufgerufen
console.log("Flächeninhalt: " + berechneFlaecheninhalt(10,10))

// Der Vorteil von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
// Die Funktion kann dann an vielen Stellen aufgerufen werden.

// So werden Funktionen erstellt 

// 1. das reservierte Wort Funktion
// 2. ein sprechender Name d.h der Name soll beschreiben, was die Funktion macht
// 3. Runde Klammern am Ende nehmen Parameter entgegen. Parametersind das was die Funktionen 
//    als Input zur Berechnung benötigt. Funktionen können mehrere oder auch keine Parameter entgegennehmen 
// 4. in den geschweiften Klammern wird die Logik ausprogrammiert.
// 5. mit dem reservierten Wort return wird das Ergebnis zurückgegeben 


console.log("Aufgabe 1")
console.log("========")
// Berechne das Volumen eines Quaders:


function berechneVolumen(laenge, breite, hoehe){
   return laenge * breite * hoehe

}

console.log("Volumen: " + berechneVolumen(5, 6, 7))


console.log("Aufgabe 2")
console.log("=========")
// Berechne den Nettopreis aus dem Bruttopreis

function berechneBruttopreis(nettopreis, mehrwertsteuersatz){
    return nettopreis + mehrwertsteuersatz * nettopreis
}

console.log("Bruttopreis: + berechneBruttopreis(100,0,19")


console.log("Aufgabe 3")
console.log("=========")
// Berechne die Schulnote aus der Abitur-Punktzahl.

let punkt3 = 10

function berechneSchulnote(punkte){
    if(punkte === 15)  return "1+"
    else if(punkte === 14) return"1"
    else if(punkte === 13) return"1-"
    else if(punkte === 12) return"2+"
    else if(punkte === 11) return"2"
    else if(punkte === 10) return"2-"
}

let note = berechneSchulnote(10)

console.log("Note: " + note)

console.log("Aufgabe 4")
console.log("=========")

// Funktionen können auch innerhalbvon Klassen bestimmt werden
// Beipiel: Kredit 