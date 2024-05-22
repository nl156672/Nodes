console.log("GRUNDLAGEN");
console.log("==========");

console.log('Aufgabe 1');
console.log('Erstelle zwei Variablen namens a und b. Initalisiere mit den Werten 1 und 2');

//Der Wert 1 wird zugewiesen (=)an eine Variable namens a.
let a = 1;
let b = 2;

//Mit dem Plus-Operator findet eine String-Verkettung statt. Ein String ist eine Zeichenkette, eingerahmt 
//mit Hochkommas
console.log('Der Wert der Variablen a ist:' + a); 

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b aus.');

//Wenn links oder rechts vom Plus-Operator ein String steht, wird verkettet.
//Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b); 
console.log('Das Ergenis der addition: ' + (a + b));

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Substraktion, Multiplikation, Division von a und b aus');

console.log("Substraktion:" + (a-b))
console.log("Multiplikation:" + (a*b))
console.log("Division:" + (a/b))


console.log('Aufgabe 4');
console.log('Der Wert von C sei das Ergebnis der Addition von a undb.');

let c = a+b;

console.log("c hat den Wert: " + c);


console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c');

// cQuadrat ist in Kmaelhöcker-Notation geschrieben. Das heisst: zuerste ein kleinbuchstabe. Verbundene Wörter beginnen gross.
let cQuadrat = a * a + b * b; 

// Javascript kennt einje Bibilothek namens math. In dieser Bibilothek gibt es eine Funktion namens sqrt.
// als Parameter in den runden klammen erwartet sqrt, eine Zahl aus der dann die Wurzel gezogen wird.

c = Math.sqrt (cQuadrat)

console.log('Die Hypotenuse ist ' + c + ' lang.')

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommtder Kunde nach zwei Jahren ausgezaqhlt. Beachte den Zinseszinseffekt.');

let laufzeit = 2
let startkapital = 100
let zinssatz = 0.1;  /* Das Komma ist zu entwicklungszeit ein Punkt*/

let kapitalNachEinemJahr = startkapital * (1 + zinssatz)

console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.")

let kapitalNachZweiJahren = kapitalNachEinemJahr * ( 1+ zinssatz);
console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.")

let endkapital = Math.pow((startkapital * zinssatz), laufzeit);
console.log('Endkapital nach ' + laufzeit + ' Jahren :' + endkapital + 'EUR');

console.log ('Aufgabe 7');
console.log ('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt');

//Im Zeitpunkt Null ist das Endkapital = dem Startkapital endkapital = startkapital;
console.log(endkapital);

//Nach dem ersten Jahr erhöht sich das Endkapital um den Faktor 1, endkapital = endkapital * (1 + zinssatz);
console.log(endkapital);

//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals * 1,1 zugewiesen endkapital = endkapital * (1 + zinssatz ); 
console.log(endkapital);

console.log ('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweisung endkapital = ... mehrfach wiederholt. ');

console.log('um sich Tipparbeit zu sparen und die Wiederholung der Anweisungen in der gewünschten Häufigkeit durchzuführen');
console.log('nutzt der Programmierer eine Schleife.');

startkapital = 100;
endkapital = startkapital;
zinssatz = 0.1; 
laufzeit = 3;

for (let i = 0; i < laufzeit ; i++) { 
endkapital = endkapital * (1 + zinssatz ); 
console.log('Endkapital nach Jahr ' + (i+1) + ' :' + endkapital + ' EUR. ');
}


console.log ('Aufgabe 9');
console.log( 'Wenn der Artikel Lebensmittel ist, dann ist die MwSt 7%, ansonsten 19%');
console.log(' In Excel würde das so aussehen : =wenn(A1=Lebensmittel;7;19');

let artikel = 'Lebensmittel';
let mwStSatz = (artikel === 'Lebensmittel')? 7 : 19;

// Der Ausdruck ist vergleichbar mit Excel. In den runden Klammern findet die Prüfung auf Wahr oder Falsch statt.
// Wenn artikel === "Lebensmittel" wahr ist, wird der Wert vor dem Doppelpunkt zurückgegeben. Ansonsten der Wert hinter dem Doppelpunkt.
// Anders als in Excel ist das einfache Gleichheitszeichen für eione Zuweisung reserviert.
// Für einen Vergleich muss in Javascript mit zwei oder 3 === gearbeitet werden

console.log(' Der Mehrwertsteuersatz für den Artikel ' + artikel + ' beträgt ' + mwStSatz +  '%.');


console.log ('Aufgabe 10');
console.log(' Hausaufgabe :  Eigene Aufgabe mit Wenn-Funktion / if-else-Ausdruck ');

console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 100€ ist, beträgt der Rabatt 20%')
console.log('Ansonsten gibt es keinen Rabatt')

// die Variabeln werden deklariert und der Gesamtbetrag mit dem Wert 120 initalisiert.
let Gesamtbetrag = 120;
let Rabatt;

// Die if Kontrollstruktur kann zwei Fälle unterscheiden. 
if (Gesamtbetrag >= 100) {
    // Wenn die Prüfung in de Rundenklammern wahr ist, wird der wert 20 zugewiesen.
    Rabatt = 20;
}else{
    Rabatt = 0;
}

console.log('Aufgabe 11');

console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 100€ ist, beträgt der Rabatt 20%')
console.log('wenn der Gesamtbetrag des Einkaufs zwischen 50 und kleiner 100€ ist, beträgt der Rabatt 10%')
console.log('Ansonsten gibt es keinen Rabatt')

Gesamtbetrag = 120;
Rabatt = 20;

// hier werden drei Fälle unterschieden. Dazu muss die if Kontrollstruktur verschachtelt werden.
if (Gesamtbetrag >= 100){
    Rabatt = 10;
}else{ 
    if (Gesamtbetrag >= 50) {
        Rabatt = 10;
    }else{
        Rabatt = 0;
    }
}

console.log('Aufgabe 12');
console.log('Wenn der Gesamtbetrag des Einkaufs grösser oder gleich 200 ist, ist der Versand kostenlos.')
console.log('Wenn der Gesamtbetrag des Einkaufs zwischen 100 und kleiner als 200, betragen Versandkosten 5€')
console.log('Ansonsten betragen die Versandkosten 10 Euro')

let Einkaufswert= 200;
let versandkosten;

if ( Einkaufswert >= 200 ) {
     versandkosten = 0;
}else{
    if ( Einkaufswert >= 100) {
         versandkosten = 5;
    }else{
        versandkosten = 10;
    }
}
console.log('Bei einem einkaufswert von ' + Einkaufswert +' euro betragen die versandkosten ' + versandkosten + ' Euro.');

console.log('Aufgabe 13')
console.log('Frauen ab 18 zahlen 10 euro Eintritt. Männer ab 18 zahlen 15 Euro. Minderjährige zahlen 6 Euro')

let Eintritt;
let alter = 10;
let geschlecht = 'm';

if (geschlecht === 'w' && Alter >=18){
    Eintritt === 10;
}

if (geschlecht === 'm' && Alter >=18){
    Eintritt === 15;
}

if (alter<18){
    Eintritt === 6;
}

console.log('Bei einem ALter von ' + alter + ' Jahren zahlt eine Person mit geschlecht ' + geschlecht +'#')
