import React, { useState } from 'react';

/**
 * 桁数制限する
 */
function DigitCheckInput(props) {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const maxLength = props.maxDigits;

  const handleChange = (e) => {
    const value = e.target.value;
    if(value) {
      setInputValue(value);
      console.log(value.length);
      value.length > maxLength ? setIsValid(false) : setIsValid(true);
    } else {
      setInputValue('');
    }

  }

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      { isValid ? null : `最大桁は${maxLength}です。桁数が超えています`}
    </>
  );
}

export default DigitCheckInput;