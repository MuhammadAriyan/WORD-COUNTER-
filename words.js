#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgMagenta("``WORD`COUNTER``"));
const input = await inquirer.prompt({
    type: "input",
    name: "a",
    message: chalk.yellow("ENTER YOUR WORD"),
    validate(ans) {
        if (ans) {
            return true;
        }
        return chalk.red('PLEASE ENTER VALID INPUT');
    }
});
console.log(chalk.green(`YOUR SENTENCE : ${input.a} `));
let B = input.a.trim().replace(/\s+/g, ' ');
let c = B.split(' ');
console.log(chalk.blue(`IT GOT ${c.length} WORDS `));
