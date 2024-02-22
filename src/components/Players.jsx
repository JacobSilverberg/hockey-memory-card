function Players({ players, handleClick }) {
    return (
        <div className="Main">
            {players.map((player) => (
            <div
                onClick={() => handleClick(player.id)}
                key={player.id}
                className="playerContainer"
            >
                <img className="playerImg" src={player.src} alt={player.name} />
                <h3 className="playerH3">{player.name}</h3>
                <p style={{ display: "none" }}>{player.reRender}</p>
            </div>
            ))}
        </div>
    );
}
  
export default Players;
  