import { createContext, useEffect, useReducer } from "react"

const taskData = JSON.parse(localStorage.getItem('taskData')) || []

const initialData = {
    tasks: taskData
}

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

    const [state, dispatch] = useReducer(tasksReducer, initialData)

    useEffect(() => {
        localStorage.setItem('taskData', JSON.stringify(state.tasks))
    }, [state.tasks])


    return (
        <TasksContext.Provider value={{ taskData: state.tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}


