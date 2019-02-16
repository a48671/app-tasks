const initialState = {
    tasks: [
        {
            id: 1,
            username: "Test User",
            email: "test_user_1@example.com",
            text: "Hello, world!",
            status: 10,
        },
        {
            id: 3,
            username: "Test User 2",
            email: "test_user_2@example.com",
            text: "Hello from user 2!",
            status: 0,
        },
        {
            id: 4,
            username: "Test User 3",
            email: "test_user_3@example.com",
            text: "Hello from user 3!",
            status: 0,
        }
    ],
    total_task_count: 5,
    pageNumber: 1,
    sortType: 'id', // id or username or email or status
    sortOrder: 'asc' // asc or desc
}

export default function rootReducer(state=initialState, action) {
    // const {} = state;
    
    const {type, payload} = action;
    
    switch(type) {
        
        case 'GETTING_TASKS_START':

            return state;
        
        case 'GETTING_TASKS_SUCCESS':

            return ({
                ...state,
                ...payload.tasks,
                pageNumber: payload.pageNumber,
                sortType: payload.sortType,
                sortOrder: payload.sortOrder
            });

        default: 

            return state;

    }
};