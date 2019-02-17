import styled from 'styled-components';
import { colors } from '../../variables/colors';

export const Buttons = styled.div.attrs({className: 'CreateTaskButtons'})`
    display: flex;
    justify-content: center;
    padding: 10px 20px 20px;
`;

export const Error = styled.div.attrs({className: 'CreateTaskError'})`
    text-align: center;
    color: red;
    font-size: 12px;
    padding: 10px 0;
`;

export const Status = styled.div.attrs({className: 'CreateTaskStatus'})`
    display: block;
    text-align: center;
    color: ${colors.white};
    background-color: ${props => props.status ? colors.green : colors.blueDark};
    font-size: 12px;
    padding: 5px;
    cursor: pointer;
    margin-bottom: 20px;
`;

