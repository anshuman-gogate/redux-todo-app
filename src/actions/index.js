export function addTodo(data) {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            value: data,
            checked: false
        }
    }
}

export function removeTodo(id) {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}

export function removeAllTodos() {
    return {
        type: "REMOVE_ALL_TODOS"
    }
}

export function handleCheck(id) {
    return {
        type: "HANDLE_CHECK",
        payload: id
    }
}

export function pageRefresh(todosArr) {
    return {
        type: "PAGE_REFRESH",
        payload: todosArr
    }
}