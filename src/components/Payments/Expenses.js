import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	return (
		<Card className="expenses">
			{props.items.map((item, index) => (
				<ExpenseItem
					key={item.id}
					id={item.id}
					//id값 추가함
					index={index}
					title={item.title}
					amount={item.amount}
					date={item.date}
					deleteExpenseItem={props.deleteExpenseItem}
				/>
			))}
		</Card>
	);
};

export default Expenses;

