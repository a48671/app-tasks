import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'Task'})`
    display: block;
    padding: 10px 10px 10px 40px;
    margin: 10px 0;
    background-color: ${props => props.checked ? colors.green : colors.blue};
    position: relative;
`;

export const TaskHead = styled.div.attrs({className: 'TaskHead'})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${colors.blueDark};
`;

export const TaskHeadItem = styled.div.attrs({className: 'TaskHeadItem'})`
    display: inline-block;
    color: ${colors.white};
`;

export const TaskText = styled.div.attrs({className: 'TaskText'})`
    display: block;
    padding: 10px;
    background-color: ${colors.white};
`;

export const TaskCheckbox = styled.div.attrs({className: 'TaskCheckbox'})`
    display: block;
    position: absolute;
    top: 0;
    left: 16px;
    bottom: 0;
    right: auto;
    margin: auto 0;
    width: 10px;
    height: 20px;
    transform: rotate(45deg);
    border-bottom: 3px solid ${colors.white};
    border-right: 3px solid ${colors.white};
    opacity: ${props => props.checked ? '1' : '0.2'};
`;

export const Buttons = styled.div.attrs({className: 'TaskButtons'})`
    display: block;
    text-align: right;
    padding: 10px 0 0;
`;

export const Button = styled.div.attrs({className: 'TaskButtons'})`
    display: inline-block;
    font-size: 14px;
    color: ${colors.white};
    cursor: pointer;
    &:hover {
        color: ${colors.blueDark};
    }
`;