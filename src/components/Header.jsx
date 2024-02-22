function Header({ score, bestScore }) {
    return (
        <header className="Header">
            <h1>Hockey Memory</h1>
            <div className="scoreContainer">
                <div className="scoreCard">Score: {score}</div>
                <div className="scoreCard">High Score: {bestScore}</div>
            </div>
        </header>
    );
}
  
export default Header;
  