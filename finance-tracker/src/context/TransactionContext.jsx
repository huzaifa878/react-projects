import { createContext, useReducer, useEffect } from "react";

const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

const initialState = {
    transactions: storedTransactions,
};

const transactionReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                transactions: [action.payload, ...state.transactions],
            };
        case "DELETE_TRANSACTION":
            return {
                transactions: state.transactions.filter(
                    (t) => t.id !== action.payload),
            };
        case "EDIT_TRANSACTION":
            return {
                transactions: state.transactions.map((t) =>
                    t.id === action.payload.id ? action.payload : t
                ),
            };
        default:
            return state;
    }
};

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    return (
        <TransactionContext.Provider value={{ transactions: state.transactions, dispatch }}>
            {children}
        </TransactionContext.Provider>
    );
}