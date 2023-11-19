import { stdin as input, stdout as output, exit, } from "process";
import { createInterface } from 'readline/promises';

const reader = createInterface({ input, output })


const name = await reader.question("What is your name?".padEnd(20, '.'));
const age = await reader.question("How old are you?".padEnd(20, '.'));


console.table({ name, age })



exit(1);


// ./../../../readline.js ==> relative path
// c:/********/readline.js  ===> absolute path


