import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Wrapper, Footer, Container, Pagination} from './styled';

import Control from './components/Control/Control';
import Button from './components/Button/Button';
import PageNumber from './components/PageNumber/PageNumber';
import Task from './components/Task/Task';
import CreateTask from './components/CreateTask/CreateTask';

import {gettingTasks, showCreateTask} from './redux/actions/actions';

class App extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    pageNumber: PropTypes.number,
    totalTasks: PropTypes.number,
    gettingTasks: PropTypes.func,
    showCreateTask: PropTypes.func,
    sortType: PropTypes.string,
    sortOrder: PropTypes.string,
    createTask: PropTypes.bool
  }

  static defaultProps = {
    tasks: [],
    pageNumber: 1,
    totalTasks: 0,
    gettingTasks: () => null,
    showCreateTask: () => null,
    sortType: 'id',
    sortOrder: 'asc',
    createTask: false
  }

  componentDidMount() {
    this.props.gettingTasks(1, 'id', 'asc');
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
      createTask
    } = this.props;

    const renderPagination = () => {
      
      let pageQuantity = totalTasks / 3; // 3 - quantity tasks on one page
      if(totalTasks % 3 !== 0) pageQuantity += 1;

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
            <Button
              type="green"
            >
              Sign in
            </Button>
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
    createTask: state.createTask
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gettingTasks: (pageNumber, sortType, sortOrder) => dispatch(gettingTasks(pageNumber, sortType, sortOrder)),
    showCreateTask: () => dispatch(showCreateTask()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
