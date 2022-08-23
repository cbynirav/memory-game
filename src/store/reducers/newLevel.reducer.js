import {mergeRight} from "ramda";
import {currentLevel} from "../initial.state";

export const newLevelReducer = (state, action) => {
	if (currentLevel[action.level]) {
		return mergeRight(state, {level: action.level, levelConfig: currentLevel[action.level]});
	} else {
		return mergeRight(state, {level: 'game/over', levelConfig: 'game/over', gameOver: true});
	}
}
