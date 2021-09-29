import React from 'react';

const Todo = ({ todo, index, deleteTodo,cambiarTodo }) => {
  return (
    <>
      <div className='list'>
        <h3>{todo}</h3>
        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          X
        </button>
        <button className='btn-upload' onClick={() => cambiarTodo(index,todo)}>
        ↺
        </button>
      </div>
    </>
  );
};

export default Todo;
