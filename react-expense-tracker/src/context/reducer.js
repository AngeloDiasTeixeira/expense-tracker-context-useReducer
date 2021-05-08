const reducer = (state, action) => {
    switch(action.type) {
        case "transactionsFetched" : {
            return action.payload;
        }
        case "transactionAdded" : {
            return [...state, action.payload];
        }
        case "transactionDeleted" : {
            return state.filter(t => t.id !== action.payload);
        }
        default : {
            return state;
        }
    }
}

export default reducer;