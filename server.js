/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	//res ist die Anwort des Severs an den Browser.
	//send() ist die Anweisung etwas an den Browser zu schicken.
    //res.send('Hello remote world!\n');

	// Das res Objekt kann noch mehr als nur eine Zeichenkette an den browser zu senden. 
	// Das res Objekt kaDasnn mit der Funktion render() eine HTML Datei an den Brows
	res.render('index.ejs', {});

});

app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der Konsole
//angezeigt, was der Server macht. Der Programmierer schreibt dazu
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll
// Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);

// require('./Uebungen/01-grundlagen.js');
// require('./Uebungen/02-boolean.js');
// require('./Uebungen/03-objekte.js');
// require('./Klausuren/ KlausurTest20240930.js')
require('./Uebungen/04-funktionen.js');


