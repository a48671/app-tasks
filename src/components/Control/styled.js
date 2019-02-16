import styled from 'styled-components';
import {colors} from '../../variables/colors';

export const Wrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    background-color: ${colors.blueDark};
    color: ${colors.white};
`;

export const Container = styled.div`
    margin: 0 auto;
    width: calc(100% - 20px);
    max-width: 1170px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
