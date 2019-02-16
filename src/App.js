import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Wrapper, Footer, Container, Pagination} from './styled';

import Control from './components/Control/Control';
import Button from './components/Button/Button';
import PageNumber from './components/PageNumber/PageNumber';
import Task from './components/Task/Task';

import {gettingTasks, changePage} from './redux/actions/actions';

class App extends Component {

  static propTypes = {
    tasks: PropTypes.array,
    pageNumber: PropTypes.number,
    totalTasks: PropTypes.number,
    gettingTasks: PropTypes.func,
    changePage: PropTypes.func 
  }

  static defaultProps = {
    tasks: [],
    pageNumber: 1,
    totalTasks: 0,
    gettingTasks: () => null,
    changePage: () => null
  }

  componentDidMount() {
    this.props.gettingTasks();
  }

  render() {

    const {tasks, totalTasks, changePage, pageNumber} = this.props;

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
              onClickHandler={() =>changePage(currentPageNumber)}
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
            <Button type="white">By status</Button>
            <Button type="white">By name</Button>
            <Button type="white">By email</Button>
            <Button type="white">By order</Button>
            <Button type="white">Add task</Button>
            <Button type="green">Sign in</Button>
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
        </Footer>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    pageNumber: state.pageNumber,
    totalTasks: state.total_task_count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    gettingTasks: () => dispatch(gettingTasks()),
    changePage: pageNumber => dispatch(changePage(pageNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
