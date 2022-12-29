import React from 'react';
import ResponsiveAppBar from './components/Header';
import axios from 'axios';
import { fetchNewsDefaultParams } from './api/newsapi';
import { settings } from './api/apiFootball';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PlayerStatsChart from './components/PlayerStatsChart';
import StatInfo from './components/StatInfo/StatInfo';
import StatInfoGrid from './components/StatInfoGrid';
import Stat from './dataTypes/Stat';

const stats: Stat[] = [
  {
    attribute: 'Age',
    value: '28'
  },
  {
    attribute: 'Height',
    value: '175'
  },
  {
    attribute: 'Weight',
    value: '68'
  }
];

const stats2: Stat[] = [
  {
    attribute: 'Games',
    value: '15'
  },
  {
    attribute: 'Minutes',
    value: '1322'
  }
];

function App() {
  return (
    <div className="site-background">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container className="glass" sx={{ mt: '80px', minWidth: '80%' }}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Box style={{ display: 'flex', gap: 30, justifyContent: 'left' }}>
              <img
                src={'https://media.api-sports.io/football/players/276.png'}
                className="player-image"
              />
              <img
                src={'https://media.api-sports.io/football/leagues/61.png'}
                style={{ borderRadius: 10 }}
              />
            </Box>
            <StatInfoGrid statistics={stats} />
          </Grid>

          <Grid item xs={4}>
            <Box className="centered">
              <Typography variant="h1">Neymar</Typography>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                da Silva Santos Júnior
              </Typography>
              <FormControl style={{ marginTop: '40px', width: '200px' }}>
                <InputLabel id="demo-simple-select-label">Season</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h3" style={{ marginTop: '30px' }}>
                Attacker
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ display: 'flex', gap: 30, justifyContent: 'right' }}>
              <img src={'https://media.api-sports.io/football/teams/85.png'} />

              <img
                src={'https://media.api-sports.io/flags/fr.svg'}
                width={150}
              />
            </Box>

            <Box className="flexbox">
              <StatInfoGrid statistics={stats2} />
            </Box>
          </Grid>
        </Grid>
        <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
          <PlayerStatsChart></PlayerStatsChart>
          <PlayerStatsChart></PlayerStatsChart>
        </Box>
      </Container>
    </div>
  );
}

export default App;
