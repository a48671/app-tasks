import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'TextareaWrapper'})`
    display: block;
    width: 100%;
    padding: 10px 0;
    textarea {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        color: ${colors.blueDark};
        border: 1px solid ${colors.blueDark};
        min-height: 100px;
    }
`;

export const Title = styled.div.attrs({className: 'TextareaTitle'})`
    margin-bottom: 10px;
    color: ${colors.blueDark};
    font-size: 14px;
`;
