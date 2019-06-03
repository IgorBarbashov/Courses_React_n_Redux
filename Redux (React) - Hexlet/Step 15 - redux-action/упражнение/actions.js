import { createAction } from 'redux-actions';

// BEGIN (write your solution here)
export const updateNewTaskText = createAction('TEXT_UPDATE');
export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
// END
