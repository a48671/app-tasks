import React, { PureComponent } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import {Wrapper, Title} from './styled';

export default class Textarea extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Title>Name textarea</Title>
                <TextareaAutosize
                    placeholder="Input new task" 
                />
            </Wrapper>
        );
    }
}
