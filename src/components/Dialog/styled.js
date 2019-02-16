import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'Dialog'})`
    display: block;
    width: 100%;
    max-width: 500px;
    background-color: ${colors.white};    
`;

export const Content = styled.div.attrs({className: 'DialogContent'})`
    padding: 20px;
`;

export const Title = styled.div.attrs({className: 'DialogTitle'})`
    font-size: 26px;
    color: ${colors.blueDark};
    margin-bottom: 20px;
`;

export const Footer = styled.div.attrs({className: 'DialogFooter'})`
    display: flex;
    justify-content: center;
    padding: 10px 20px 20px;
`;