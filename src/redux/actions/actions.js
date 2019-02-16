import axios from 'axios';

import {
    GETTING_TASKS_START, 
    GETTING_TASKS_SUCCESS, 
    GETTING_TASKS_ERROR,
    CHANGE_PAGE
} from './actionTypes';

export function gettingTasks() {
    return async dispatch => {
        dispatch(gettingTasksStart());
        try {
            const response = await axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Andrey&page=1`)
            const tasks = response.data.message;
            
            dispatch(gettingTasksSuccess(tasks));
        } catch(error) {
            console.log(error);
            dispatch(gettingTasksError(error));
        }
    }
}

export function gettingTasksStart() {
    return({
        type: GETTING_TASKS_START
    })
}

export function gettingTasksSuccess(tasks) {
    return({
        type: GETTING_TASKS_SUCCESS,
        payload: {
            tasks,
            pageNumber: 2
        }
    });
}

export function gettingTasksError(error) {
    return({
        type: GETTING_TASKS_ERROR
    });
}

export function changePage(pageNumber) {
    return({
        type: CHANGE_PAGE,
        payload: {
            pageNumber
        }
    });
}