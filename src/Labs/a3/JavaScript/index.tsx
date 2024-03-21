import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import JsonStringify from "./json/JsonStringify";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";
import CounterUseState from "../../a4/ConterUseState";

function JavaScript() {
  console.log("Hello World!");

  return (
    <div>
      <h1>JavaScript</h1>
      {/* <CounterUseState /> */}

      <FunctionDestructing />
      <Destructing />
      <Spreading />
      <House />
      <JsonStringify />
      <MapFunction />
      <WorkingWithArrays />
      <ArrowFunctions />
      <ES5Functions />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </div>
  );
}
export default JavaScript;
