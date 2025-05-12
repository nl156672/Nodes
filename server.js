const db = new sqlite3.Database('./banking.db', (err) => {
    if (err) {
        console.error('Fehler beim Öffnen der Datenbank:', err.message);
    } else {
        console.log('Verbindung zur SQLite-Datenbank hergestellt.');
    }
});

// Tabelle "Kunde" erstellen
// Tabellen werden angelegt mit dem Befehl Create Table
// IF NOT EXIST sorgt dafür, dass die Tabelle nur einmal angelegt wird
// Primary Key ist der Primärschlüssel der Tabelle. Der Primärschlüssel ist dasjenige 
// Attribut, das den Datensatz eindeutig identifiziert
// 




db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Kunde (
            Kundennummer INTEGER PRIMARY KEY AUTOINCREMENT,
            Nachname TEXT NOT NULL,
            Vorname TEXT NOT NULL,
            Wohnort TEXT NOT NULL,
            PLZ TEXT NOT NULL,
            Strasse TEXT NOT NULL,
            Kennwort TEXT NOT NULL,
            Benutzername TEXT NOT NULL UNIQUE
        )
    `



	// Beispielkunden einfügen
	// Mit INSERT INTO wird ein Datensatz in die Tabelle eingefügt
	// VALUES gibt die Werter an, die in die Tabelle eingefügt werden 
	
	const insertStmt = `
        INSERT INTO Kunde (Nachname, Vorname, Wohnort, PLZ, Strasse, Kennwort, Benutzername)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(insertStmt, ['Müller', 'Max', 'Berlin', '10115', 'Hauptstraße 1', 'passwort123', 'maxm'], (err) => {
        if (err) {
            console.error('Fehler beim Einfügen des Beispielkunden:', err.message);
        } else {
            console.log('Beispielkunde erfolgreich hinzugefügt.');
        }
    });

// Alle Kunden aus der Tabelle "Kunde" abfragen
    db.all("SELECT *FROM KUNDE", (err, rows) => {
		if (err) {
			console.error("Fehler beim Auslesen der Kunden:", err.message);
		}else{
			console.log("Alle Kunden in der Datenbank:", )
		}
	})










// Klassendefinition des Kundens 
class Kunde{
	constructor(){
		this.Nachname
		this.Vorname
		this.Kennwort
		this.benutzername
		this.IstEingeloggt 
	}
}
// Kundenobjekt deklariert und instanziiert 
	let kunde = new Kunde();
	kunde.Nachname = "Kiff"
	kunde.Vorname = "Pit"
	kunde.Benutzername = "pk"
	kunde.Kennwort = "123" 
	kunde.IstEingeloggt = false
	// IstEingeloggt ist ein boolean, der Wert ist entweder true (wahr) oder false (falsch)

// Klassendefinition des Kundenberaters
	class Kundenberater{
		constructor(){
			this.Nachname
			this.Vorname 
			this.Telefonnummer 
			this.Mail
			this.Bild
		}
	}
	// Deklaration und Instanziierung
	let kundenberater = new Kundenberater();
	kunde.Nachname = "Pass"
	kunde.Vorname = "Hildegard"
	kunde.Telefonnummer = "012345 6789"
	kunde.Mail = "h.pass@borken-bank.de"
	kunde.Bild = "pass.jpg"





'use strict';
// Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.
const express = require('express');


const bodyParser = require('express');

// Cookie sind kleine Textdateien, die von Websites auf deinem Gerät gespeichert werden 
// Bei einem erneuten Besuch der Seite werden sie zurück an den Server gesendet
// Dienen dazu Voreinstellungen/Passwörter für einen erneuten Seitenbesuch zu speichern 
// oder auch zusätzlich Informationen über das User Verhalten zu sammeln z.B für personalisierte Werbung 
// Cookies können z.B ganz konkret einen Warenkorb nach Tagen wieder anzeigen obwohl derNutzer sich noch nicht regristiert hat 
// Man kann Cookies am Browser anzeigen, indem man F12 drückt.
// weil man Cookies im Browser sehr gut auslesen kann, kann man Cookies signieren. 


// In der Banking App sollen Cookies wie folgt eingesetzt werden:
// Wenn sich der Kunde an der app anmeldet, wird ein Cookie in seinem Browser gespeichert.
// Der Cookie enthält seine Kundendaten.
// Immer wennn der Kunde nach der Anmeldung in der App einen Button drückt, werden seine 
// Kundendaten vom Browser an den Server übergeben. Der Server weis dadurch mit welchem 
// Kunden er zuv tun hat.So ermöglichen wir, dass mehrere Kunden gleichzeitig mit dem Server
// interagieren können.


//Der Cookieparser ist für die Verarbeitung der Cookies unserer App zuständig
//Mit dem Cookie parser
const cookieParser = require('cookie-parser')


// Die Bibilothek email-validator prüft E-Mails auf syntaktische Fehler
// Die Anforderungen sind exakt festgelegt im RFC 5322
const validator = require("email-validator")

// Die Funktion validate wird auf das Vaolidator_Objekt aufgerufen
// Als Parameter wird eine Mail-Adresse an die Funktion übergeben 
// Der Rückgabewertder Funktion ist false oder true 
validator.validate ("test@email.com"); // true 

if(validator.validate("stefan.bauemer@berufskolleg-borken.de")){
	console.log("Gültige EMail")
}else{
	console.log("Ungültige E-Mail")
}


// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "... wird zugewiesen an ..."

const PORT = 3000;

// Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST 
const HOST = '0.0.0.0';

// App

const app = express();




// Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
// Der Bodyparser wird in der App eingebunden.

// Der Cookie Parser wird in die App mit eingebunden
// Cookies können verchlüsselt im Browser abgelegt werden. Dadurch kann ein Browser ein gespeichertes Kennwort nicht mehr ausgelesen werden.
// Nur unsere App kann den verschlüsselten Cookie verwenden. Dazu wird das secret geheim 'genutzt'


app.use(cookieParser())

// Geheimer Schlüssel für signierte Cookies
// const secretkey = 'mein_geheimer_schluessel';
// app.use(cookieParser(secretkey));






// die app.get wird abgearbeitet,sobald die Index-Seite angesurft wird.
app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.


	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('index.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
		 
	}
});

// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert,
// die angefragte Seite an den Browser zurückzugeben.
// Der Server arbeitet dazu die Funktion app.get('agb)... ab.
app.get('/agb', (req, res) => {

	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('agb.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});

	// Der Server gibt die gerenderte EJS-Seite an den 
	// Browser zurück.


app.get('/hilfe', (req, res) => {

    if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('hilfe.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});

app.get('/kontouebersicht', (req, res) => {

	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('kontouebersicht.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});



app.get('/profil', (req, res) => {
	res.render('profil.ejs',{});
});

app.get('/postfach', (req, res) => {

	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('postfach.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	

		

app.get('/kreditBeantragen', (req, res) => {


	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('kreditBeantragen.ejs',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});



app.get('/ueberweisungAusfuehren', (req, res) => {

	if(kunde.IstEingeloggt){ 

		// wenn die Zugangsdaten korekkt sind, dann wird die angesurfte Seite gerendert.
        res.render('ueberweisungAusfuehrung',{});

	}else{ 

		// Wenn die Zugangsdaten nicht korrekt sind, dann wird die Login-Seite gerendert.
        res.render('login.ejs',{
			Meldung: "Melden Sie sich zuerst an."
		});
	


// Die Funktion app.get('/geldAnlegen...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen im Browser ansurft.

app.get('/geldAnlegen', (req, res) => {

   // Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben 


	res.render('geldAnlegen.ejs',{
		
		// In der geldAnlegen.ejs gibt es die variablen Betrag und Laufzeit
	    // Der Server übergibt die folgenden Werte an den Server:

	Betrag: 120,
	Laufzeit:2,
	Meldung: ""
    });
});


	
app.post('/profil', (req, res) => {

	if(kunde.IstEingeloggt){
		
		let email = req.body.Email

		if(validator.validate(email)){
			console.log("Gültige EMail")
			meldung = "EMail Adresse ist gültig"
			kunde.Mail = email;



		}else{
			console.log("Ungültige E-Mail")
			meldung = "EMail Adresse ist ungültig"
		}
	}
    
	res.render('profil.ejs', {
		Meldung: meldung
		Email: kunde.Mail
	});




app.post('/geldAnlegen', (req, res) => {

	// Der Wert der Variablen Betrag wird aus dem Body Kundenanfrage (req) ausgelesen und zugewiesen

    let betrag = req.body.Betrag;
	console.log("geldAnlegen: Gewünschter Betrag: " + betrag + " Euro")
    let laufzeit = req.body.Laufzeit;
	console.log("geldAnlegen : Gewünschte Laufzeit: " + laufzeit + " Jahre")
    
	let zinssatz = 0.1 
    
	let zinsen = betrag * zinssatz;


	res.render('geldAnlegen.ejs',{ 
		Betrag: betrag,
		Laufzeit: laufzeit, 
		Meldung: "Ihre Zinsen betragen: " + zinsen 

	});
}); 

// Die App.get wird abgearbeitet, wenn die Seite im Browser angesurft wird
app.get('/login', (req, res) => {

	kunde.IstEingeloggt = false
    console.log("kunde.IstEingeloggt:" + kunde.IstEingeloggt)

	res.render('login.ejs',{
		Meldung: "Bitte Benutzername und Kennwort eingeben."
	});
});

// Die app.post wird abgearbeitet, wenn das Formular auf der Seite abgesendet wird
app.post('/login', (req, res) => {

    // Der Benutzername wird vom Browser an den Server übergeben.
    let benutzername = req.body.Benutzername;
	console.log("login: Benutzername: " + benutzername)
    
	// Das Kenwort wird vom Browser an den Server übergeben.
    let kennwort = req.body.Kennwort;
	console.log("login : Kennwort: " + kennwort)

    // es muss geprüft werden ob der Kunde mit diesem Benutzernamen das richtige Kennwort eingegebebn hat
    

	// Die Kontrollstruktur prüft auf die Korrektheit und Zugangsdaten
    if(kunde.Benutzername == benutzername && kunde.Kennwort == kennwort){
		console.log("Die Zugantgsdaten wurden korrekt eingegeben")
        meldung = "Die Zugangsdaten wurden korrekt eingegeben"
		
		kunde.IstEingeloggt = true;
		console.log("kunde.IstEingeloggt: + kunde.IstEingeloggt")


        //wenn der kunde seine Credentials korrekt eingegeben hat wird,
        //ein Cookie wird gesetzt:
        //um das ganze Kundeobjekt im Cookie speichern zu können wird das Kundenobjekt in eine Zeichenkette umgewandelt.
		//dazu wird die stringify Funktion auf das JSON Objekt aufgerufen.
		res.cookie('istAngemeldetAls', JSON.stringify(kunde), {maxAge: 900000, httpOnly: true, signed: false});
        console.log("Das Kundenobjekt im Cookie gespeichert")


		//ein Cookie wird gelöscht


		// Wenn die Eingabedaten korrekt eingegeben sind, dann wird die Index-Seite gerendert 
		res.render('login.ejs',{ 
	
			Meldung: "Sie wurden erfolgreich angemeldet"
	
		});
	}else{
		console.log("Die Zugangsdaten wurden NICHT korrekt eingegeben")
		meldung = "Die Zugangsdaten wurden NICHT korrekt eingegeben"
		kunde.IstEingeloggt = false;
	}


    // Wenn die Zugangsdaten nicht korrekt sind, dann wird die login-Seite erneut gerendert.
	res.render('login.ejs',{ 
	
		Meldung: "Sie wurden erfolgreich angemeldet"

	});
});



// Mit listen() wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen.  
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht
// immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);

//require('./uebungen/01-grundlagen.js');
//require('./uebungen/03-objekte.js');
//require('./klausuren/klausur20240930.js');
//require('./uebungen/04-funktionen.js');


//  ./node_modules/nodemon/bin/nodemon.js server.js 