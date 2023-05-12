import './App.css';
import NewPayment from './components/NewPayment/NewPayment';
import Expenses from './components/Payments/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: '수건',
      amount: 12.33,
      date: new Date(2025, 8, 14),
    }
  ];

  return (
    <>
      <NewPayment/>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
