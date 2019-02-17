import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, InputStyle, Title, Error} from './styled';

export default class Input extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        value: PropTypes.string,
        onChangeHandler: PropTypes.func,
        validated: PropTypes.bool,
        name: PropTypes.string,
        error: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.string
      }
    
    static defaultProps = {
        title: '',
        value: '',
        onChangeHandler: () => null,
        validated: true,
        name: '',
        error: '',
        placeholder: '',
        type: 'text'
    }

    render() {

        const {title, value, onChangeHandler, validated, name, placeholder, error, type} = this.props;

        return (
            <Wrapper>
                <Title>{title}</Title>
                <InputStyle
                   value={value} 
                   validated={validated} 
                   onChange={e => onChangeHandler(e, name)}
                   placeholder={placeholder}
                   type={type}
                />
                {error ? <Error>{error}</Error> : null}
            </Wrapper>
        );
    }
}
