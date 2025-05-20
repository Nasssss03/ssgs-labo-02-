# Labo-String: CLI per Utilità su Stringhe

Una Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità

* Inversione di una stringa
* Verifica se una stringa è palindroma
* Troncamento di una stringa a una lunghezza massima specificata
* Conteggio delle occorrenze di ciascun carattere in una stringa

## Prerequisiti

* Node.js (versione 14 o superiore)
* npm (incluso con Node.js)

## Installazione

1. Clona il repository:
```bash
git clone <repository-url>
cd labo-string
```

2. Installa le dipendenze:
```bash
npm install
```

## Utilizzo

Per eseguire l'applicazione:

```bash
npm start
```

### Comandi Disponibili

* `reverse <string>` - Inverte la stringa fornita
* `palindrome <string>` - Verifica se la stringa è palindroma
* `truncate <string> <length>` - Tronca la stringa alla lunghezza specificata
* `count <string>` - Conta le occorrenze di ciascun carattere nella stringa

## Sviluppo

### Esecuzione dei Test

```bash
# Esegui tutti i test
npm test

# Esegui i test in modalità watch
npm run test:watch

# Genera report di coverage
npm run test:coverage
```

## Contribuire

1. Crea un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito con licenza ISC. Vedi il file `LICENSE` per maggiori dettagli.