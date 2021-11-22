import { useReducer, useState, useEffect } from "react";
import Game from "./components/Game/Game";
import { splitCoordinates, getRandom } from "./utils/utility";
import { checkWinner } from "./utils/checkWinner";

const scoreInit = {
	playerVsComputer: {
		player: 0,
		computer: 0,
		tie: 0,
	},
	playerVsPlayer: {
		player1: 0,
		player2: 0,
		tie: 0,
	},
};

const gameBoardInit = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

const animateBoardInit = [
	["0", "0", "0"],
	["0", "0", "0"],
	["0", "0", "0"],
];

function scoreReducer(prevState, action) {
	switch (action.type) {
		case "MANAGE_PLAYERS_SCORE": {
			const { playerId } = action;
			const cloneScore = {
				...prevState,
				playerVsComputer: { ...prevState.playerVsComputer },
				playerVsPlayer: { ...prevState.playerVsPlayer },
			};

			if (playerId === 1) {
				cloneScore.playerVsPlayer.player1 += 1;
			} else if (playerId === 2) {
				cloneScore.playerVsPlayer.player2 += 1;
			}

			return cloneScore;
		}
		case "MANAGE_PLAYERS_TIE": {
			const { multiplaying } = action;
			const cloneScore = {
				...prevState,
				playerVsComputer: { ...prevState.playerVsComputer },
				playerVsPlayer: { ...prevState.playerVsPlayer },
			};

			if (multiplaying) {
				cloneScore.playerVsPlayer.tie += 1;
			}

			return cloneScore;
		}

		case "PLAYER_VS_COMPUTER_SCORE": {
			const { winner } = action;
			const cloneScore = {
				...prevState,
				playerVsComputer: { ...prevState.playerVsComputer },
				playerVsPlayer: { ...prevState.playerVsPlayer },
			};

			if (winner === "player") cloneScore.playerVsComputer.player += 1;

			if (winner === "computer") cloneScore.playerVsComputer.computer += 1;

			return cloneScore;
		}
		case "PLAYER_VS_COMPUTER_TIE": {
			const cloneScore = {
				...prevState,
				playerVsComputer: { ...prevState.playerVsComputer },
				playerVsPlayer: { ...prevState.playerVsPlayer },
			};

			cloneScore.playerVsComputer.tie += 1;

			return cloneScore;
		}

		default:
			throw new Error("This action is unrecognized!");
	}
}

function boardReducer(prevState, action) {
	switch (action.type) {
		case "MARK_MOVE_ON_BOARD": {
			const { row, col } = action.payload.offset;
			const { mark } = action.payload;
			const cloneBoard = prevState.map((stateRow) => stateRow.map((stateCol) => stateCol));
			cloneBoard[row][col] = mark;
			return [...cloneBoard];
		}
		case "CLEAR_BOARD": {
			const cloneBoard = prevState.map((stateRow) => stateRow.map((stateCol) => ""));
			return cloneBoard;
		}

		default:
			throw new Error("This action is unrecognized!");
	}
}

function animateBoardReducer(prevState, action) {
	switch (action.type) {
		case "ANIMATE_WINNER": {
			const { posA, posB, posC } = action.payload.coordinates;
			const cloneBoard = prevState.map((stateRow) => stateRow.map((stateCol) => stateCol));
			const posAx = splitCoordinates(posA, 0);
			const posAy = splitCoordinates(posA, 1);
			const posBx = splitCoordinates(posB, 0);
			const posBy = splitCoordinates(posB, 1);
			const posCx = splitCoordinates(posC, 0);
			const posCy = splitCoordinates(posC, 1);
			cloneBoard[posAx][posAy] = "1";
			cloneBoard[posBx][posBy] = "1";
			cloneBoard[posCx][posCy] = "1";

			return cloneBoard;
		}

		case "ANIMATE_CLEAR": {
			const cloneBoard = prevState.map((stateRow) => stateRow.map((stateCol) => "0"));
			return cloneBoard;
		}

		default:
			throw new Error("This action is unrecognized!");
	}
}

const App = () => {
	const [score, dispatchScore] = useReducer(scoreReducer, scoreInit);
	const [board, dispatchBoard] = useReducer(boardReducer, gameBoardInit);
	const [animateBoard, dispatchAnimateBoard] = useReducer(animateBoardReducer, animateBoardInit);

	const [isComputerActive, setIsComputerActive] = useState(true);
	const [multiplayer, setMultiplayer] = useState(false);
	const [winner, setWinner] = useState(false);
	const [tie, setTie] = useState(false);
	const [turn, setTurn] = useState("");
	const [playerOnePlaying, setPlayerOnePlaying] = useState(false);
	const [playerTwoPlaying, setPlayerTwoPlaying] = useState(false);

	useEffect(() => {
		let coordinates;

		if (!winner && !multiplayer && isComputerActive && turn === "x") {
			coordinates = checkWinner("x", board);

			if (coordinates) {
				setWinner(true);
				dispatchScore({ type: "PLAYER_VS_COMPUTER_SCORE", winner: "player" });
				dispatchAnimateBoard({ type: "ANIMATE_WINNER", payload: { coordinates } });
			} else if (!winner && !tie) {
				setTurn("computer");
			}
		} else if (!winner && !multiplayer && isComputerActive && turn === "computer") {
			coordinates = checkWinner("o", board);

			if (coordinates) {
				setWinner(true);
				dispatchScore({ type: "PLAYER_VS_COMPUTER_SCORE", winner: "computer" });
				dispatchAnimateBoard({ type: "ANIMATE_WINNER", payload: { coordinates } });
				setTurn("computer");
			}
		} else if (!winner && multiplayer && !isComputerActive && turn === "x") {
			coordinates = checkWinner("x", board);
			console.log("check winner for x");

			if (coordinates) {
				setWinner(true);
				dispatchScore({ type: "MANAGE_PLAYERS_SCORE", playerId: 1 });
				dispatchAnimateBoard({ type: "ANIMATE_WINNER", payload: { coordinates } });
				setTurn("x");
			}
		} else if (!winner && multiplayer && !isComputerActive && turn === "o") {
			coordinates = checkWinner("o", board);
			console.log("check winner for o");

			if (coordinates) {
				setWinner(true);
				dispatchScore({ type: "MANAGE_PLAYERS_SCORE", playerId: 2 });
				dispatchAnimateBoard({ type: "ANIMATE_WINNER", payload: { coordinates } });
			}
		}
	}, [winner, multiplayer, isComputerActive, turn, board]);

	useEffect(() => {
		if (multiplayer && !isComputerActive) {
			checkIsTie();
		}
	}, [turn]);

	useEffect(() => {
		function handleComputerTurn() {
			if (turn === "computer" && !multiplayer && isComputerActive) {
				const offsetX = getRandom(0, 2);
				const offsetY = getRandom(0, 2);

				if (!board[offsetX][offsetY]) {
					dispatchBoard({
						type: "MARK_MOVE_ON_BOARD",
						payload: { offset: { row: offsetX, col: offsetY }, mark: "o" },
					});

					setTurn("");
				} else if (!checkIsTie()) {
					handleComputerTurn();
				}
			}
		}

		const clearTimer = setTimeout(() => {
			if (!winner && !tie) {
				handleComputerTurn();
			}
		}, 500);

		return () => {
			clearTimeout(clearTimer);
		};
	}, [turn, isComputerActive, multiplayer, winner]);

	useEffect(() => {
		if (tie && !multiplayer && isComputerActive) {
			setTurn("");
		}
	}, [tie, multiplayer, isComputerActive]);

	useEffect(() => {
		if (playerOnePlaying && !playerTwoPlaying) {
			setTurn("x");
		}
		if (!playerOnePlaying && playerTwoPlaying) {
			setTurn("o");
		}

		if (winner && multiplayer) {
			setTurn("x");
		}
	});

	useEffect(() => {
		if (multiplayer && !isComputerActive) {
			setTurn("x");
		} else if (!multiplayer && isComputerActive) {
			setTurn("");
		}
	}, [multiplayer, isComputerActive]);

	const checkIsTie = () => {
		if (!tie) {
			let occupied = 0;
			board.forEach((row) =>
				row.forEach((col) => {
					if (col) {
						occupied++;
					}
				})
			);

			if (occupied === 9 && !winner) {
				setTie(true);

				if (!multiplayer && isComputerActive) {
					dispatchScore({ type: "PLAYER_VS_COMPUTER_TIE" });
				}

				if (multiplayer && !isComputerActive) {
					dispatchScore({ type: "MANAGE_PLAYERS_TIE", multiplaying: true });
				}

				return true;
			}

			return false;
		}
	};

	const handleComputerActive = () => {
		setIsComputerActive((state) => !state);
	};

	const handleTurn = (turn) => {
		setTurn(turn);
	};

	const handleMultiplayer = () => {
		setMultiplayer((state) => !state);
	};

	const handleRestart = () => {
		if (!multiplayer && isComputerActive) {
			dispatchBoard({ type: "CLEAR_BOARD" });
			dispatchAnimateBoard({ type: "ANIMATE_CLEAR" });
			setTurn("");
			setIsComputerActive(true);
			setMultiplayer(false);
			winner && setWinner(false);
			tie && setTie(false);
		} else {
			dispatchBoard({ type: "CLEAR_BOARD" });
			dispatchAnimateBoard({ type: "ANIMATE_CLEAR" });
			setTurn("x");
			setIsComputerActive(false);
			setMultiplayer(true);
			setPlayerOnePlaying(false);
			setPlayerTwoPlaying(false);
			winner && setWinner(false);
			tie && setTie(false);
		}
	};

	const handleMultiplaying = () => {
		handleMultiplayer();
		handleComputerActive();
		dispatchBoard({ type: "CLEAR_BOARD" });
		dispatchAnimateBoard({ type: "ANIMATE_CLEAR" });
		setPlayerOnePlaying(false);
		setPlayerTwoPlaying(false);
		winner && setWinner(false);
		tie && setTie(false);
	};

	console.log("multiplayer", multiplayer);
	console.log("computerActive", isComputerActive);
	console.log("turn", turn);
	console.log("winner", winner);
	console.log("tie", tie);
	console.log("playerOnePlaying", playerOnePlaying);
	console.log("playerTwoPlaying", playerTwoPlaying);

	const handleMove = ({ rowId, colId }) => {
		if (turn === "") {
			setTurn("x");
			dispatchBoard({
				type: "MARK_MOVE_ON_BOARD",
				payload: { offset: { row: rowId, col: colId }, mark: "x" },
			});
		} else if (turn === "x" && multiplayer && !isComputerActive) {
			dispatchBoard({
				type: "MARK_MOVE_ON_BOARD",
				payload: { offset: { row: rowId, col: colId }, mark: "x" },
			});
			setPlayerOnePlaying(false);
			setPlayerTwoPlaying(true);
		} else if (turn === "o" && multiplayer && !isComputerActive) {
			dispatchBoard({
				type: "MARK_MOVE_ON_BOARD",
				payload: { offset: { row: rowId, col: colId }, mark: "o" },
			});
			setPlayerOnePlaying(true);
			setPlayerTwoPlaying(false);
		}
	};

	const boardProps = {
		score: {
			gameScore: score,
			handleGameScore: dispatchScore,
		},
		computerPlaying: {
			isComputerPlaying: isComputerActive,
			handleComputerPlaying: handleComputerActive,
		},
		multiplaying: {
			isMultiplaying: multiplayer,
			handleMultiplaying: handleMultiplayer,
			doMultiplaying: handleMultiplaying,
		},
		board: {
			gameBoard: board,
			handleGameBoard: dispatchBoard,
		},
		animateGameBoard: {
			animateBoard,
			handleAnimateBoard: dispatchAnimateBoard,
		},
		winner: {
			isWinner: winner,
			handleWinner: setWinner,
		},
		tie: {
			isTie: tie,
			handleTie: setTie,
			checkIsTie,
		},
		turn: {
			activeTurn: turn,
			handleActiveTurn: handleTurn,
		},
		restart: handleRestart,
		onMove: handleMove,
	};

	return <Game {...boardProps} />;
};

export default App;
