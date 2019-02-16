import axios from 'axios';

import {
    GETTING_TASKS_START, 
    GETTING_TASKS_SUCCESS, 
    GETTING_TASKS_ERROR
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
