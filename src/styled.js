import styled from 'styled-components';
import {colors} from './variables/colors';

export const Wrapper = styled.div.attrs({className: 'Wrapper'})`
    overflow: hidden;
    width: 100%;
    min-height: calc(100vh - 60px);
`;
export const Footer = styled.div.attrs({className: 'Footer'})`
    overflow: hidden;
    padding: 10px 0;
    min-height: 60px;
    background-color: ${colors.blueDark};
    color: ${colors.white};
`;
export const Container = styled.div.attrs({className: 'Container'})`
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1170px;
`;

export const Pagination = styled.div.attrs({className: 'Pagination'})`
    text-align: center;
`;