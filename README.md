# Guess Number CLI Game

A simple Command Line Interface (CLI) number guessing game built with TypeScript and Inquirer. The game randomly selects a number between 1 and 100, and the player must guess the number within a limited number of attempts based on the chosen difficulty level.

## Features

-   **Difficulty Levels**: Choose from Easy, Medium, or Hard difficulty, which determines the number of attempts you get.
-   **Interactive CLI**: Uses Inquirer for a smooth and interactive command-line experience.
-   **Feedback**: After each guess, the game tells you whether the target number is higher or lower than your guess.
-   **Winning and Losing**: Win by guessing the correct number within the allowed attempts, or lose if you run out of chances.

## Prerequisites

Before running the game, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/luis-alvarez1/guess-number-cli.git
    cd guess-number-cli
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Build the project** (if necessary):

    ```bash
    npm run build
    ```

4.  **Run the game**:

    ```bash
    npm start
    ```

    Alternatively, you can Install the CLI on your system:

    ```sh

    npm install -g

    ```

    And run the nex command on your terminal:

    ```sh
     guess-number
    ```

## How to Play

1. **Start the game** by running the command `npm start` or `npx ts-node src/index.ts`.
2. **Select a difficulty level**:
    - **Easy**: 10 attempts
    - **Medium**: 5 attempts
    - **Hard**: 3 attempts
3. **Enter your guess** when prompted. The game will tell you if the target number is higher or lower than your guess.
4. **Keep guessing** until you either guess the correct number or run out of attempts.
5. **Win or lose**: If you guess the number correctly, you win! Otherwise, you can choose if you want to play again or not.

## Example Gameplay

```plaintext
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
? Please select the difficulty level: (Use arrow keys)
> Easy (10 chances)
  Medium (5 chances)
  Hard (3 chances)

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.

Enter your guess: 25
Incorrect! The number is greater than 25.

Enter your guess: 35
Incorrect! The number is less than 35.

Enter your guess: 30
Congratulations! You guessed the correct number in 4 attempts.
```

## Project Structure

```
guess-number-cli/
├── .gitignore						# Files and directories to ignore
├── LICENSE							# License
├── package.json					# Project dependencies and scripts
├── src								# Main code base
    ├── index.ts					# Main game logic
    └── util						# utilities
    │   ├── difficulty-levels.ts	# Difficulty levels and values
    │   └── format-ms.ts			# Format milliseconds into seconds or minutes
├── tsconfig.json 					# TypeScript configuration
├── README.md 						# Docs
└── yarn.lock
```

## Technologies Used

-   **TypeScript**: For type-safe JavaScript development.
-   **Inquirer**: For interactive command-line prompts.
-   **Node.js**: For running the game in a CLI environment.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

https://roadmap.sh/projects/number-guessing-game
