#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let user = {
    name: "shafeeq",
    pin: 12345,
    balance: 100000
};
const atm = await inquirer.prompt([
    {
        name: "pin",
        type: "input",
        message: chalk.blue("Enter your pin"),
    }
]);
if (user.pin == atm.pin) {
    console.log(chalk.bgGreenBright(`Welcome ${user.name}`));
    const answer = await inquirer.prompt([
        {
            name: "method",
            type: "list",
            choices: ["Custom amount", "Fast cash", "Check balance"],
            message: "Select your withdraw method",
        }
    ]);
    if (answer.method === "Custom amount") {
        const customAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "input",
                message: chalk.blue("Enter your desired amount")
            }
        ]);
        user.balance = user.balance - customAmount.amount;
        if (customAmount.amount > user.balance) {
            console.log(chalk.bgRedBright("Insufficient Balance!"));
        }
        else {
            console.log(chalk.bgYellowBright(`You withdrew ${customAmount.amount}`));
            console.log(chalk.bgYellowBright(`Your current balance is ${user.balance}`));
        }
    }
    else if (answer.method === "Fast cash") {
        const FastCash = await inquirer.prompt([
            {
                name: "amount",
                type: "input",
                choices: ["500", "1000", "3000", "5000", "10000"],
                message: "Select your desired amount"
            }
        ]);
        user.balance = user.balance - FastCash.amount;
        if (FastCash.amount > user.balance) {
            console.log(chalk.bgRedBright("Insufficient Balance!"));
        }
        else {
            console.log(chalk.bgYellowBright(`You withdrew ${FastCash.amount}`));
            console.log(chalk.bgYellowBright(`Your current balance is ${user.balance}`));
        }
    }
    else if (answer.method === "Check balance") {
        console.log(chalk.bgYellowBright(`Your current balance is ${user.balance}`));
    }
}
else {
    console.log(chalk.bgRed("Wrong pin Try Again!"));
}
