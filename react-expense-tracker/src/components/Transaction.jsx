import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Transaction = ({transaction}) => {
    const {id, name, amount} = transaction;
    let { deleteTransaction } = useContext(GlobalContext);

    const onClick = async () => {
        await deleteTransaction(id);
    }

    return (
        <li className={"transaction " + ((amount>=0) ? "border-green" : "border-red")} >
            <button onClick={onClick}>X</button>
            <div>
                <span>{name}</span>
                <span>{(amount >= 0) ? `+${amount}` : amount}</span>
            </div>
        </li>
    )
}

export default Transaction;