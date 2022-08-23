import {mergeRight} from "ramda";
import {currentLevel, INITIAL_STATE} from "../initial.state";

export const resetReducer = (state, action) => {
	if (action.lifeLines > 0) {
		return mergeRight({...INITIAL_STATE, lifeLines: action.lifeLines}, {
			level: action.level,
			levelConfig: {...currentLevel[action.level]}
		});
	} else {
		return mergeRight({...INITIAL_STATE, lifeLines: action.lifeLines}, {
			level: 'life/over',
			levelConfig: 'life/over',
			gameOver: true
		});
	}
}
