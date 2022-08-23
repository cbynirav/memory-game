import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';

import {HIDDEN_CELL_HIDE, HIDDEN_CELL_SHOW} from '../store/memory.action';
import { Cell } from './Cell';
import {useGameField} from "../hooks/gameField.hook";

const FieldView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    box-shadow: 0px 0px 0px 1px;
    background: #000;
    opacity: ${({ animationState }) => animationState};
`;

export const Field = memo(function Field({
    fieldSize = 0,
    cellCount = 0,
    space = 0,
    field = [],
    hiddenCells = [],
    level = 0,
    showHidden = false,
    dispatch,
    updateLevel,
		lifeLines,
    visible,
    levelConfig,
}) {
    const cellSize = fieldSize / cellCount - space;

    const { gameField, onCellClick } = useGameField(field, hiddenCells, updateLevel, lifeLines);

    useEffect(
        () => {
            dispatch({ type: HIDDEN_CELL_SHOW })
            setTimeout(() => dispatch({ type: HIDDEN_CELL_HIDE }), 1500);
        },
        [levelConfig]
    );

    return (
        <FieldView
            animationState={visible ? 1 : 0}
            onClick={!showHidden ? onCellClick : null}>
            {
                gameField.map((cellValue, i) => (
                    <Cell
                        size={cellSize}
                        space={space}
                        key={i}
                        id={i}
                        value={cellValue}
                        forceShowHidden={showHidden} />
                ))
            }
        </FieldView>
    );
});
