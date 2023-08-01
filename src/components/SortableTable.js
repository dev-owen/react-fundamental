import { useState } from 'react';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  console.log("sortOrder", sortOrder);
  console.log("sortBy", sortBy);


  const { config, data } = props;

  const handleClick = (label) => {
    // TODO - 정렬 화살표 클릭 시 정렬을 해주는 함수

    if(sortOrder === null){
      setSortOrder("asc");
      /*초기값 asc */
      setSortBy(label);
    } else if (sortOrder === "asc"){
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc"){
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      // TODO - 정렬된 데이터로 바꿔 끼우는 부분 들어갈 comparator 함수
      //테스트 되는지 확인해봐 commit
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB) * reverseOrder;
      } else{
        /*string이 아니면 number일거다. */
        return (valueA - valueB) * reverseOrder;
      }
   
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
     
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;