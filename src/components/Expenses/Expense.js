import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

const Expense = (props) => {

    return (
        <Card className='expenses'>
            {props.items.map((item) => (
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}>
                </ExpenseItem>
            ))}
        </Card>
    )
}


export default Expense;