//actions -------------------------------
let nextTodoId = 0
const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}
// redusers-------------------------------
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}
const { createStore } = Redux
//----------ask gabi about this counter and what it for----------
const store = createStore(todos);



let add = document.getElementById('add');
add.addEventListener('click', (event) => {
    
    let input = document.getElementById('input').value;
    addTodo(input)
    store.dispatch({ text: input, type: "ADD_TODO" })
    
});

// console.log(state);
const render = () => {
    let newTask = document.createElement("li");
    let textnode = document.createTextNode(store.getState());
    newTask.appendChild(textnode);
    document.getElementById("list").appendChild(newTask);
    console.log(nextTodoId);
    console.log(store.getState())
    
}

store.subscribe(render)
render();
