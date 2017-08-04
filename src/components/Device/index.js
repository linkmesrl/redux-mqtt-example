import React from 'react';
import PropTypes from 'prop-types';

import { Circular } from 'src/components';
import { SketchPicker } from 'react-color';

class Device extends React.Component {
  handleDeviceChange = id => (change) => {
    this.props.saveDevice(id, change);
  }
  render() {
    const { device } = this.props;
    return (
      <div>
        {(device.type === 'circular' &&
          <Circular percent={device.data && device.data.value} />) ||
        (device.type === 'color_picker' &&
          <SketchPicker
            color={device.data && device.data.value}
            onChangeComplete={this.handleDeviceChange(device.id)}
          />)}
      </div>
    );
  }
}

Device.propTypes = {
  device: PropTypes.object,
  saveDevice: PropTypes.func,
};

export default Device;
