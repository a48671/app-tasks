import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Close} from './styled';

export default class Overlay extends PureComponent {

    static propTypes = {
        children: PropTypes.node
      }
    
      static defaultProps = {
        children: ''
      }

    render() {

        const{children} = this.props;

    return (
        <Wrapper>
            {children}
            <Close />
        </Wrapper>
    )
    }
}
