import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };
  const handleSave = () => {
    if (editText.trim()) {
        dispatch(editTask(editId, editText));
        setEditId(null);
        setEditText('');
      } else {
        alert("Task cannot be empty");
      }
  };

  const handleDel = (val) => {
    dispatch(val)
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editId === task.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className="save" onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div className='list'>
              {task.text}
              <div className='btn'>
              <button className="delete" onClick={() => handleDel(deleteTask(task.id))}>Delete</button>
              <button className="save" onClick={() => handleEdit(task)}>Edit</button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
