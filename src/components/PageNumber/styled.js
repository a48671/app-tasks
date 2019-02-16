import styled from 'styled-components';
import {button} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'PageNumder'})`
    display: inline-block;
    padding: 5px 9px 3px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    ${props => button(props.type)};
    margin: 5px;
    transition: 0.3s;
`;