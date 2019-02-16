import styled from 'styled-components';
import {button} from '../../variables/colors';

export const Wrapper = styled.div.attrs('Wrapper')`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    ${props => button(props.type)};
    margin: 0 10px;
    transition: 0.3s;
`;