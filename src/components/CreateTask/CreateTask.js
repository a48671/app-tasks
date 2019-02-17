import React, { PureComponent } from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import axios from 'axios';

import {Buttons} from './styled';

import {hiddenPopup, gettingTasks} from '../../redux/actions/actions';

import Overlay from '../Overlay/Overlay';
import Dialog from '../Dialog/Dialog';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

class CreateTask extends PureComponent {

    state = {
        userName: {
            value: '',
            validated: true,
            error: ''
        },
        email: {
            value: '',
            validated: true,
            error: ''
        },
        text: {
            value: '',
            validated: true,
            error: ''
        },
    }

    static propTypes = {
        hiddenPopup: PropTypes.func,
        gettingTasks: PropTypes.func,
        totalTasks: PropTypes.number
    };

    static defaultProps = {
        hiddenPopup: () => null,
        gettingTasks: () => null,
        totalTasks: 1
    }

    render() {

        const {hiddenPopup, gettingTasks, totalTasks} = this.props;

        const {userName, email, text} = this.state;

        const onChangeHandler = (e, name) => {
            if(name === 'userName') {
                const newUserName = {...userName};
                newUserName.value = e.target.value;
                newUserName.validated = true;
                newUserName.error = '';
                this.setState({ userName: newUserName});
            }
            if(name === 'email') {
                const newEmail = {...email};
                newEmail.value = e.target.value;
                newEmail.validated = true;
                newEmail.error = '';
                this.setState({ email: newEmail});
            }
            if(name === 'text') {
                const newText = {...text};
                newText.value = e.target.value;
                newText.validated = true;
                newText.error = '';
                this.setState({ text: newText});
            }
        }

        const sendTaskHandler = async () => {
            try {
                const data = new FormData();
                data.set('username', userName.value);
                data.set('email', email.value);
                data.set('text', text.value);

                const response = await axios.post(
                    'https://uxcandy.com/~shapoval/test-task-backend/create/?developer=Andrey',
                    data
                );
                if(response.data.status === 'error') {
                    if(response.data.message.username) {
                        const newUserName = {...userName};
                        newUserName.validated = false;
                        newUserName.error = response.data.message.username;
                        this.setState({ 
                            userName: newUserName 
                        });
                    }
                    if(response.data.message.email) {
                        const newEmail = {...email};
                        newEmail.validated = false;
                        newEmail.error = response.data.message.email;
                        this.setState({ 
                            email: newEmail 
                        });
                    }
                    if(response.data.message.text) {
                        const newText = {...text};
                        newText.validated = false;
                        newText.error = response.data.message.text;
                        this.setState({ 
                            text: newText 
                        });
                    }
                }
                if(response.data.status === 'ok') {
                    let pageQuantity = Math.trunc(totalTasks / 3); // 3 - quantity tasks on one page
                    if((totalTasks + 1) / 3 > pageQuantity) pageQuantity += 1;
                    gettingTasks(pageQuantity, 'id', 'asc');
                    hiddenPopup();
                }
            } catch(e) {
                console.log(e);
            }
        }

        return (
            <Overlay close={hiddenPopup}>
                <Dialog 
                    title="Create new task"
                >
                    <Input
                        title="User name"
                        value={userName.value}
                        validated={userName.validated}
                        onChangeHandler={onChangeHandler}
                        name="userName"
                        placeholder="Name"
                        error={userName.error}
                    />
                    <Input
                        title="Email"
                        value={email.value}
                        validated={email.validated}
                        onChangeHandler={onChangeHandler}
                        name="email"
                        placeholder="Email"
                        error={email.error}
                    />
                    <Textarea
                        title="Text task"
                        value={text.value}
                        validated={text.validated}
                        onChangeHandler={onChangeHandler}
                        name="text"
                        placeholder="Input new task"
                        error={text.error}
                    />
                    <Buttons>
                        <Button
                            type="blue"
                            onClickHandler={sendTaskHandler}
                        >
                            Add
                        </Button>
                    </Buttons>
                </Dialog>
            </Overlay>
        );
    }
}

function mapStateToProps(state) {
    return({
        totalTasks: Number(state.total_task_count)
    });
}

function mapDispatchToProps(dispatch) {
    return({
        gettingTasks: (pageNumber, sortType, sortOrder) => dispatch(gettingTasks(pageNumber, sortType, sortOrder)),
        hiddenPopup: () => dispatch(hiddenPopup())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);