import axios from 'axios';

import {
    GETTING_TASKS_START, 
    GETTING_TASKS_SUCCESS, 
    GETTING_TASKS_ERROR,
    SHOW_CREATE_TASK,
    HIDDEN_POPUP,
    SHOW_SIGN_IN,
    ADMIN,
    GO_OUT,
    CHANGE_TASK
} from './actionTypes';

export function gettingTasks(pageNumber, sortType, sortOrder) {
    return async dispatch => {
        dispatch(gettingTasksStart());
        try {
            const response = await axios.get(`
                https://uxcandy.com/~shapoval/test-task-backend/?
                developer=Andrey&
                page=${pageNumber}&
                sort_field=${sortType}&
                sort_direction=${sortOrder}
            `);
            const tasks = response.data.message;
            
            dispatch(gettingTasksSuccess(tasks, pageNumber, sortType, sortOrder));
        } catch(error) {
            console.log(error);
            dispatch(gettingTasksError(error));
        }
    }
}

export function gettingTasksStart() {
    return({
        type: GETTING_TASKS_START
    });
}

export function gettingTasksSuccess(tasks, pageNumber, sortType, sortOrder) {
    return({
        type: GETTING_TASKS_SUCCESS,
        payload: {
            tasks,
            pageNumber,
            sortType,
            sortOrder
        }
    });
}

export function gettingTasksError(error) {
    return({
        type: GETTING_TASKS_ERROR
    });
}

export function showCreateTask() {
    return(
        {
            type: SHOW_CREATE_TASK
        }
    );
}

export function showSignIn() {
    return(
        {
            type: SHOW_SIGN_IN
        }
    );
}

export function hiddenPopup() {
    return(
        {
            type: HIDDEN_POPUP
        }
    );
}

export function admin() {
    return(
        {
            type: ADMIN
        }
    );
}

export function goOut() {
    return(
        {
            type: GO_OUT
        }
    );
}

export function changeTaskAction(index) {
    return(
        {
            type: CHANGE_TASK,
            payload: {
                index
            }
        }
    );
}
