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
let startkapitel = 100
let zinssatz = 0.1;  /* Das Komma ist zu entwicklungszeit ein Punkt*/

let kapitalNachEinemJahr = Startkapitel * (1 + Zinssatz)

console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.")

let kapitalNachZweiJahren = kapitalNachEinemJahr * ( 1+ Zinssatz);
console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.")

let endkapital = Math.pow((startkapitel * zinssatz), laufzeit);
console.log("Endkapitalnach" )

