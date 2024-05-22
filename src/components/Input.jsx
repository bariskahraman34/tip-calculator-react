import React, { useState } from 'react'

export default function Input(props) {
  const [inputValue , setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <>
      <input
          id={props.id}
          className={props.className}
          type={props.type}
          value={inputValue}
          onChange={handleChange}
          placeholder={props.placeholder}
          required
      />
    </>
  )
}
