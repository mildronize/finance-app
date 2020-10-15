import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {
    Link,
    useLocation
} from "react-router-dom";

// type AppProps = { currentRoute: string }; 

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
        },
        verticalOffset: {
            marginTop: theme.spacing(7),
        }
    }),
);

const MyBottomNavigation = () => {
    const classes = useStyles();
    const location = useLocation();
    const [value, setValue] = React.useState("/");

    useEffect(() => {
        // get the pathname to be current state of bottom
        setValue(location.pathname);
    }, []);

    return (
        <div>
            <div className={classes.verticalOffset} />

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Expense" icon={<RestoreIcon />}
                    value="/" component={Link} to="/" />
                <BottomNavigationAction label="Income" icon={<FavoriteIcon />}
                    value="/income" component={Link} to="/income" />
                <BottomNavigationAction label="Credit" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    );
};

export default MyBottomNavigation;

