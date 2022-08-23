import {mergeRight} from "ramda";

export const fieldShowReducer = (state) => {
	return mergeRight(state, {showField: true})
}
