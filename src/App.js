import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Wrapper, Footer, Container, Pagination} from './styled';

import Control from './components/Control/Control';
import Button from './components/Button/Button';
import PageNumber from './components/PageNumber/PageNumber';
import Task from './components/Task/Task';

import {addTask} from './redux/actions/actions';

class App extends Component {

  static propTypes = {
    addTask: PropTypes.func

}

static defaultProps = {
    addTask: () => null
}

  render() {

    const {addTask} = this.props;

    return (
      <React.Fragment>
        <Wrapper>
          <Control>
            <Button type="white">By status</Button>
            <Button type="white">By name</Button>
            <Button type="white">By email</Button>
            <Button type="white">By order</Button>
            <Button onClickHandler={addTask} type="white">Add task</Button>
            <Button type="green">Sign in</Button>
          </Control>
          <Container>
            <Task
              name="Andrey"
              email="andrey@mail.ru"
              text="Text"
              checked={false}
            />
            <Task
              name="Andrey"
              email="andrey@mail.ru"
              text="Text Text"
              checked={true}
            />
          </Container>
        </Wrapper>
        <Footer>
          <Container>
              <Pagination>
                <PageNumber>1</PageNumber>
                <PageNumber>2</PageNumber>
                <PageNumber>3</PageNumber>
              </Pagination>
          </Container>
        </Footer>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: () => dispatch(addTask())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
