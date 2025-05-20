# Labo-String

[![Node.js CI](https://github.com/Nasssss03/ssgs-labo-02-/actions/workflows/ci.yml/badge.svg)](https://github.com/Nasssss03/ssgs-labo-02-/actions)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](./coverage/lcov-report/index.html)

A professional, extensible CLI tool for advanced string manipulation, built with Node.js.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Testing](#testing)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Reverse** a string
- **Check** if a string is a palindrome
- **Truncate** a string to a specified length
- **Count** character occurrences in a string
- 100% test coverage with Jest
- Modern CLI experience with [commander](https://www.npmjs.com/package/commander)

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Nasssss03/ssgs-labo-02-.git
cd ssgs-labo-02-
npm install
```

---

## Usage

Run the CLI with:

```bash
npm start -- <command> [arguments]
```

Or, if installed globally:

```bash
labo-string <command> [arguments]
```

---

## Available Commands

- `reverse <string>`  
  _Reverse the provided string._

- `palindrome <string>`  
  _Check if the string is a palindrome._

- `truncate <string> <length>`  
  _Truncate the string to the specified length._

- `count <string>`  
  _Count the occurrences of each character in the string._

**Examples:**
```bash
npm start -- reverse "hello"
npm start -- palindrome "racecar"
npm start -- truncate "hello world" 5
npm start -- count "banana"
```

---

## Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate a coverage report:
```bash
npm run test:coverage
```
Coverage reports are available in the `coverage/` directory.

---

## Development

- Source code: [`src/`](./src)
- Tests: [`src/__tests__/`](./src/__tests__)

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

---

**Author:** Nassim (<nassim@gmail.com>)
