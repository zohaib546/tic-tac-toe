import Square from "../Square/Square";
import styles from "./Board.module.css";

const Board = (props) => {
	const { board } = props;

	const generateKey = (row, col) => `${row}_${col}`;

	return (
		<div className={styles.board}>
			<div className={styles.boardContainer}>
				{board.gameBoard.map((row, rowId) =>
					row.map((col, colId) => (
						<Square
							key={generateKey(rowId, colId)}
							offset={{ rowId, colId }}
							value={col}
							{...props}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Board;
