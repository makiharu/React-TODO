import React, { useState } from 'react';

/**
 * 入力フォーム
 * 数値のみ入力 
 */
function NumberInput() {
  const [value, setValue] = useState('');

  return (
    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
  );
}

export default NumberInput;