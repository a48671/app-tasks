import React, { PureComponent } from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import axios from 'axios';

import {fixedEncodeURIComponent} from '../../functions/fixedEncodeURIComponent';

import md5 from 'md5';

import {Buttons, Status} from './styled';

import {hiddenPopup, gettingTasks} from '../../redux/actions/actions';

import Overlay from '../Overlay/Overlay';
import Dialog from '../Dialog/Dialog';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

class ChangeTask extends PureComponent {

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
        id: '',
        status: 0
    }

    static propTypes = {
        hiddenPopup: PropTypes.func,
        gettingTasks: PropTypes.func,
        indexChangingTask: PropTypes.number,
        pageNumber: PropTypes.number,
        sortType: PropTypes.string,
        sortOrder: PropTypes.string
    };

    static defaultProps = {
        hiddenPopup: () => null,
        gettingTasks: () => null,
        indexChangingTask: 0,
        pageNumber: 1,
        sortType: 'id',
        sortOrder: 'asc'
    }

    componentDidMount() {
        console.log('change task');
        const newUserName = {...this.state.userName};
        const newEmail = {...this.state.email};
        const newText = {...this.state.text};
        newUserName.value = this.props.tasks[this.props.indexChangingTask].username;
        newEmail.value = this.props.tasks[this.props.indexChangingTask].email;
        newText.value = this.props.tasks[this.props.indexChangingTask].text;
        this.setState({
            userName: newUserName,
            email: newEmail,
            text: newText,
            id: this.props.tasks[this.props.indexChangingTask].id,
            status: this.props.tasks[this.props.indexChangingTask].status
        });
    }

    render() {

        const {hiddenPopup, gettingTasks, sortType, pageNumber, sortOrder} = this.props;

        const {userName, email, text, id, status} = this.state;

        const onChangeHandler = e => {
            const newText = {...text};
            newText.value = e.target.value;
            newText.validated = true;
            newText.error = '';
            this.setState({ text: newText});
        }

        const sendChangeTask = async () => {
            
            const token = 'beejee';
            const arrayData = [
                {status: fixedEncodeURIComponent(status)}, 
                {text: fixedEncodeURIComponent(text.value)}
            ];
            const compareFunction = (a, b) => {
                if(a[Object.keys(a)[0]].toLowerCase() < b[Object.keys(b)[0]].toLowerCase()) return -1;
                else return 1;
            }
            const sortArrayData = arrayData.sort(compareFunction);

            const sortArrayDataWithToken = [...sortArrayData, {token: fixedEncodeURIComponent(token)}]
            
            let params_string;
            sortArrayDataWithToken.forEach((param, index) => {
                if(index === 0) {
                    params_string = `${Object.keys(param)[0]}=${param[Object.keys(param)[0]]}`;
                    return;
                }
                params_string += `&${Object.keys(param)[0]}=${param[Object.keys(param)[0]]}`;
            });

            const signature = md5(params_string);

            try {
                const data = new FormData();
                data.set('text', text.value);
                data.append('status', status);
                data.append('signature', signature);
                data.append('token', token);

                const response = await axios.post(
                    `https://uxcandy.com/~shapoval/test-task-backend/edit/${id}/?developer=Andrey`,
                    data
                );
                if(response.data.status === 'error') {
                    console.log(response.data)
                }
                if(response.data.status === 'ok') {
                    gettingTasks(pageNumber, sortType, sortOrder);
                    hiddenPopup();
                }
            } catch(e) {
                console.log(e);
            }
        }

        const statusChange = () => {
            if(status) {this.setState({status: 0}); return;}
            this.setState({status: 10});
        }

        return (
            <Overlay close={hiddenPopup}>
                <Dialog 
                    title={`Change task (${userName.value}, ${email.value})`}
                >
                    <Textarea
                        title="Text task"
                        value={text.value}
                        validated={text.validated}
                        onChangeHandler={onChangeHandler}
                        name="text"
                        placeholder="Input new task"
                        error={text.error}
                    />
                    <Status 
                        status={status}
                        onClick={statusChange}
                    >
                        {!status ? 'Not done' : 'Done'}
                    </Status>
                    <Buttons>
                        <Button
                            type="blue"
                            onClickHandler={sendChangeTask}
                        >
                            Change
                        </Button>
                    </Buttons>
                </Dialog>
            </Overlay>
        );
    }
}

function mapStateToProps(state) {
    return({
        tasks: state.tasks,
        indexChangingTask: state.indexChangingTask,
        pageNumber: state.pageNumber,
        sortType: state.sortType,
        sortOrder: state.sortOrder
    });
}

function mapDispatchToProps(dispatch) {
    return({
        gettingTasks: (pageNumber, sortType, sortOrder) => dispatch(gettingTasks(pageNumber, sortType, sortOrder)),
        hiddenPopup: () => dispatch(hiddenPopup())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTask);