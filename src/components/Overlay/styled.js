import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div.attrs({className: 'Overlay'})`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .9);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 30px 10px;
`;

export const Close = styled.div.attrs({className: 'OverlayClose'})`
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    transform: rotate(45deg);
    cursor: pointer;
    &:before,
    &:after {
        display: block;
        position: absolute;
        content: '';
        background-color: ${colors.white};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    &:before {
        width: 100%;
        height: 1px;
    }
    &:after {
        width: 1px;
        height: 100%;
    }
`;