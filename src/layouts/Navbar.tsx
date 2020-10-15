import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    fixed: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100%",
      zIndex: 150,
    },
    verticalOffset: {
      marginBottom: theme.spacing(7),
    }
  }),
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fixed}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Expense
                            </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div className={classes.verticalOffset} />
    </div>
  );
};

export default Navbar;

