#!/usr/bin/env node

const { program } = require('commander');
const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./src/stringUtils');

program
    .name('labo-string')
    .description('CLI utility for string manipulation operations')
    .version('1.0.0');

program
    .command('reverse')
    .description('Reverse a string')
    .argument('<string>', 'string to reverse')
    .action((str) => {
        console.log(reverseString(str));
    });

program
    .command('palindrome')
    .description('Check if a string is a palindrome')
    .argument('<string>', 'string to check')
    .action((str) => {
        const result = isPalindrome(str);
        console.log(`"${str}" is ${result ? '' : 'not '}a palindrome`);
    });

program
    .command('truncate')
    .description('Truncate a string to specified length')
    .argument('<string>', 'string to truncate')
    .argument('<length>', 'maximum length', parseInt)
    .action((str, length) => {
        console.log(truncateString(str, length));
    });

program
    .command('count')
    .description('Count character occurrences in a string')
    .argument('<string>', 'string to analyze')
    .action((str) => {
        const counts = countCharacters(str);
        console.log('Character counts:');
        Object.entries(counts)
            .sort(([a], [b]) => a.localeCompare(b))
            .forEach(([char, count]) => {
                console.log(`  ${char}: ${count}`);
            });
    });

program.parse();