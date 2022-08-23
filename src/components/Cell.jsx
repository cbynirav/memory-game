import React, { memo } from 'react';
import styled from 'styled-components';

import { CORRECT_GUESSED_CELL, HIDDEN_CELL } from '../utils';

const CellView = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: #e6e6e9;
    margin: ${({ space }) => space}px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ActiveCellView = styled.div`
    width: ${({ width }) => width}%;
    height: 100%;
    background: #fffa14;
    cursor: default;
`;

const FailedCellView = styled.div`
    width: ${({ size }) => size}%;
    height: ${({ size }) => size}%;
    background: #e74c3c;
`;

export const Cell = memo(function Cell(props) {
    const { id, value, forceShowHidden } = props;

    const isActive = (forceShowHidden && value === HIDDEN_CELL) || value === CORRECT_GUESSED_CELL;
    const isFailed = !value;

    return (
        <CellView className='no-select' {...props}>
            <ActiveCellView id={id} width={isActive ? 100 : 0} />
            <FailedCellView id={id} size={isFailed ? 100 : 0} />
        </CellView>
    );
});
