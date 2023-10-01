import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";
import ExampleComponent from "./components/Payments/Test"

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 12.33,
			date: new Date(2025, 8, 14),
		},
	]);

	const getPaymentFormData = (data) => {
		console.log(data);
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: new Date(data.today),
			},
      ...expenses
		]);
	};

  const deleteExpenseItem = (index) => {
    //확인용
    //console.log(id);
    //1. filter
    // const newFilteredArray = expenses.filter((item) => item.id !== id);
    // setExpenses(newFilteredArray);

    //2.slice
    const beforeArray = expenses.slice(0, index);
    const afterArray = expenses.slice(index+1); //끝까지는 콤마해서 또 적는 거 뒤에 생략해도된다함. 
    setExpenses([...beforeArray, ...afterArray]);
  }

	return (
		<>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
			<Expenses items={expenses} deleteExpenseItem={deleteExpenseItem}/>
      <ExampleComponent/>
		</>
	);
}

export default App;


