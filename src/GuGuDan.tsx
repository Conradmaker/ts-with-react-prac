import * as React from 'react';
import { useState, useRef } from 'react';
function GuGuDan(): JSX.Element {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult('정답');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input?.focus();
    } else {
      setResult('땡');
      setValue('');
    }
  };

  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">정답</button>
      </form>
      <h1>{result}</h1>
    </>
  );
}

export default GuGuDan;
