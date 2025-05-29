import { useState } from "react";
import React from 'react'
import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <div>
      <FocusInput />
      <Timer />
    </div>
  )
}

export default App