import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Wrapper, Footer, Container, Pagination} from './styled';

import Control from './components/Control/Control';
import Button from './components/Button/Button';
import PageNumber from './components/PageNumber/PageNumber';
import Task from './components/Task/Task';
import CreateTask from './components/CreateTask/CreateTask';
import SignIn from './components/SignIn/SignIn';
import ChangeTask from './components/ChangeTask/ChangeTask';

import {
  gettingTasks, 
  showCreateTask, 
  showSignIn, 
  admin, 
  goOut, 
  changeTaskAction
} from './redux/actions/actions';

class App extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    pageNumber: PropTypes.number,
    totalTasks: PropTypes.number,
    gettingTasks: PropTypes.func,
    showCreateTask: PropTypes.func,
    sortType: PropTypes.string,
    sortOrder: PropTypes.string,
    createTask: PropTypes.bool,
    signIn: PropTypes.bool,
    admin: PropTypes.bool,
    showSignIn: PropTypes.func,
    adminIn: PropTypes.func,
    goOut: PropTypes.func,
    changeTask: PropTypes.bool,
    changeTaskAction: PropTypes.func
  }

  static defaultProps = {
    tasks: [],
    pageNumber: 1,
    totalTasks: 0,
    gettingTasks: () => null,
    showCreateTask: () => null,
    sortType: 'id',
    sortOrder: 'asc',
    createTask: false,
    signIn: false,
    admin: false,
    showSignIn: () => null,
    adminIn: () => null,
    goOut: () => null,
    changeTask: false,
    changeTaskAction: () => null
  }

  componentDidMount() {
    this.props.gettingTasks(1, 'id', 'asc');
    let adminOk = JSON.parse(localStorage.getItem('admin'));
    if(adminOk && adminOk.admin === true) {
      this.props.adminIn();
    } else {
      this.props.goOut();
    }
  }

  render() {

    const {
      tasks, 
      totalTasks, 
      pageNumber, 
      sortType,
      sortOrder,
      gettingTasks,
      showCreateTask,
      createTask,
      signIn,
      admin,
      showSignIn,
      goOut,
      changeTask,
      changeTaskAction
    } = this.props;

    const renderPagination = () => {
      
      let pageQuantity = Math.trunc(totalTasks / 3); // 3 - quantity tasks on one page
      if(totalTasks / 3 > pageQuantity) pageQuantity += 1;

      return(
        Array.from({length: pageQuantity}).map((none, index) => {
          const currentPageNumber = index + 1;
          return(
            <PageNumber 
              key={index}
              type={pageNumber === currentPageNumber ? 'clearWhite' : 'white'}
              onClickHandler={() =>gettingTasks(currentPageNumber, sortType, sortOrder)}
            > 
              {currentPageNumber}
            </PageNumber>
          );
        })
    )};

    return (
      <React.Fragment>
        <Wrapper>
          <Control>
            <Button
              onClickHandler={() => gettingTasks(pageNumber, 'status', sortOrder)}
              type={sortType === 'status' ? 'clearWhite' : "white"}
            >
              By status
            </Button>
            <Button
              onClickHandler={() => gettingTasks(pageNumber, 'username' , sortOrder)}
              type={sortType === 'username' ? 'clearWhite' : "white"}
            >
              By name
            </Button>
            <Button
              onClickHandler={() => gettingTasks(pageNumber, 'email', sortOrder)}
              type={sortType === 'email' ? 'clearWhite' : "white"}
            >
              By email
            </Button>
            <Button
                onClickHandler={() => gettingTasks(pageNumber, sortType, sortOrder === 'asc' ? 'desc' : 'asc')}
                type="blue"
            >
              {sortOrder === 'asc' ? 'Desc' : 'Asc'}
            </Button>
            <Button
                type="white"
                onClickHandler={showCreateTask}
            >
              Add task
            </Button>
            {
              admin 
                ? <Button
                    type="green"
                    onClickHandler={goOut}
                  >
                    Go out
                  </Button> 
                : <Button
                    type="green"
                    onClickHandler={showSignIn}
                  >
                    Sign in
                  </Button> 
            }
            
          </Control>
          <Container>
            {
              tasks.map((task, index) => (
                <Task
                  key={index}
                  name={task.username}
                  email={task.email}
                  text={task.text}
                  checked={task.status ? true : false}
                  edit={admin}
                  changeTaskAction={changeTaskAction}
                  index={index}
                />
              ))
            }
          </Container>
        </Wrapper>
        <Footer>
          <Container>
              <Pagination>
                {renderPagination()}
              </Pagination>
          </Container>
          {createTask ? <CreateTask /> : null}
          {signIn ? <SignIn /> : null}
          {changeTask ? <ChangeTask /> : null}
          
        </Footer>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    pageNumber: state.pageNumber,
    totalTasks: Number(state.total_task_count),
    sortType: state.sortType, 
    sortOrder: state.sortOrder,
    createTask: state.createTask,
    signIn: state.signIn,
    admin: state.admin,
    changeTask: state.changeTask
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gettingTasks: (pageNumber, sortType, sortOrder) => dispatch(gettingTasks(pageNumber, sortType, sortOrder)),
    showCreateTask: () => dispatch(showCreateTask()),
    showSignIn: () => dispatch(showSignIn()),
    adminIn: () => dispatch(admin()),
    goOut: () => dispatch(goOut()),
    changeTaskAction: index => dispatch(changeTaskAction(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
