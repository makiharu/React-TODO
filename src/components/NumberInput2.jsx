import React, { useState } from 'react';

/**
 * 入力フォーム
 * 数値のみ入力を受け付ける。数値以外は入力不可
 */
function NumberInput2() {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;
   
    if(regex.test(inputValue) || inputValue === '') {
      setValue(inputValue);
    }
  }

  return(
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default NumberInput2;
