        // reduces = the logic the store uses to process an action and return the next state
        // action = the JSON we sent to the dispatch, containing the arguments that will be processed (payload)
        // action creator = a function that returns the action JSON (for DRY)

        // ACTION CREATORS
        const ADD_TODO = "ADD_TODO"
        const REMOVE_TODO = "REMOVE_TODO"
        const TOGGLE_TODO = "TOGGLE_TODO"

        function addTodoAction(id, text) {
            return {type:ADD_TODO, id, text}
        }

        function removeTodoAction(id) {
            return {type:REMOVE_TODO, id}
        }

        function toggleTodoAction(id) {
            return {type:TOGGLE_TODO, id}
        }
        // REDUCER
        
        function todosReducer(state, action) {
            switch (action.type) {
                case ADD_TODO:
                    return [...state, {id:action.id, text:action.text, completed:false}]
                case REMOVE_TODO:
                    return state.filter(item => item.id !== action.id);
                case TOGGLE_TODO:
                    let item = state.find(item => item.id === action.id)
                    return [...state.filter(item => item.id !== action.id), { ...item, completed: !item.completed}]
                default:
                    return state
            }
        }
        

        // STORE SETUP

        let store = Redux.createStore(todosReducer,[])
        let nextId = 1;

        store.subscribe(() => {
            render()
        })

        store.dispatch(addTodoAction(nextId++, "test"))
        store.dispatch(addTodoAction(nextId++, "test2"))

        /// DOM
        
        document.getElementById("btnAdd").onclick = () => {
            let text = document.getElementById("todoDescription").value;

            store.dispatch(addTodoAction(nextId++,text))
        }   

        document.querySelector("body").onclick = (e) => {
            let {id} = e.target.parentNode.dataset
            
            switch (e.target.className) {
                case "btnDelete": 
                    store.dispatch(removeTodoAction(+id))
                    break;
                case "btnToggle": 
                    store.dispatch(toggleTodoAction(+id))
                    break;
            }
        }   

        function renderItem({id, text, completed}) {
            return `<div data-id="${id}">
                      ${text} ${completed} <button class="btnDelete">delete</button> <button class="btnToggle"">Toggle</button>
                    </div>`
        }

        function render() {
            let content = ""
            
            for (let item of store.getState().sort((a,b) => a.id > b.id)) {
                content += renderItem(item) + "<br>"
            }
            document.getElementById("container").innerHTML = content ;
        }
