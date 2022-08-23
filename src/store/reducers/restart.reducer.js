import {mergeRight} from "ramda";
import {currentLevel, INITIAL_STATE, START_LEVEL} from "../initial.state";

export const restartReducer = () => {
	return mergeRight(INITIAL_STATE, {levelConfig: {...currentLevel[START_LEVEL]}})
}
