#!/usr/bin/env node

import figlet from "figlet";

import { confirm, number, select } from "@inquirer/prompts";
import chalk from "chalk";
import { DIFF_LEVELS } from "./util/difficulty-levels";
import { formatMilliseconds } from "./util/format-ms";

const checkPlayAgain = async () => {
    return await confirm({ message: "Play again?", default: false });
};

const main = async () => {
    console.log(chalk.blackBright(figlet.textSync("Guess number game")));
    console.log(chalk.yellowBright("Welcome to the Number Guessing Game!"));
    console.log(
        chalk.yellowBright("I'm thinking of a number between 1 and 100.")
    );
    let playAgain = true;

    while (playAgain) {
        console.clear();
        const difficulty: string = await select({
            message: "Please select the difficulty level:",
            choices: [
                {
                    value: "easy",
                    name: "Easy (10 chances)",
                },
                {
                    value: "medium",
                    name: "Medium (5 chances)",
                },
                {
                    value: "hard",
                    name: "Hard (3 chances)",
                },
            ],
        });

        const chances: number = DIFF_LEVELS[difficulty];

        console.log(
            chalk.green(
                `Great! You have selected the ${difficulty} difficulty level.`
            )
        );

        console.log(chalk.cyanBright("Let's start the game!"));

        const startTime = Date.now();

        let attemps = 0;
        const numberToGuess = +(Math.random() * 100).toFixed(0) + 1; // number between 1 and 100

        while (attemps < chances) {
            let userInput = await number({
                message: chalk.blueBright("Enter your guess"),
                validate: (input: number | undefined) => {
                    if (input && input >= 1 && input <= 100) {
                        return true;
                    }
                    return "Please enter a number between 1 and 100.";
                },
            });

            if (!userInput) {
                userInput = 0;
            }

            if (userInput === numberToGuess) {
                console.log(
                    chalk.greenBright(
                        `Congratulations! You guessed the correct number in ${attemps} attempts.`
                    )
                );
                break;
            }

            const isGreater = userInput < numberToGuess;

            console.log(
                chalk.red(
                    `Incorrect! The number is ${
                        isGreater ? "greater" : "less"
                    } than ${userInput}`
                )
            );

            attemps++;
        }

        if (attemps >= chances) {
            console.log(chalk.redBright("You runned out of chances!"));
        }
        const endTime = Date.now() - startTime;

        console.log(
            chalk.cyanBright(`You spent ${formatMilliseconds(endTime)}`)
        );
        playAgain = await checkPlayAgain();
    }
};

main();

process.on("uncaughtException", (error) => {
    if (error instanceof Error && error.name === "ExitPromptError") {
        console.log("👋 until next time!");
    } else {
        // Rethrow unknown errors
        throw error;
    }
});
