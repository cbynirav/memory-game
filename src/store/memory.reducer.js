import {
	FIELD_HIDE, FIELD_SHOW, HIDDEN_CELL_HIDE,
	HIDDEN_CELL_SHOW, NEW_LEVEL, RESET_LEVEL, RESTART_GAME
} from "./memory.action";

import {newLevelReducer} from "./reducers/newLevel.reducer";
import {hiddenCellShowReducer} from "./reducers/hiddenCellShow.reducer";
import {hiddenCellHideReducer} from "./reducers/hiddenCellHide.reducer";
import {fieldHideReducer} from "./reducers/fieldHide.reducer";
import {fieldShowReducer} from "./reducers/fieldShow.reducer";
import {resetReducer} from "./reducers/reset.reducer";
import {restartReducer} from "./reducers/restart.reducer";

export const GameReducer = (state, action) => {
	switch (action.type) {
		case NEW_LEVEL:
			return newLevelReducer(state, action)
		case HIDDEN_CELL_SHOW:
			return hiddenCellShowReducer(state)
		case HIDDEN_CELL_HIDE:
			return hiddenCellHideReducer(state)
		case FIELD_HIDE:
			return fieldHideReducer(state);
		case FIELD_SHOW:
			return fieldShowReducer(state);
		case RESET_LEVEL:
			return resetReducer(state, action)
		case RESTART_GAME:
			return restartReducer();
		default:
			return state;
	}
}
