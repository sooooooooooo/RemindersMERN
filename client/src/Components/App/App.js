import logo from './../../logo.svg';
import './App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Button, InputAdornment, Paper } from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';

import Hidden from '@material-ui/core/Hidden';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Container maxWidth="sm" className="App">
    //   <Paper>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       To-Do List Reminders App
    //     </Typography>
    //     <Button variant="contained" color="primary">
    //       Primary Button
    //     </Button>
    //     <Button variant="contained" color="secondary">
    //       Secondary Button
    //     </Button>
    //   </Paper>
    // </Container>

    <Container maxWidth="md">
      <Grid container spacing={0}>
        <Grid item sm={4} md={3}>
          <Hidden only="xs">
            <Paper style={{width:"100%"}}>
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

        <Grid item xs={12} sm={8} md={9}>
          <Paper style={{width:"100%"}}>
            <Typography variant="h1" color="initial">
              Projects
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
