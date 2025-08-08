import { createContext, useEffect, useReducer } from "react"

const authData = [
    {

        userID: 0,
        userName: "Admin",
        role: "admin",
        email: "admin@gmail.com"
    },
    {

        userID: 1,
        userName: "Huzaifa",
        role: "employee",
        email: "huzaifa@gmail.com"
    },
    {

        userID: 2,
        userName: "Ayesha",
        role: "employee",
        email: "ayesha@gmail.com"
    },
    {

        userID: 3,
        userName: "Ahmed",
        role: "employee",
        email: "ahmed@gmail.com"
    },
    {

        userID: 4,
        userName: "Sara",
        role: "employee",
        email: "sara@gmail.com"
    },
    {

        userID: 5,
        userName: "Ali",
        role: "employee",
        email: "ali@gmail.com"
    }
]

const loginData = []

const initialState = {
    authData : authData,
    loginData : loginData,
}

const authReducder = (state, action) => {
    switch (action.type) {
        case "ADD_EMPPLOYEE":
            return [...authData, state.payload]
        case "DELETE_EMPLOYEE":
            return state.filter(emp => emp.userID !== action.payload.userID);
        default:
            return state;
    }
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducder, initialState)


    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(state.authData));
        localStorage.setItem('loginData', JSON.stringify(state.loginData))
    }, [initialState]);

    return (
        <AuthContext.Provider value={{ 
            authData: state.authData, 
            loginData: state.loginData, 
            dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}


