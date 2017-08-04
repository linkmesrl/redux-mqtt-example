import React from 'react';
import PropTypes from 'prop-types';
import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory';

class Circular extends React.Component {
  getData = percent => [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  render() {
    const { percent } = this.props;
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.getData(percent)}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: (d) => {
                  const color = d.y > 30 ? 'green' : 'red';
                  return d.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryAnimation
            duration={1000}
            data={{ percent, data: this.getData(percent) }}
          >
            {newProps => (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps.percent)}%`}
                style={{ fontSize: 45 }}
              />
            )}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

Circular.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default Circular;
