import * as React from 'react';
import { Component } from 'react';

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRelay extends Component<Record<string, unknown>, State> {
  state = {
    word: '가나다',
    value: '',
    result: '',
  };
  onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const input = this.input;
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({ ...this.state, result: '정답!', value: '' });
      input?.focus();
    } else {
      this.setState({ result: '틀림', value: '' });
      input?.focus();
    }
  };
  input: HTMLInputElement | null = null;
  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (c: HTMLInputElement): void => {
    this.input = c;
  };
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelay;
