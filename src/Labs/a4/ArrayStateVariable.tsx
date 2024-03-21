import React, { useState } from "react";
import { useSelector } from "react-redux";
function ArrayStateVariable({ count }: { count: number }) {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  const count123 = useSelector((store: any) => store.counter.count);
  return (
    <div>
      <h2>Array State Variable</h2>
      <h3>Count: {count}</h3>
      <h3>Count Redux: {count123}</h3>
      <button onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;
