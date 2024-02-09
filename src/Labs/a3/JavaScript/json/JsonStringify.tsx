function JsonStringify() {
  const squares = [{ todo: 1 }, { qwe: 4 }, { asd: [16, 25, 36] }];
  return (
    <>
      <h3>JSON Stringify</h3>
      squares =<pre>{JSON.stringify(squares, null, 2)}</pre>
    </>
  );
}
export default JsonStringify;
