import { createContext, useEffect, useReducer } from "react"

const taskData = [
    {
        taskId: 0,
        taskName: "Create a web portal",
        category: "Dev",
        asignTo: "Huzaifa",
        description: "Just build a best portal in minimal line of codes",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-10",
        status: "asign",
        subTasks: [
            { title: "Develop UI", isCompleted: false },
            { title: "Integrate API", isCompleted: false }
        ]
    },
    {
        taskId: 1,
        taskName: "Implement authentication",
        category: "Dev",
        asignTo: "Huzaifa",
        description: "Add secure login and signup functionality",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-15",
        status: "working",
        subTasks: [
            { title: "Design login page", isCompleted: true },
            { title: "Implement backend auth", isCompleted: false }
        ]
    },
    {
        taskId: 2,
        taskName: "Fix performance bugs",
        category: "QA",
        asignTo: "Huzaifa",
        description: "Optimize slow pages and fix memory leaks",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-20",
        status: "asign",
        subTasks: [
            { title: "Profile app performance", isCompleted: false },
            { title: "Fix bottlenecks", isCompleted: false }
        ]
    },

    {
        taskId: 6,
        taskName: "Make a Video for Software",
        category: "Marketing",
        asignTo: "Ayesha",
        description: "Create an awareness video of our new app creation",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-10",
        status: "working",
        subTasks: [
            { title: "Collect features of App", isCompleted: true },
            { title: "Ready the video", isCompleted: false }
        ]
    },
    {
        taskId: 7,
        taskName: "Social media campaign",
        category: "Marketing",
        asignTo: "Ayesha",
        description: "Plan a 2-week promotional campaign",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-16",
        status: "asign",
        subTasks: [
            { title: "Prepare content calendar", isCompleted: false },
            { title: "Design post templates", isCompleted: false }
        ]
    },
    {
        taskId: 8,
        taskName: "Email newsletter",
        category: "Marketing",
        asignTo: "Ayesha",
        description: "Send update newsletter to subscribers",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-12",
        status: "completed",
        subTasks: [
            { title: "Write content", isCompleted: true },
            { title: "Schedule send", isCompleted: true }
        ]
    },

    {
        taskId: 9,
        taskName: "Test out the Requirements",
        category: "QA",
        asignTo: "Sara",
        description: "Check the Requirement",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-10",
        status: "completed",
        subTasks: [
            { title: "Check the features", isCompleted: true }
        ]
    },
    {
        taskId: 10,
        taskName: "Regression testing",
        category: "QA",
        asignTo: "Sara",
        description: "Ensure old features work after updates",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-13",
        status: "working",
        subTasks: [
            { title: "Run test cases", isCompleted: false },
            { title: "Log defects", isCompleted: false }
        ]
    },
    {
        taskId: 11,
        taskName: "Security audit",
        category: "QA",
        asignTo: "Sara",
        description: "Check app security vulnerabilities",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-19",
        status: "asign",
        subTasks: [
            { title: "Run vulnerability scan", isCompleted: false },
            { title: "Patch issues", isCompleted: false }
        ]
    },

    {
        taskId: 12,
        taskName: "Design Plan",
        category: "Dev",
        asignTo: "Ahmed",
        description: "Design a full plan of the software development",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-10",
        status: "completed",
        subTasks: [
            { title: "Create outline", isCompleted: true },
            { title: "Enter details", isCompleted: true }
        ]
    },
    {
        taskId: 13,
        taskName: "Implement CI/CD pipeline",
        category: "DevOps",
        asignTo: "Ahmed",
        description: "Setup automated deployment process",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-17",
        status: "working",
        subTasks: [
            { title: "Setup GitHub Actions", isCompleted: true },
            { title: "Deploy to staging", isCompleted: false }
        ]
    },
    {
        taskId: 14,
        taskName: "Database schema optimization",
        category: "Database",
        asignTo: "Ahmed",
        description: "Optimize queries and indexing",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-14",
        status: "asign",
        subTasks: [
            { title: "Review indexes", isCompleted: false },
            { title: "Optimize queries", isCompleted: false }
        ]
    },

    {
        taskId: 15,
        taskName: "Create marketing brochure",
        category: "Design",
        asignTo: "Ali",
        description: "Design brochure for upcoming product launch",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-18",
        status: "asign",
        subTasks: [
            { title: "Design layout", isCompleted: false },
            { title: "Add product images", isCompleted: false }
        ]
    },
    {
        taskId: 16,
        taskName: "Revamp company logo",
        category: "Design",
        asignTo: "Ali",
        description: "Modernize our company logo for rebranding",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-21",
        status: "working",
        subTasks: [
            { title: "Create drafts", isCompleted: true },
            { title: "Finalize design", isCompleted: false }
        ]
    },


    {
        taskId: 17,
        taskName: "Build mobile dashboard",
        category: "Mobile Dev",
        asignTo: "Zain",
        description: "Create dashboard screen for mobile app",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-22",
        status: "asign",
        subTasks: [
            { title: "Design UI", isCompleted: false },
            { title: "Bind data", isCompleted: false }
        ]
    },
    {
        taskId: 18,
        taskName: "Implement push notifications",
        category: "Mobile Dev",
        asignTo: "Zain",
        description: "Enable push notifications in mobile app",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-25",
        status: "working",
        subTasks: [
            { title: "Configure FCM", isCompleted: false },
            { title: "Test notifications", isCompleted: false }
        ]
    },

    {
        taskId: 19,
        taskName: "Redesign home page",
        category: "UI/UX",
        asignTo: "Hira",
        description: "Revamp home page layout and visuals",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-19",
        status: "asign",
        subTasks: [
            { title: "Create wireframes", isCompleted: false },
            { title: "Finalize design", isCompleted: false }
        ]
    },
    {
        taskId: 20,
        taskName: "Improve accessibility",
        category: "UI/UX",
        asignTo: "Hira",
        description: "Ensure WCAG compliance for app UI",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-23",
        status: "working",
        subTasks: [
            { title: "Add ARIA labels", isCompleted: false },
            { title: "Check contrast ratios", isCompleted: false }
        ]
    },

    {
        taskId: 21,
        taskName: "Setup monitoring tools",
        category: "DevOps",
        asignTo: "Bilal",
        description: "Integrate system monitoring tools",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-18",
        status: "asign",
        subTasks: [
            { title: "Install Prometheus", isCompleted: false },
            { title: "Setup Grafana dashboard", isCompleted: false }
        ]
    },
    {
        taskId: 22,
        taskName: "Server load balancing",
        category: "DevOps",
        asignTo: "Bilal",
        description: "Distribute server traffic efficiently",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-24",
        status: "working",
        subTasks: [
            { title: "Configure Nginx", isCompleted: false },
            { title: "Test failover", isCompleted: false }
        ]
    },

    // Fatima
    {
        taskId: 23,
        taskName: "Automated test scripts",
        category: "QA",
        asignTo: "Fatima",
        description: "Write Selenium test scripts",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-17",
        status: "asign",
        subTasks: [
            { title: "Write login test", isCompleted: false },
            { title: "Write checkout test", isCompleted: false }
        ]
    },
    {
        taskId: 24,
        taskName: "Cross-browser testing",
        category: "QA",
        asignTo: "Fatima",
        description: "Ensure app works in all major browsers",
        startDate: new Date().toISOString().split("T")[0],
        endDate: "2025-08-20",
        status: "working",
        subTasks: [
            { title: "Test in Chrome", isCompleted: false },
            { title: "Test in Firefox", isCompleted: false }
        ]
    }
];



const savedTasks = JSON.parse(localStorage.getItem('taskData')) || [];
const initialData = {
    tasks: savedTasks.length ? savedTasks : taskData
}

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const maxID = Math.max(...state.tasks.map(task => task.taskId))
            const newTask = {
                ...action.payload,
                taskId: maxID + 1
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
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
        case "UPDATE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.taskId === action.payload.taskId
                        ? { ...task, ...action.payload }
                        : task
                )
            };
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.taskId === action.payload.taskId
                        ? {
                            ...task,
                            subTasks: task.subTasks.filter(subTask => subTask.title != action.payload.title)
                        }
                        : task
                )
            }
        case "STATUS_UPDATE":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.taskId === action.payload.taskId
                        ? {
                            ...task,
                            status: action.payload.status
                        }
                        : task
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
        state.tasks.forEach(task => {
            if (task.subTasks.length != 0) {
                const allCompleted = task.subTasks.every(subTask => subTask.isCompleted === true);
                if (allCompleted) {
                    task.status = "completed";
                }
            }
        });
        localStorage.setItem('taskData', JSON.stringify(state.tasks))

    }, [state.tasks])


    return (
        <TasksContext.Provider value={{ taskData: state.tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}


