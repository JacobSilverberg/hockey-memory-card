import { useState } from "react";
import Header from "./Header";
import App from "./App";
import Footer from "./Footer";

function Controller() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <div className="App">
            <Header score={score} bestScore={bestScore} />
            <App
                score={score}
                bestScore={bestScore}
                setScore={setScore}
                setBestScore={setBestScore}
            />
            <Footer />
        </div>
    );
}

export default Controller;
