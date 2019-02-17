import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Close} from './styled';

export default class Overlay extends PureComponent {

    static propTypes = {
        children: PropTypes.node,
        close: PropTypes.func
      }
    
      static defaultProps = {
        children: '',
        close: () => null
      }

    render() {

        const{children, close} = this.props;

    return (
        <Wrapper>
            {children}
            <Close onClick={close} />
        </Wrapper>
    )
    }
}
