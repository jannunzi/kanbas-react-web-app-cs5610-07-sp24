function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);

  const todos = numberArray1.map((a) => <li>Todo {a}</li>);

  return (
    <>
      <h3>Map function</h3>
      numberArray1 = {numberArray1}
      <br />
      squares = {squares}
      <br />
      cubes = {cubes}
      <br />
      <h5>Todos</h5>
      <ul>{todos}</ul>
    </>
  );
}

export default MapFunction;
