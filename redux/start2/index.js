// Intro: here we do the same thing as in the previous example but the help of the redux library

// reducer (pure function)
const counter = (state = "typing practice: ", action) => {
    switch (action.type) {
        case 'LETTER':
            return state + action.value;

        default:
            return state;
    }
}

const { createStore } = Redux
const store = createStore(counter)

const render = () => {
    document.body.innerText = store.getState()
}
store.subscribe(render)


document.body.addEventListener('keypress', function (e) {
    store.dispatch({ value: e.key, type: 'LETTER' })
})

render()
