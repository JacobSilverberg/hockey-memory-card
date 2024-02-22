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
    const shuffledPlayers = shuffleArray(players);
    const reRenderedPlayers = shuffledPlayers.map((player) => {
        player.id = uuid();
        return player;
    });
    setPlayers(reRenderedPlayers);
    };

    const resetGame = () => {
    setScore(0);
    setPlayers(
        players.map((player) => {
        player.clicked = false;
        return player;
        })
    );
    randomize();
    setModalIsOpen(true);
    };

    const handleClick = (id) => {
    let currentPlayer = players.filter((player) => player.id === id)[0];
    if (currentPlayer.clicked) {
        setModalMessage("Game Over! Try again?");
        resetGame();
        return;
    } else {
        currentPlayer.clicked = true;
        setScore((score) => score + 1);
        if (score >= bestScore) {
            setBestScore((score) => score + 1);
        }
        setPlayers(
            players.map((player) => {
                if (player.id === currentPlayer.id) {
                    return currentPlayer;
                }
                return player;
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
