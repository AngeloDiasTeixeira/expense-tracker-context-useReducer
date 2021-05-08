import Transaction from "./Transaction";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const TransactionList = () => {
    let { transactionList } = useContext(GlobalContext);

    return (
        <div className="transaction-list">
            <h1>
                Transactions
            </h1>
            <ul>
                {transactionList.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;