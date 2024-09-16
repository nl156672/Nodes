console.log("Booleans")
console.log("========")

console.log("Boolsche Werte sind Wahrewerte, die wahr (true) oder falsch (false) annehmen")

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01")

if(true){
    console.log("Der Ausdruck ist wahr")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false")
}

// weil in dieser Aufgabe die Prüfung immer wahr ist if(true), wird immer die Anweisung hinter if aufgeführt.
// Die Anweisung hinter else kommt niemals zur Ausführung.

console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5 

// Hier wird mit einem Prüfoperator auf wahr oder falsch geprüft

// Prüfoperatoren: 
// == : Prüfunng auf Gleicheit im Wert Bsp: if(1 == '1') true
// ===: Prüfung auf Gleichheit im Wert und im Typ Bsp: if(1 === '1') false
// >  : grösser als 
// <  : kleiner als 
// >= : grösser oder gleich
// <= : kleinher oder gleich 

if(a>6){
    console.log("Das ist wahr")
}else{
    console.log("Das ist falsch")
}

console.log("Aufgabe 03")

//wenn die Schülerin 16 oder jünger ist muss sie "Fahrrad fahren"
//wenn sie 17 ist darf sie "begleitet fahren"
//wenn sie 18 ist darf sie "fahren"
//Vorraussetzung fütr das Fahren ist der Führerschein

let alter = 16
let fuehrerschein = true;


if(alter<=16){
    console.log("Fahrrad fahren || fuehrerschein === false")     // wenn die Schülerin 16 oder einen Führerschein hat oder beides, dann Fahrrad 
}
if(alter === 17 && fuehrerschein === true){                      // wenn 17 und Führerschein, dann begleitet fahren
    console.log("begleitet fahren")
}
if(alter > 17 && fuehrerschein === true){                        // wenn älter 17 und Führerschein, dann fahren

    console.log("fahren")
}


// Andere Lösung 

if(fuehrerschein){       // Fuehrerschein ist bereits true oder false. Es bedarf keines Vergleichoperators 

    if(alter === 17){
        console.log("begleitet fahren")
    }else{
        console.log("fahren")
    }
}else{
    console.log("Fahrrad fahren")
}

console.log('Aufgabe 4')
// Zahlen können in Javascript true oder false sein.  

let zahl = -10

if (zahl) {
    console.log ('die Zahl " + zahl +" ist true');
} else {
    console.log ('die zahl " + zahl +" ist false');
}

// positive Zahlen sind true 
// Negative Zahlen sind auch true 

console.log('Aufgabe 5')

// Auf einem Sparkonto soll bei einem positiven Kontostand auf der Konsole stehen: "Zinsen berechnen"
// Wenn kein Guthaben existiert: "keine Zinsen"

let kontostand = 100

if(kontostand){ // auf dem Prüfoperator kann verzichtet werden, daq Zahlen bereits definiert sind
    console.log("Zinsen berechnen" + kontostand )
}else{
    console.log("keine Zinsen, da Kontostand 0")
}


console.log('Aufgabe 5')
 
// In der Bundesliga gibt es Punkte für Spiele
// Sieg:            3 Punkte
// Unentschieden:   1 Punkt 
// Niederlage:      0 Punkte

let spielausgang = "Sieg"
let mannschaft = "Schalke 04"

if(spielausgang == "Sieg") {
    console.log("Es gibt 3 Punkte")
}

if(spielausgang == "Unentschieden") {
    console.log("Es gibt 1 Punkt")
}

if(spielausgang == "Niederlage") {
    console.log("Es gibt 0 Punkte")
}