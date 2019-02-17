import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextareaAutosize from 'react-textarea-autosize';

import {Wrapper, Title, Error} from './styled';

export default class Textarea extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        value: PropTypes.string,
        onChangeHandler: PropTypes.func,
        validated: PropTypes.bool,
        name: PropTypes.string,
        placeholder: PropTypes.string,     
        error: PropTypes.string     
      }
    
    static defaultProps = {
        title: '',
        value: '',
        onChangeHandler: () => null,
        validated: true,
        name: '',
        placeholder: '',
        error: ''
    }


    render() {

        const {title, value, onChangeHandler, validated, name, placeholder, error} = this.props;

        return (
            <Wrapper
                validated={validated} 
            >
                <Title>{title}</Title>
                <TextareaAutosize
                    placeholder={placeholder} 
                    value={value} 
                    onChange={e => onChangeHandler(e, name)}
                />
                {error ? <Error>{error}</Error> : null}
            </Wrapper>
        );
    }
}
