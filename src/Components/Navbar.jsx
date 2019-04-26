import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
    // fontSize: "25px",
    // color: "#585859"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbar: {
    // backgroundColor: "#50c878;"
    // Below is the primary app background color
    // backgroundColor: "#efefef"
    //Below is the Sidebar background color
    // backgroundColor: "#d1d1d1"
    // backgroundImage: "linear-gradient(#40E0D0,white)"
    // backgroundImage: "linear-gradient(#40E0D0,#287233)"
    // backgroundImage: "linear-gradient(#287233, white)"
    // backgroundImage: "radial-gradient(white, #40e0d0, #0ea596)"
  },
  login: {
    // color: "#585859"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            SNAP! Photo App
          </Typography>
          <Button
            color="inherit"
            onClick={props.openLogin}
            className={classes.login}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={props.handleGallery}
            className={classes.login}
          >
            Gallery
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
