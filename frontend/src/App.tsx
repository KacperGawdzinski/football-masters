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
  Rating,
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
import Card from './components/Card/Card';

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
    attribute: 'Lineups',
    value: '15'
  },
  {
    attribute: 'Appearences',
    value: '15'
  }
];

const stats3: Stat[] = [
  {
    attribute: 'Goals',
    value: '13'
  },
  {
    attribute: 'Assists',
    value: '6'
  },
  {
    attribute: 'Saves',
    value: '0'
  }
];

const stats4: Stat[] = [
  {
    attribute: 'Tackles',
    value: '13'
  },
  {
    attribute: 'Blocks',
    value: '0'
  },
  {
    attribute: 'Interceptions',
    value: '4'
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
            <Grid container>
              <StatInfoGrid statistics={stats} />
              <StatInfoGrid statistics={stats2} />
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Box className="centered">
              <Typography variant="h1">Neymar</Typography>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                da Silva Santos Júnior
              </Typography>

              <Typography variant="h3" style={{ marginTop: '50px' }}>
                Attacker
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={4.4}
                precision={0.1}
                readOnly
                size="large"
              />
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
                }}
              >
                <Card type={'yellow'} amount={3} />
                <Card type={'red'} amount={0} />
              </Box>
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
            <Grid container>
              <StatInfoGrid statistics={stats3} />
              <StatInfoGrid statistics={stats4} />
            </Grid>
          </Grid>
        </Grid>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '50px'
          }}
        >
          <PlayerStatsChart
            attribute={'Shot Accuracy'}
            value={70}
          ></PlayerStatsChart>
          <PlayerStatsChart
            attribute={'Pass accuracy'}
            value={35}
          ></PlayerStatsChart>
          <PlayerStatsChart
            attribute={'Dribble ratio'}
            value={50}
          ></PlayerStatsChart>
          <PlayerStatsChart
            attribute={'Pentalty ratio'}
            value={50}
          ></PlayerStatsChart>
        </Box>
      </Container>
    </div>
  );
}

export default App;
