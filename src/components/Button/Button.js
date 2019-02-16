import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

export default class Button extends PureComponent {

    static propTypes = {
        children: PropTypes.node,
        type: PropTypes.string
    }

    static defaultProps = {
        children: null,
        type: 'white'
    }

  render() {

    const {children, type} = this.props;

    return (
      <Wrapper type={type}>
          {children}
      </Wrapper>
    )
  }
}
