import { createContext, useEffect, useReducer } from "react"

const authData = [
    {

        userID: 0,
        userName: "Admin",
        role: "admin",
        email: "admin@gmail.com",
        password: "Admin123",
        phoneNumber: "033312345678",
    },
    {

        userID: 1,
        userName: "Huzaifa",
        role: "employee",
        email: "huzaifa@gmail.com",
        password: "Huzaifa123",
        phoneNumber: "033387654321",
        positoin: "Frontend Engineer",
    },
    {

        userID: 2,
        userName: "Ayesha",
        role: "employee",
        email: "ayesha@gmail.com",
        password: "Ayesha123",
        phoneNumber: "022212345678",
        positoin: "Backend Engineer",
    },
    {

        userID: 3,
        userName: "Ahmed",
        role: "employee",
        email: "ahmed@gmail.com",
        password: "Ahmed123",
        phoneNumber: "022287654321",
        positoin: "Python Developer",
    },
    {

        userID: 4,
        userName: "Sara",
        role: "employee",
        email: "sara@gmail.com",
        password: "Sara123",
        phoneNumber: "011112345678",
        positoin: "Full Stack Developer",
    },
    {

        userID: 5,
        userName: "Ali",
        role: "employee",
        email: "ali@gmail.com",
        password: "Ali123",
        phoneNumber: "01118765432",
        positoin: "Graphic Designer",
    }
]

const loginData = []

const initialState = {
    authData : JSON.parse(localStorage.getItem('authData')),
    loginData : loginData,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_INFO":
            return {
                ...state, 
                loginData: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                loginData: []
            }
        case "ADD_EMPLOYEE":
            const maxID = Math.max(...state.authData.map(user => user.userID))
            const newEmployee = {
                ...action.payload,
                userId: maxID + 1
            }
            return {
                ...state,
                authData : [...state.authData ,newEmployee]
            }
        case "REMOVE_EMPLOYEE":
            return {
                ...state,
                authData : state.authData.filter(user => user.userNameName !== action.payload.userName && user.position !== action.payload.position)
            }
        default:
            return state
    }
    
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(state.authData));
    }, [state.authData]);

    useEffect(() => {
        localStorage.setItem('loginData', JSON.stringify(state.loginData))
    }, [state.loginData]);



    return (
        <AuthContext.Provider value={{ 
            authData: state.authData, 
            loginData: state.loginData, 
            dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}


