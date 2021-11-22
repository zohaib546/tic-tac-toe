export function checkWinner(mark, board) {
	if (mark === board[0][0] && mark === board[0][1] && mark === board[0][2]) {
		return {
			posA: "00",
			posB: "01",
			posC: "02",
		};
	}
	if (mark === board[1][0] && mark === board[1][1] && mark === board[1][2]) {
		return {
			posA: "10",
			posB: "11",
			posC: "12",
		};
	}
	if (mark === board[2][0] && mark === board[2][1] && mark === board[2][2]) {
		return {
			posA: "20",
			posB: "21",
			posC: "22",
		};
	}
	if (mark === board[0][0] && mark === board[1][0] && mark === board[2][0]) {
		return {
			posA: "00",
			posB: "10",
			posC: "20",
		};
	}
	if (mark === board[0][1] && mark === board[1][1] && mark === board[2][1]) {
		return {
			posA: "01",
			posB: "11",
			posC: "21",
		};
	}
	if (mark === board[0][2] && mark === board[1][2] && mark === board[2][2]) {
		return {
			posA: "02",
			posB: "12",
			posC: "22",
		};
	}
	if (mark === board[0][0] && mark === board[1][1] && mark === board[2][2]) {
		return {
			posA: "00",
			posB: "11",
			posC: "22",
		};
	}
	if (mark === board[0][2] && mark === board[1][1] && mark === board[2][0]) {
		return {
			posA: "02",
			posB: "11",
			posC: "20",
		};
	}

	return false;
}
