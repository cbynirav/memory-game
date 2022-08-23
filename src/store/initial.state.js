import AllLevelsData from "../config/levels.json";

export const START_LEVEL = 0;

export const AllLevels = AllLevelsData;

export const currentLevel = AllLevels['easy']

export const INITIAL_STATE = {
	level: START_LEVEL,
	showHidden: true,
	showField: false,
	gameOver: false,
	lifeLines: 5,
	levelConfig: currentLevel[START_LEVEL],
}
