import styles from "./Restart.module.css";

const Restart = (props) => {
	const { winner, tie, restart } = props;

	const classesForRestart = () => {
		return winner.isWinner || tie.isTie
			? `${styles.restart} ${styles.show}`
			: `${styles.restart} ${styles.hide}`;
	};

	return <div className={classesForRestart()} onClick={restart}></div>;
};

export default Restart;
