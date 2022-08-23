import {mergeRight} from "ramda";

export const hiddenCellShowReducer = (state) => {
	return mergeRight(state, {showHidden: true});
}
