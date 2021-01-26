import React from 'react';
import YTNails from './YTNails.js';
import banner from './banner.png';
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
} from '@material-ui/core';
//import purple from '@material-ui/core/colors/purple';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={'lg'}>
        <Grid container xs={12}>
            <img alt="Overkill Projects Limited" src={banner} style={{ width: '100%' }} />
        </Grid>
        <Grid container xs={12}>
          <Box p={3}>
              At Overkill Projects, we help businesses and individuals take their ideas from concept to reality. Whatever your technology needs, we have the domain experience necessary to help you achieve your goals.
          </Box>
        </Grid>

        <Grid container xs={12}>
          <Box p={3}>
            <h3>Services:</h3>
            <ul>
              <li>Prototyping and MVP design</li>
              <li>Test equipment design</li>
              <li>Manufacturing IoT design</li>
              <li>Circuit design</li>
              <li>PCB design and analysis</li>
              <li>Device optimization</li>
              <li>Manufacturing and assembly</li>
              <li>Consultation services</li>
            </ul>
          </Box>
        </Grid>
        
        <Grid container xs={12}>
          <Box p={3}>
            <h3>Contact:</h3>
            <ul>
            Feel free to reach out to us anytime by <a href='mailto:overkill.projects.limited@gmail.com'>email</a> or by phone at <a href={'tel:+18564055932'}>856 405 5932</a>.
            </ul>
          </Box>
        </Grid>
        <h3>Latest from the YouTube channel:</h3>

        <YTNails />
      </Container>
      <Container>
        {/*<Paper elevation={3}>*/}
          <Box color="text.primary" p={3}>
            Overkill Projects Limited ©2021
          </Box>
        {/*</Paper>*/}
      </Container>
    </React.Fragment>
  );
}

export default App;
