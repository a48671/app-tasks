import React, { PureComponent } from 'react';

import {Wrapper, InputStyle, Title} from './styled';

export default class Input extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Title>Title input</Title>
                <InputStyle />
            </Wrapper>
        );
    }
}
