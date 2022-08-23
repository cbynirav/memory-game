import {mergeRight} from "ramda";

export const hiddenCellHideReducer = (state) => {
	return mergeRight(state, {showHidden: false});
}
