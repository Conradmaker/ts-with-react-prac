import * as React from 'react';
interface State {
  first: number;
  second: number;
  value: string;
  result: string;
}
class GuGuDan extends React.Component<Record<string, unknown>, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };
  input: HTMLInputElement | null = null;
  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prev: State) => {
        return {
          result: '정답' + prev.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        };
      });
      this.input?.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input?.focus();
    }
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
  };
  onRefInput = (c: HTMLInputElement): void => {
    this.input = c;
  };
  render(): JSX.Element {
    return (
      <>
        <div>
          {this.state.first}곱하기{this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">정답</button>
        </form>
        <h1>{this.state.result}</h1>
      </>
    );
  }
}

export default GuGuDan;
