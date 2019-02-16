import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Container, Content} from './styled';

export default class Control extends PureComponent {

    static propTypes = {
        children: PropTypes.node
    }

    static defaultProps = {
        children: null
    }

  render() {

    const {children} = this.props;

    return (
        <Wrapper>
            <Container>
                <Content>
                    {children}
                </Content>
            </Container>
        </Wrapper>
    )
  }
}
