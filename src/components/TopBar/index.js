import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import styleSheet from './styles';

const TopBar = ({ classes, title }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography
        className={classes.title}
        color="inherit"
        type="title"
      >
        {title}
      </Typography>
      <Button color="contrast">Info</Button>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(TopBar);
