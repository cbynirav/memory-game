import {mergeRight} from "ramda";

export const fieldHideReducer = (state) => {
	return mergeRight(state, {showField: false})
}
