import React from 'react';
import PropTypes from 'prop-types';
import helpers from 'src/helpers';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { Device } from 'src/components';
import { withStyles } from 'material-ui/styles';
import styleSheet from './styles';

const CardDevice = ({ classes, device, saveDevice }) => (
  <Card>
    <CardMedia className={classes.cardMedia}>
      <Device
        device={device}
        saveDevice={saveDevice}
      />
    </CardMedia>
    <CardContent>
      <Typography
        className={classes.typography}
        type="headline"
        component="h2"
      >
        {helpers.removeDashStr(device.type)}
      </Typography>
      <Typography component="p">
        Non si intrometta! No, aspetti, mi porga l'indice; ecco lo alzi così...
        guardi, guardi, guardi; lo vede il dito? Lo vede che stuzzica, che prematura anche.
      </Typography>
    </CardContent>
    <CardActions>
      <Button dense color="primary">
        Antani
      </Button>
    </CardActions>
  </Card>
);

CardDevice.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object,
  saveDevice: PropTypes.func,
};

export default withStyles(styleSheet)(CardDevice);
