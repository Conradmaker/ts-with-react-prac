import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const WordRelay = (): JSX.Element => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [word, setWord] = useState('가나다');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult('성공!');
        setWord(value);
        setValue('');
        input?.focus();
      } else {
        setResult('틀림!');
        setValue('');
        input?.focus();
      }
    },
    [word, value]
  );
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    },
    []
  );
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};
export default WordRelay;
