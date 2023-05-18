import React from "react";
import {makeEnding} from "../../utils.js";

function Counter ({number}) {
  return (
    <span> | {`Выделяли ${makeEnding(number, "раз", "", "а", "")}`}</span>
  )
}

export default Counter;
