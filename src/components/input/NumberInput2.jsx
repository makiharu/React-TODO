import React, { useState } from 'react';

/**
 * 入力フォーム
 * 数値のみ入力を受け付ける。数値以外は入力不可
 */
function NumberInput2() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const handleChange1 = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;
   
    if(regex.test(inputValue) || inputValue === '') {
      setValue1(inputValue);
    }
  }

  const handleChange2 = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9]*$/;
   
    if(regex.test(inputValue) || inputValue === '') {
      setValue2(inputValue);
    }
  }

  return(
    <>
    <input type="text" value={value1} onChange={handleChange1} /><br/>
    <input type="text" value={value2} onChange={handleChange2} />
    </>
  );
}

export default NumberInput2;
