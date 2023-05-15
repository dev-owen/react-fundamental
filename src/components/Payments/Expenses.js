import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{props.items.map((item) => (
				<ExpenseItem
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</Card>
	);
};

export default Expenses;
