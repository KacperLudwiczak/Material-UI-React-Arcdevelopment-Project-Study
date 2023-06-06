import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/core/styles/makeStyles";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "3em" },
  logo: { height: "7em" },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
