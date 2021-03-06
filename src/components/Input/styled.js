import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'InputWrapper'})`
    display: block;
    width: 100%;
    padding: 10px 0;
`;

export const Title = styled.div.attrs({className: 'InputTitle'})`
    margin-bottom: 10px;
    color: ${colors.blueDark};
    font-size: 14px;
`;

export const InputStyle = styled.input.attrs({className: 'InputStyle'})`
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${colors.blueDark};
    border: 1px solid ${props => props.validated ? colors.blueDark : 'red'};
`;
export const Error = styled.div.attrs({className: 'InputError'})`
    text-align: left;
    color: red;
    font-size: 12px;
    padding: 5px 0 0;
`;