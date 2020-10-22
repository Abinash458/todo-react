import React from 'react';

const Form = props => {

    const { setInputText, inputText, setTodos, todos, setStatus } = props;

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitEventHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            <form>
                <input
                    value={inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input"
                />
                <button
                    onClick={submitEventHandler}
                    className="todo-button"
                    type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all" >All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;
