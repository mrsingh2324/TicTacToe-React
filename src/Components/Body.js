import React, { useEffect, useState } from "react";

const Body = () => {
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isXTurn, setIsXTurn] = useState(true);

  useEffect(() => {
    checkWinner();
  }, [arr]);

  const checkWinner = () => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (arr[a] !== 0 && arr[a] === arr[b] && arr[b] === arr[c]) {
        alert(`Player ${arr[a]} wins!`);
        window.location.reload();
      }
    }
  };

  const onClick = (key) => {
    if (arr[key] !== 0) {
      return; // If the button is already clicked, do nothing
    }

    const newArr = [...arr];
    newArr[key] = isXTurn ? "X" : "O";
    setArr(newArr);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="flex items-center justify-center h-[80vh] w-[500px]">
      <div className="w-full flex flex-col justify-between">
        <div className="flex h-[33%] w-full justify-between">
          <button
            key={0}
            onClick={() => onClick(0)}
            className="border rounded w-[33%]"
          >
            {arr[0]}
          </button>
          <button
            key={1}
            onClick={() => onClick(1)}
            className="border rounded w-[33%]"
          >
            {arr[1]}
          </button>
          <button
            key={2}
            onClick={() => onClick(2)}
            className="border rounded w-[33%]"
          >
            {arr[2]}
          </button>
        </div>
        <div className=" flex h-[33%] w-full justify-between">
          <button
            key={3}
            onClick={() => onClick(3)}
            className="border rounded w-[33%]"
          >
            {arr[3]}
          </button>
          <button
            key={4}
            onClick={() => onClick(4)}
            className="border rounded w-[33%]"
          >
            {arr[4]}
          </button>
          <button
            key={5}
            onClick={() => onClick(5)}
            className="border rounded w-[33%]"
          >
            {arr[5]}
          </button>
        </div>
        <div className=" flex h-[34%] w-full justify-between">
          <button
            key={6}
            onClick={() => onClick(6)}
            className="border rounded w-[33%]"
          >
            {arr[6]}
          </button>
          <button
            key={7}
            onClick={() => onClick(7)}
            className="border rounded w-[33%]"
          >
            {arr[7]}
          </button>
          <button
            key={8}
            onClick={() => onClick(8)}
            className="border rounded w-[33%]"
          >
            {arr[8]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
