import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'src/actions';
import { compose } from 'recompose';

import Grid from 'material-ui/Grid';
import { CardDevice, TopBar } from 'src/components';

import { withStyles } from 'material-ui/styles';
import styleSheet from './styles';

const App = ({ classes, devices, saveDevice }) => (
  <div>
    <TopBar title="Redux MQTT Example" />
    <div className={classes.root}>
      <Grid container gutter={24}>
        {Object.keys(devices).map(key => (
          <Grid key={key} item xs={12} sm={4} md={3}>
            <CardDevice
              device={devices[key]}
              saveDevice={saveDevice}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  devices: PropTypes.object.isRequired,
  saveDevice: PropTypes.func.isRequired,
};

const enhance = compose(
  connect(
    state => ({ devices: state.devices }),
    dispatch => ({ ...bindActionCreators(actions, dispatch) }),
  ),
  withStyles(styleSheet),
);

export default enhance(App);
