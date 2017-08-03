import React from 'react';
import PropTypes from 'prop-types';

import Gauge from 'react-svg-gauge';
import { SketchPicker } from 'react-color';

import {
  DeviceBox,
} from './styles';

class Device extends React.Component {
  handleDeviceChange = id => (change) => {
    this.props.saveDevice(id, change);
  }

  render() {
    const { device } = this.props;
    return (
      <DeviceBox>
        {(device.type === 'gauge' &&
          <Gauge value={40} />) ||
        (device.type === 'color_picker' &&
          <SketchPicker
            color={device.data && device.data.hex}
            onChangeComplete={this.handleDeviceChange(device.id)}
          />)}
      </DeviceBox>
    );
  }
}

Device.propTypes = {
  device: PropTypes.object,
  saveDevice: PropTypes.func,
};

export default Device;
