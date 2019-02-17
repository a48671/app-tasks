import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content, Title, Footer} from './styled';

export default class Dialog extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node
      }
    
    static defaultProps = {
        title: '',
        children: ''
    }

  render() {

    const {title, children} = this.props;

    return (
        <Wrapper>
            <Content>
                <Title>{title}</Title>
                {children}
            </Content>
        </Wrapper>
    )
  }
}
