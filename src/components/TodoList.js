import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    const { todos, setTodos, filteredTodos } = props;

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
