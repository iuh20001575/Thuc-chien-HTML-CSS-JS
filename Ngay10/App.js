const KEY = 'TODOLIST-THUCCHIEN';

function App() {
    const [todoList, setTodoList] = React.useState(() => {
        return JSON.parse(localStorage.getItem(KEY)) || [];
    });
    const [todo, setTodo] = React.useState('');

    const addTodo = e => {
        if (todo.trim())
            setTodoList(prev => [...prev, {name: todo.trim(), isCompeted: false}]);
        setTodo('');
        e.target.focus();
    }

    const handleKeyPress = e => {
        if (e.charCode === 13)
            addTodo(e);
    }

    const handleClick = (index) => {
        setTodoList(prev => {
            return prev.filter((a, i) => {
                if (index === i)
                    a.isCompeted = !a.isCompeted;
                return true;
            })
        })
    }

    const handleDeleteTodoItem = index => {
        setTodoList(prev => prev.filter((a,i) => i !== index));
    }

    React.useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todoList));
    }, [todoList]);
    
    return (
        <div className="container">
            <div className="input">
                <input
                    onChange={e => setTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder="Enter your todo"
                    value={todo}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {
                    todoList.map((item, index) => 
                        <li
                            className={item.isCompeted && "todo-item completed" || "todo-item"}
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.name}</span>
                            <i
                                className="fas fa-trash"
                                onClick={() => handleDeleteTodoItem(index)}
                            >
                            </i>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));