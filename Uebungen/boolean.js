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

console.log("Aufgabe 02")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5 

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