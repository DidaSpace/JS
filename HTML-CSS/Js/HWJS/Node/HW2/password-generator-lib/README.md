# Password Generator Library

A library for generating random and secure passwords.

## Installation

```bash
npm install password-generator-lib
```

## Usage

const { generatePassword } = require('password-generator-lib');

const password = generatePassword(12, {
letters: true,
numbers: true,
specialChars: true
});

console.log(password);`// Outputs a 12-character password with letters, numbers, and special characters.`

## GitHub Repository

https://github.com/DidaSpace/JS/tree/main/HTML-CSS/Js/HWJS/Node/HW2/password-generator-lib
