# Smartphone Comparator – Progetto Finale
Corso Full Stack Web Developer

Questo repository contiene il codice frontend del progetto finale del corso Full Stack Web Developer realizzato con React e Vite.

## Descrizione del progetto
Smartphone Comparator è un'applicazione web che permette di confrontare diversi modelli di smartphone per aiutare l’utente a scegliere il dispositivo più adatto alle proprie esigenze.
L’applicazione si appoggia ad un backend proprietario di Boolean (non incluso e non pubblico in questa repository), dal quale vengono recuperate le informazioni aggiornate su dispositivi, caratteristiche tecniche e prezzi.

## Stack Tecnologico
Frontend: React, Vite

Linguaggi: JavaScript, HTML, CSS, TypeScript (minor uso)

Gestione Pacchetti: npm

## Funzionalità principali
Ricerca e filtro degli smartphone tramite vari criteri (marca, prezzo, caratteristiche tecniche ecc.)

Confronto diretto tra modelli selezionati

Visualizzazione schede dettagliate per ogni dispositivo

Design responsivo

## Prerequisiti e configurazione
Clona la repository:

bash
git clone https://github.com/riccardo-guido/progetto-finale-spec-frontend-front.git

Installa le dipendenze:

bash
npm install

Configura l’endpoint del backend (se richiesto):
Le informazioni sugli smartphone vengono caricate da un backend remoto fornito durante il corso.
Specificare l’URL del backend nelle variabili d’ambiente (solitamente file .env). 
Esempio:

text
VITE_API_URL=https://<URL-backend-boolean>
Avvia il progetto:

bash
npm run dev

L’app sarà visibile su http://localhost:5173

## Struttura delle Cartelle
public/ – file statici

src/ – codice sorgente React

.env – variabili ambiente per connessione backend

## Note tecniche
Hot Module Replacement (HMR) con Vite

ESLint configurato

Possibilità di estendere con TypeScript

## Limitazioni
Questo repository non contiene codice backend; i dati vengono forniti da un’API esterna di proprietà di Boolean.

Senza accesso all’endpoint backend, alcune funzionalità non saranno disponibili.

##Credits
Progetto sviluppato da Riccardo Guido per il corso Boolean Careers.
