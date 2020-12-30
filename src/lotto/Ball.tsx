import * as React from 'react';
import {} from 'react';
type BallPropType = {
  number: number;
};
enum Background {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Blue = 'blue',
  Green = 'green',
}
function Ball({ number }: BallPropType): JSX.Element {
  let background: Background;
  if (number <= 10) {
    background = Background.Red;
  } else if (number <= 20) {
    background = Background.Orange;
  } else if (number <= 30) {
    background = Background.Yellow;
  } else if (number <= 40) {
    background = Background.Blue;
  } else {
    background = Background.Green;
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
}

export default Ball;
