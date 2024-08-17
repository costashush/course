// Intro: here we do the same thing as in the previous example but the help of the redux library

// reducer (pure function)
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
}

const { createStore } = Redux
const store = createStore(counter)

// --------------------------------------

// console.log(store.getState());
// store.dispatch({type : 'INCREMENT'})
// console.log(store.getState());

// --------------------------------------

// store.subscribe(() => {
//   document.body.innerText = store.getState()
// })

// document.onclick = function () {
//   store.dispatch({type : 'INCREMENT'})    
// }

// --------------------------------------

// const render = () => {
//   document.body.innerText = store.getState()
// }
const render = () => {
  document.getElementById('spany').innerText = store.getState()
}

store.subscribe(render)

document.getElementById('min').onclick = function () {
  store.dispatch({ type: 'DECREMENT' })
}

document.getElementById('max').onclick = function () {
  store.dispatch({ type: 'INCREMENT' })
}


// document.onclick = function () {
//   store.dispatch({type : 'INCREMENT'})    
// }

render()
