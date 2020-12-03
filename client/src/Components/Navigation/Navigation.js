import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        },
    },
}));

const Navigation = props => {
    const classes = useStyles();
    return (
        // <AppBar position="static" color="primary">
        //     <Toolbar>
        //         <Typography variant="h6">
        //             Reminders iOS App Remake
        //         </Typography>
        //         <nav>
        //             <Link variant="button" color="secondary" href="#">
        //                 Account
        //             </Link>
        //         </nav>
        //         <Button variant="outlined" href="#">
        //             Login
        //         </Button>
        //     </Toolbar>
        // </AppBar>
        <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Reminders iOS App Remake
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Account
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Edit
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Window
                    </Link>
                </nav>
                <Button href="#" color="secondary" variant="outlined" className={classes.link}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;