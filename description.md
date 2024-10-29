Tic Tac Toe Game in React
This repository contains a classic Tic Tac Toe game built with React. The project is designed to demonstrate key React concepts such as component-based architecture, state management, and event handling, making it a great reference for beginners.

🎮 Features
Component-Based Design: The app is divided into simple, reusable components:

Game: Manages the main game logic, including board state, player turns, and game status.
Board: Renders a 3x3 grid of Square components.
Square: Represents an individual cell in the grid and displays an "X" or "O" in a red font color.
Winner Calculation: A helper function (calculateWinner) checks the board after each turn to see if a player has won. This function covers all possible winning combinations.

Responsive UI: The layout is designed to be minimal and centered, with clear status updates and a "Restart Game" button to reset the board.

🛠️ Installation

Clone the repository:
git clone https://github.com/DebashisDhali/tictactoe-react.git
cd tictactoe-react

Install dependencies:
npm install
Start the development server:

npm start
Open http://localhost:3000 to play the game in your browser.

📂 Project Structure
App.js: The main component that renders the Game component.
Game.js: Contains the game logic, handles user moves, and manages the game state.
Board.js: Renders a 3x3 grid of Square components.
Square.js: Represents each square in the Tic Tac Toe board.
TicTacToe.css: Basic CSS for layout and styling, including red font color for "X" and "O".
🔥 Demo
Try the game live:(https://reacttictactoeapp.netlify.app/)

This Tic Tac Toe project is a fun way to learn React while creating an interactive, classic game. Feel free to fork, modify, and expand it!
