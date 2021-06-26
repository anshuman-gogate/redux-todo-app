const initialState = {
    todos: []
}

function saveLocalTodos(todo) {
    let Redtodos;
    if(localStorage.getItem('Redtodos') === null) {
        Redtodos = [];
    }
    else {
        Redtodos = JSON.parse(localStorage.getItem('Redtodos'));
    }

    Redtodos = [...Redtodos , todo];
    localStorage.setItem("Redtodos" , JSON.stringify(Redtodos));
}

function deleteTodo(id) {
    let Redtodos;
    if(localStorage.getItem('Redtodos') === null) {
        Redtodos = [];
    }
    else {
        Redtodos = JSON.parse(localStorage.getItem('Redtodos'));
    }

    const newRedTodos = Redtodos.filter(todo => {
        if(todo.id !== id) {
            return todo;
        }
    })

    localStorage.setItem("Redtodos" , JSON.stringify(newRedTodos));
}

function deleteAllTodos() {
    let Redtodos;
    if(localStorage.getItem('Redtodos') === null) {
        Redtodos = [];
    }
    else {
        Redtodos = JSON.parse(localStorage.getItem('Redtodos'));
    }

    localStorage.removeItem("Redtodos");
}

function handleCheckLocal(id) {
    let Redtodos;
    if(localStorage.getItem('Redtodos') === null) {
        Redtodos = [];
    }
    else {
        Redtodos = JSON.parse(localStorage.getItem('Redtodos'));
    }

    const newRedTodos = Redtodos.map((todo) => {
        if(todo.id === id) {
            todo.checked = !todo.checked;
        }
        return (todo)
    })

    localStorage.setItem("Redtodos" , JSON.stringify(newRedTodos));
}

// Reducers below 

function todoReducers(state = initialState , action) {
    switch(action.type) {
        case "PAGE_REFRESH":
            return {
                ...state,
                todos: action.payload
            }

        case "ADD_TODO" :
            const {id , value , checked} = action.payload;
            saveLocalTodos(action.payload);
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        value: value,
                        checked: checked
                    }
                ]
            }
        
        case "REMOVE_TODO":
            const delId = action.payload;
            deleteTodo(delId);
            const updatedTodos = state.todos.filter(todo => {
                if(todo.id !== delId) {
                    return todo;
                }
            })

            return {
                ...state,
                todos: updatedTodos
            }
        
        case "REMOVE_ALL_TODOS":
            deleteAllTodos();
            return {
                ...state,
                todos: []
            }

        case "HANDLE_CHECK": 
            handleCheckLocal(action.payload);
            const newTodos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.checked = !todo.checked;
                }
                return todo; 
            });
            return {
                ...state,
                todos: newTodos
            }

        default: return state;
    }
}

export default todoReducers;