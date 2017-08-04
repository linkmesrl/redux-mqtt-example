import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions';

import { Button, Device, Logo } from 'components';
import logoImg from '../../assets/logo.svg';

import {
  ButtonsContainer,
  Container,
  DevicesContainer,
  H2,
} from './styles';

const App = ({ devices, saveDevice }) => (
  <Container>
    <Logo src={logoImg} />
    <H2>Redux MQTT Example</H2>
    <ButtonsContainer>
      <Button type="primary" onClick={() => console.log('gauge')}>Gauge</Button>
      <Button type="success" onClick={() => console.log('color_picker')}>Color Picker</Button>
    </ButtonsContainer>
    <DevicesContainer>
      {Object.keys(devices).map(key => (
        <Device
          key={key}
          device={devices[key]}
          saveDevice={saveDevice}
        />
      ))}
    </DevicesContainer>
  </Container>
);

App.propTypes = {
  devices: PropTypes.object.isRequired,
  saveDevice: PropTypes.func.isRequired,
};

export default connect(
  state => ({ devices: state.devices }),
  dispatch => ({ ...bindActionCreators(actions, dispatch) }),
)(App);
