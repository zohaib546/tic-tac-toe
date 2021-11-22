import Board from "../Board/Board";
import Score from "../Scores/Score";
import Restart from "../Restart/Restart";
import styles from "./Game.module.css";

const Game = (props) => {
	return (
		<div className={styles.gameContainer}>
			<Board {...props} />
			<Score {...props} />
			<Restart {...props} />
		</div>
	);
};

export default Game;
