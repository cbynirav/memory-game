import styled from 'styled-components';

export const GameView = styled.div`
    width: 100%;
    height: 100%;
`;

export const GameFieldView = styled.div`
    width: ${({ fieldSize, cellCount, space }) => fieldSize + cellCount * space}px;
    height: ${({ fieldSize, cellCount, space }) => fieldSize + cellCount * space}px;
    margin: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const RestartGame = styled.button`
    font-family: Arial;
    color: #ffffff;
    font-size: 17px;
    background: #3498db;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    border: none;
    margin-top: 20px;
    cursor: pointer;
`

export const LifeLineIcon = styled.img`
    height: 50px;
    float: right;
    margin-top: -20px;
`

export const NoLifeLine = styled.span`
    float: right;
		color: red;
    font-weight: bold;
`

export const LifeLineRemains = styled.span`
    color: green;
    font-weight: bold;
`
