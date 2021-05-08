import { useReducer, createContext, useEffect } from "react";
import reducer from "./reducer";

let initialState = [];

export let GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [transactions, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        const f = async () => {
            let response = await fetch("http://localhost:3001/api/transactions");
            let items = await response.json();
            dispatch({
                type: "transactionsFetched",
                payload: items
            });
        }
        f();
    },[]);

    const addTransaction = async transaction => {
        await fetch("http://localhost:3001/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transaction)
        });
        dispatch({
            type: "transactionAdded",
            payload: transaction
        });
    }

    const deleteTransaction = async id => {
        await fetch("http://localhost:3001/api/transactions", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        });
        dispatch({
            type: "transactionDeleted",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactionList: transactions,
            addTransaction: addTransaction,
            deleteTransaction: deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;