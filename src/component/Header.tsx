import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: 'rgb(215, 25, 32)',
    },
}));

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="relative" className={classes.header}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Qualogy Quantum Emulator
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
