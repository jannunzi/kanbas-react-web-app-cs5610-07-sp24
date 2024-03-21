import React from "react";
import ArrayStateVariable from "./a4/ArrayStateVariable";
import ClickEvent from "./a4/ClickEvent";
import CounterUseState from "./a4/ConterUseState";
import EventObject from "./a4/EventObject";
import ObjectStateVariable from "./a4/ObjectStateVariable";
import StringStateVariables from "./a4/StringStateVariables";

import { useState } from "react";
import CounterRedux from "./a4/CounterRedux";
import CoursesRedux from "./a4/CoursesRedux";
function Assignment4() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Assignment 4</h2>
      <CoursesRedux />
      <CounterRedux />
      <CounterUseState count={count} setCount={setCount} />
      <ArrayStateVariable count={count} />
      <ObjectStateVariable />
      <StringStateVariables />
      <EventObject />
      <ClickEvent />
    </div>
  );
}

export default Assignment4;
