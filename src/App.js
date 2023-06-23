import React from 'react';
import SortableTable from './components/SortableTable';

function App() {
  const data = [
    { name: '오렌지', color: 'bg-orange-500', score: 5 },
    { name: '사과', color: 'bg-red-500', score: 3 },
    { name: '바나나', color: 'bg-yellow-500', score: 1 },
    { name: '라임', color: 'bg-green-500', score: 4 },
    { name: '체리', color: 'bg-red-700', score: 2.5 },
  ];

  const config = [
    {
      label: '이름',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: '색상',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: '점수',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: '점수의 제곱',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default App;
