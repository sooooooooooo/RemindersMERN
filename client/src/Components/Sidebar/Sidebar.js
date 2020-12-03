import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    paperSidebar: {
        borderRadius: "5px 0 0 5px",
        padding: "30px 10px 10px 10px",
        width: "100%",
        height: "500px",
        backgroundColor: "#f5f5f5",
    }
}));

const Sidebar = props => {
    const classes = useStyle();
    return (
        <Grid item sm={4} md={3}>
            <Hidden only="xs">
                <Paper className={classes.paperSidebar}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchIcon />
                            </InputAdornment>
                        ),
                        }}
                    />
                </Paper>
            </Hidden>
        </Grid>
    )
}

export default Sidebar;