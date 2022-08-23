import React, { memo, useReducer, useMemo, useEffect } from 'react';

import { Field } from './components/GameField';
import {GameFieldView, GameView, RestartGame, LifeLineIcon, NoLifeLine, LifeLineRemains} from './components/Styled';
import { NEW_LEVEL, FIELD_HIDE, FIELD_SHOW, RESET_LEVEL, RESTART_GAME,} from './store/memory.action';
import { GameReducer } from './store/memory.reducer';
import { generateGameField } from './utils';
import {INITIAL_STATE} from "./store/initial.state";

function Game() {
    const [ { level, showHidden, showField, levelConfig, gameOver, lifeLines }, dispatch] = useReducer(GameReducer, INITIAL_STATE);

    let cellCount, memoryCount;
    if (levelConfig !== 'game/over') {
        cellCount = levelConfig.cellCount
        memoryCount = levelConfig.memoryCount
    }


    const { field, hiddenCells } = useMemo(
        () => (cellCount && memoryCount) ? generateGameField(cellCount, memoryCount) : {field: [], hiddenCells: []},
        [levelConfig]
    );

    useEffect(
        () => setTimeout(dispatch, 500, { type: FIELD_SHOW }),
        [levelConfig],
    );


    function updateLevel({shouldReset, LifeLost, updatedLifeLines}) {
			dispatch({ type: FIELD_HIDE });
			if (LifeLost) {
				setTimeout(dispatch, 500, { type: shouldReset ? RESET_LEVEL : NEW_LEVEL, level: level , lifeLines:updatedLifeLines});
			} else {
				setTimeout(dispatch, 500, { type: shouldReset ? RESET_LEVEL : NEW_LEVEL, level: level + 1, lifeLines:updatedLifeLines });
			}
    }

    return (
        <GameView>
            <GameFieldView {...levelConfig}>
                 <div>
                    <span><b>Level : {(level !== 'game/over' && level !== 'life/over') ? level + 1 : level}</b></span>
                    {
											(level !== 'game/over' && level !== 'life/over') ?
											lifeLines > 0 ? [...Array(lifeLines)].map((x, i) => <LifeLineIcon src='/lifeline.png' key={i} /> ) : <NoLifeLine>No Life.!</NoLifeLine> : null
										}
                </div>
                {
                    gameOver ?
													level === 'game/over' ?
														<>
																<h1><b>Congratulations .!</b></h1>
																<p>You completed all the levels... <LifeLineRemains><b>{lifeLines}</b> Life remaining..!</LifeLineRemains></p>
																<RestartGame onClick={
																		() => setTimeout(dispatch, 0, { type: RESTART_GAME, level: 0 })
																}
																>Restart ?</RestartGame>
														</>
														:
														<>
																<h1><b>Ohh Boy .!</b></h1>
																<p>You don't have any lifeline..</p>
																<RestartGame onClick={
																		() => setTimeout(dispatch, 0, { type: RESTART_GAME, level: 0 })
																}
																>Restart ?</RestartGame>
														</>
                        :
                        <Field
                            {...levelConfig}
                            levelConfig={levelConfig}
                            visible={showField}
                            key={field}
                            level={level}
                            field={field}
                            hiddenCells={hiddenCells}
                            dispatch={dispatch}
														lifeLines={lifeLines}
                            showHidden={showHidden}
                            updateLevel={updateLevel}
                        />
                }
            </GameFieldView>
        </GameView>
    );
}

export default memo(Game);
