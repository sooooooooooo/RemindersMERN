import logo from './../../logo.svg';
import './App.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Navigation from "./../Navigation/Navigation";
import Sidebar from "./../Sidebar/Sidebar";
import Maincontent from "./../Maincontent/Maincontent";

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
    <>
      <Navigation />
      
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Sidebar />

          <Maincontent />
        </Grid>
      </Container>
    </>
  );
}

export default App;
