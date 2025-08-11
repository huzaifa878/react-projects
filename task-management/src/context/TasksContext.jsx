import { createContext, useEffect, useReducer } from "react"

const taskData = [
    {
        taskId: 0,
        taskName: "Create a web portal",
        category: "Dev",
        asignTo: "Huzaifa",
        description: "Just build a best portal in minimal line of codes",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "12-08-2025",
        status: "asign",
        subTasks: [
            { title: "Develop UI", isCompleted: false },
            { title: "Develop UI", isCompleted: false },
        ]
    },
    {
        taskId: 1,
        taskName: "Design a Landing Page",
        category: "UI/UX",
        asignTo: "Nashrah",
        description: "Build a simple looking landing page",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "12-08-2025",
        status: "working",
        subTasks: [
            { title: "Design a navbar", isCompleted: true },
            { title: "Design a footer", isCompleted: true },
            { title: "Design a body", isCompleted: true }
        ]
    },
    {
        taskId: 2,
        taskName: "Make a Video for Software",
        category: "marketing",
        asignTo: "Ayesha",
        description: "Create an awareness video of our new app creation",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "12-08-2025",
        status: "working",
        subTasks: [
            { title: "Collect features of App", isCompleted: true },
            { title: "Ready the video", isCompleted: false }
        ]
    },
    {
        taskId: 3,
        taskName: "Test out the Requirements",
        category: "QA",
        asignTo: "Sara",
        description: "Check the Requirement",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "12-08-2025",
        status: "completed",
        subTasks: [
            { title: "Check the features", isCompleted: true }
        ]
    },
    {
        taskId: 4,
        taskName: "Design Plan",
        category: "Dev",
        asignTo: "Ahmed",
        description: "Design a full plan of the software development",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "12-08-2025",
        status: "completed",
        subTasks: [
            { title: "Create outline", isCompleted: true },
            { title: "Enter details", isCompleted: true }
        ]
    },

]

const savedTasks = JSON.parse(localStorage.getItem('taskData')) || [];
const initialData = {
    tasks: savedTasks.length ? savedTasks : taskData
}

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "ADD_SUBTASK":
            return {
                ...state,
                tasks: state.tasks.map(t =>
                    t.taskId == action.payload.taskId
                        ? {
                            ...t,
                            subTasks: [...t.subTasks, action.payload.subTasks]
                        }
                        : t
                )
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


