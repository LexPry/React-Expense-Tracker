import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useState} from "react";

const NewExpense = (props) => {
    const [isShown, setIsShown] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: generateUniqueID
        };
        props.onAddExpense(expenseData);
    };

    const showExpenseFormHandler = () => {
        setIsShown(true);
    };

    const stopEditingHandler = () => {
        setIsShown(false);
    }

    return (
        <div className="new-expense">
            {!isShown && <button onClick={showExpenseFormHandler}>Add New Expense</button>}
            {isShown && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;