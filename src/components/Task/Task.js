import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, TaskText, TaskHead, TaskHeadItem, TaskCheckbox} from './styled';

export default class Task extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
    }

    static defaultProps = {
        name: 'white',
        email: '',
        text: '',
        checked: false
    }

  render() {

    const {name, email, text, checked} = this.props;

    return (
        <Wrapper checked={checked} >
            <TaskCheckbox checked={checked} />
            <TaskHead>
                <TaskHeadItem>
                    Name: {name}
                </TaskHeadItem>
                <TaskHeadItem>
                    Email: {email}
                </TaskHeadItem>
            </TaskHead>
            <TaskText>
                {text}
            </TaskText>
        </Wrapper>
    )
  }
}
