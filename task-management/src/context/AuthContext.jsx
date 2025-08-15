import { createContext, useEffect, useReducer } from "react"

const authData = [
    {
        userID: 0,
        userName: "Admin",
        role: "admin",
        email: "admin@gmail.com",
        password: "Admin123",
        phoneNumber: "033312345678",
        position: "Team Lead"
    },
    {
        userID: 1,
        userName: "Huzaifa",
        role: "employee",
        email: "huzaifa@gmail.com",
        password: "Huzaifa123",
        phoneNumber: "033387654321",
        position: "Frontend Engineer",
    },
    {
        userID: 2,
        userName: "Ayesha",
        role: "employee",
        email: "ayesha@gmail.com",
        password: "Ayesha123",
        phoneNumber: "022212345678",
        position: "Backend Engineer",
    },
    {
        userID: 3,
        userName: "Ahmed",
        role: "employee",
        email: "ahmed@gmail.com",
        password: "Ahmed123",
        phoneNumber: "022287654321",
        position: "Python Developer",
    },
    {
        userID: 4,
        userName: "Sara",
        role: "employee",
        email: "sara@gmail.com",
        password: "Sara123",
        phoneNumber: "011112345678",
        position: "Full Stack Developer",
    },
    {
        userID: 5,
        userName: "Ali",
        role: "employee",
        email: "ali@gmail.com",
        password: "Ali123",
        phoneNumber: "01118765432",
        position: "Graphic Designer",
    },
    {
        userID: 6,
        userName: "Zain",
        role: "employee",
        email: "zain@gmail.com",
        password: "Zain123",
        phoneNumber: "034512345678",
        position: "Mobile App Developer",
    },
    {
        userID: 7,
        userName: "Hira",
        role: "employee",
        email: "hira@gmail.com",
        password: "Hira123",
        phoneNumber: "032112345678",
        position: "UI/UX Designer",
    },
    {
        userID: 8,
        userName: "Bilal",
        role: "employee",
        email: "bilal@gmail.com",
        password: "Bilal123",
        phoneNumber: "030112345678",
        position: "DevOps Engineer",
    },
    {
        userID: 9,
        userName: "Fatima",
        role: "employee",
        email: "fatima@gmail.com",
        password: "Fatima123",
        phoneNumber: "031112345678",
        position: "QA Engineer",
    }
];



const initialState = {
    authData : JSON.parse(localStorage.getItem('authData')) || authData,
    loginData : JSON.parse(localStorage.getItem('loginData'))
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


