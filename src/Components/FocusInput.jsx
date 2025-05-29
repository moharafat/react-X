import { useRef } from "react";
import React from 'react'

const FocusInput = () => {
  const inputElement = useRef(null)
  const focusInput = () => {
    if (inputElement.current) {
      inputElement.current.focus()
    }
    inputElement.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputElement} placeholder="Click this button to focus"/>
      <button onClick={focusInput}>Foucus Button</button>
    </div>
  )
}

export default FocusInput