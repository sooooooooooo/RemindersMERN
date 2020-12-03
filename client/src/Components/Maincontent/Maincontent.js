import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    paperMaincontent: {
        borderRadius: "0 5px 5px 0",
        padding: "30px 10px 10px 10px",
        width: "100%",
        height: "500px",
    }
}));

const Maincontent = props => {
    const classes = useStyle();
    return (
        <Grid item xs={12} sm={8} md={9}>
            <Paper className={classes.paperMaincontent}>
              <Typography variant="h4" color="initial">
                Projects
              </Typography>
            </Paper>
        </Grid>
    )
}

export default Maincontent;