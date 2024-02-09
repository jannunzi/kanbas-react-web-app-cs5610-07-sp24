import JavaScript from "./JavaScript";

function Assignment3() {
  return (
    <div>
      <h2>Assignment 3</h2>
      <JavaScript />
    </div>
  );
}

export function Add() {
  return 2 + 4;
}

export function Subtract(a: number, b: number) {
  return a - b;
}

export default Assignment3;
