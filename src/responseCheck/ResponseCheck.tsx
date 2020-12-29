import * as React from 'react';
import { useState, useCallback, useRef } from 'react';
import './index.css';
enum State {
  Waiting = 'waiting',
  Now = 'now',
  Ready = 'ready',
}
enum Message {
  '클릭해서 시작!' = '클릭해서 시작!',
  '지금클릭' = '지금클릭',
  '초록색이 되면 클릭하세요' = '초록색이 되면 클릭하세요',
  '너무 성급해요! 초록색!' = '너무 성급해요! 초록색!',
}
const initialResult: Array<number> = [];

function ResponseCheck(): JSX.Element {
  const [state, setState] = useState(State.Waiting);
  const [message, setMessage] = useState(Message['클릭해서 시작!']);
  const [result, setResult] = useState(initialResult);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === State.Waiting) {
      timeout.current = window.setTimeout(() => {
        setState(State.Now);
        setMessage(Message.지금클릭);
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState(State.Ready);
      setMessage(Message['초록색이 되면 클릭하세요']);
    } else if (state === State.Ready) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setState(State.Waiting);
      setMessage(Message['너무 성급해요! 초록색!']);
    } else if (state === State.Now) {
      endTime.current = new Date().getTime();
      setState(State.Waiting);
      setMessage(Message['클릭해서 시작!']);
      setResult(prev => {
        return [...prev, endTime.current - startTime.current];
      });
    }
  }, [state, message]);

  const onReset = useCallback((): void => {
    setResult(initialResult);
  }, [initialResult]);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간:{result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
}
export default ResponseCheck;
