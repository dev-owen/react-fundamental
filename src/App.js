import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 12.33,
			date: new Date(2022, 3, 14),
		},
		{
			id: "e2",
			title: "물티슈",
			amount: 234.11,
			date: new Date(2023, 8, 22),
		},
		{
			id: "e3",
			title: "모니터",
			amount: 3331.33,
			date: new Date(2021, 10, 22),
		},
		{
			id: "e4",
			title: "의자",
			amount: 298,
			date: new Date(2022, 1, 31),
		},
		{
			id: "e4",
			title: "의자",
			amount: 298,
			date: new Date(2021, 6, 1),
		},
	]);

	const getPaymentFormData = (data) => {
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: new Date(data.today),
			},
		]);
	};

	return (
		<>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
			<Expenses items={expenses} />
		</>
	);
}

export default App;
