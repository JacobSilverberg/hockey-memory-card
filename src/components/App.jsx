import { useState } from "react";
import playerList from "./PlayerList";
import Players from "./Players";
import Modal from "./Modal";
import { v4 as uuid } from 'uuid';

function App({ score, bestScore, setScore, setBestScore }) {
    const [players, setPlayers] = useState(playerList);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [modalMessage, setModalMessage] = useState(
    "Welcome to the Hockey memory game! Try not to click the same player twice!"
    );

    const randomize = () => {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledGames = shuffleArray(players);
    const reRenderedGames = shuffledGames.map((game) => {
        game.id = uuid();
        return game;
    });
    setPlayers(reRenderedGames);
    };

    const resetGame = () => {
    setScore(0);
    setPlayers(
        players.map((game) => {
        game.clicked = false;
        return game;
        })
    );
    randomize();
    setModalIsOpen(true);
    };

    const handleClick = (id) => {
    let currentGame = players.filter((game) => game.id === id)[0];
    if (currentGame.clicked) {
        setModalMessage("Game Over! Try again?");
        resetGame();
        return;
    } else {
        currentGame.clicked = true;
        setScore((score) => score + 1);
        if (score >= bestScore) {
            setBestScore((score) => score + 1);
        }
        setPlayers(
            players.map((game) => {
                if (game.id === currentGame.id) {
                return currentGame;
                }
                return game;
            })
        );
        randomize();
        if (score === players.length - 1) {
            setModalMessage("You win! Play again?");
            resetGame();
        }
        return;
    }
    };

    return (
    <div>
        <Modal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            modalMessage={modalMessage}
        />
        <Players players={players} handleClick={handleClick} />
    </div>
    );
}

export default App;
