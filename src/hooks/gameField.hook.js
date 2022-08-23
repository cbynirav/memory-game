import {useState} from "react";
import {CORRECT_GUESSED_CELL, WRONG_GUESSED_CELL} from "../utils";

export const useGameField = (field, hiddenCells, updateLevel, lifeLines) => {
	const [gameField, setField] = useState(field);
	const [gameHiddenCells, setHidden] = useState(hiddenCells);

	const onCellClick = ({target}) => {
		const id = Number(target.id);

		if (hiddenCells.includes(id)) {
			const updatedField = gameField.map((e, i) => i === id ? CORRECT_GUESSED_CELL : e);
			const updatedHidden = gameHiddenCells.filter(e => e !== id);

			setField(updatedField);
			setHidden(updatedHidden);

			return !updatedHidden.length && setTimeout(updateLevel, 1000, {
				shouldReset: false,
				LifeLost: false,
				updatedLifeLines: lifeLines
			});
		}

		const updatedField = gameField.map((e, i) => i === id ? WRONG_GUESSED_CELL : e);
		setField(updatedField);

		return setTimeout(updateLevel, 1000, {shouldReset: true, LifeLost: true, updatedLifeLines: lifeLines - 1});
	}

	return {gameField, onCellClick};
}
