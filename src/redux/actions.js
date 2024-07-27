export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
  });
  
  export const editTask = (taskId, newText) => ({
    type: 'EDIT_TASK',
    payload: { id: taskId, text: newText }
  });
  