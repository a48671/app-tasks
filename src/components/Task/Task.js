import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {Wrapper, TaskText, TaskHead, TaskHeadItem, TaskCheckbox, Buttons, Button} from './styled';

export default class Task extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        text: PropTypes.string,
        checked: PropTypes.bool,
        edit: PropTypes.bool,
        changeTaskAction: PropTypes.func,
        index: PropTypes.number
    }

    static defaultProps = {
        name: 'white',
        email: '',
        text: '',
        checked: false,
        edit: false,
        changeTaskAction: () => null,
        index: 0
    }

  render() {

    const {name, email, text, checked, edit, changeTaskAction, index} = this.props;

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
            {
                edit 
                    ?   <Buttons>
                            <Button
                                type="blueDark"
                                onClick={() => changeTaskAction(index)}
                            >
                                Edit task
                            </Button>
                        </Buttons>
                    :   null
            }
            
        </Wrapper>
    )
  }
}
