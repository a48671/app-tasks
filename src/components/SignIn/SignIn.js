import React, { PureComponent } from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Buttons} from './styled';

import {hiddenPopup, admin} from '../../redux/actions/actions';

import Overlay from '../Overlay/Overlay';
import Dialog from '../Dialog/Dialog';
import Input from '../Input/Input';
import Button from '../Button/Button';

class SignIn extends PureComponent {

    state = {
        login: {
            value: '',
            validated: true,
            error: ''
        },
        password: {
            value: '',
            validated: true,
            error: ''
        }
    }

    static propTypes = {
        hiddenPopup: PropTypes.func,
        login: PropTypes.string,
        password: PropTypes.string,
        admin: PropTypes.func
    };

    static defaultProps = {
        hiddenPopup: () => null,
        login: '',
        password: '',
        admin: () => null
    }

    render() {

        const {hiddenPopup, admin} = this.props;

        const {login, password} = this.state;

        const onChangeHandler = (e, name) => {
            if(name === 'login') {
                const newLogin = {...login};
                newLogin.value = e.target.value;
                newLogin.validated = true;
                newLogin.error = '';
                this.setState({ login: newLogin});
            }
            if(name === 'password') {
                const newPassword = {...password};
                newPassword.value = e.target.value;
                newPassword.validated = true;
                newPassword.error = '';
                this.setState({ password: newPassword});
            }
        }

        const loginHandler = () => {
            if(login.value !== 'admin') {
                const newLogin = {...login};
                newLogin.validated = false;
                newLogin.error = 'User with this login does not exist';
                this.setState({ login: newLogin});
            }
            if(password.value !== '123') {
                const newPassword = {...password};
                newPassword.validated = true;
                newPassword.error = 'Invalid password';
                this.setState({ password: newPassword});
            }
            if(password.value === '123' && login.value === 'admin') {
                admin();
                hiddenPopup();
                try {
                    localStorage.setItem('admin', JSON.stringify({
                      admin: true
                    }));
                } catch(error) {
                    console.log(error);
                }
            }
        };

        return (
            <Overlay close={hiddenPopup}>
                <Dialog 
                    title="Sign in"
                >
                    <Input
                        title="Login"
                        value={login.value}
                        validated={login.validated}
                        onChangeHandler={onChangeHandler}
                        name="login"
                        placeholder="Login"
                        error={login.error}
                    />
                    <Input
                        title="Password"
                        value={password.value}
                        validated={password.validated}
                        onChangeHandler={onChangeHandler}
                        name="password"
                        placeholder="Password"
                        error={password.error}
                        type="password"
                    />
                    <Buttons>
                        <Button
                            type="blue"
                            onClickHandler={loginHandler}
                        >
                            Login
                        </Button>
                    </Buttons>
                </Dialog>
            </Overlay>
        );
    }
}

function mapStateToProps(state) {
    return({
    });
}

function mapDispatchToProps(dispatch) {
    return({
        hiddenPopup: () => dispatch(hiddenPopup()),
        admin: () => dispatch(admin())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);