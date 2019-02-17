import styled from 'styled-components';

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