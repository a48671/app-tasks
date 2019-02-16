import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styled';

export default class Button extends PureComponent {

    static propTypes = {
        children: PropTypes.node,
        type: PropTypes.string,
        onClickHandler: PropTypes.func
    }

    static defaultProps = {
        children: null,
        type: 'white',
        onClickHandler: () => null
    }

  render() {

    const {children, type, onClickHandler} = this.props;

    return (
      <Wrapper
        type={type}
        onClick={onClickHandler}
      >
          {children}
      </Wrapper>
    )
  }
}
