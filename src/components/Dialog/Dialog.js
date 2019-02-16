import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content, Title, Footer} from './styled';

import Button from '../Button/Button';

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
            <Footer>
                <Button
                    type="blueDark"
                    >
                    Cancel
                </Button>
                <Button
                type="blue"
                >
                Ok
                </Button>
            </Footer>
        </Wrapper>
    )
  }
}
