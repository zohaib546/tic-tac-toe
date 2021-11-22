import styles from "./Square.module.css";

const Square = (props) => {
	const { offset, value, animateGameBoard, winner, tie, onMove } = props;

	const renderClasses = () => {
		if (
			animateGameBoard.animateBoard[offset.rowId][offset.colId] === "1" &&
			winner.isWinner &&
			value
		) {
			return `${styles.square} ${styles.disabled} ${styles.winner}`;
		}

		if (animateGameBoard.animateBoard[offset.rowId][offset.colId] === "0" && winner.isWinner) {
			return `${styles.square} ${styles.disabled} ${styles.over}`;
		}

		if (
			animateGameBoard.animateBoard[offset.rowId][offset.colId] === "0" &&
			!winner.isWinner &&
			tie.isTie
		) {
			return `${styles.square} ${styles.disabled} ${styles.over} ${styles.tie}`;
		}

		if (!winner.isWinner && value) {
			return `${styles.square} ${styles.disabled}`;
		}

		return `${styles.square}`;
	};

	const handleMove = () => {
		onMove(offset);
	};

	return (
		<div className={renderClasses()} onClick={handleMove}>
			{value}
		</div>
	);
};

export default Square;
