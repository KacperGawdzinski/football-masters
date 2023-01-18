import { Box, Container, LinearProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_SPORTS_KEY } from '../../config';
import TeamWithLogo from './TeamWithForm';
import Predictions from '../../dataTypes/Predictions';
import PercentBar from './PercentBar';

const statTable = ['form', 'att', 'def', 'total'];

const Fixture = () => {
  const params = useParams();
  const [predictions, setPredictions] = useState<Predictions>();

  useEffect(() => {
    const fetchLeagueData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/predictions',
        {
          params: { fixture: params.id },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setPredictions(response.data.response[0]);
    };
    fetchLeagueData();
  }, []);

  return (
    <Container className="glass">
      {predictions ? (
        <Box>
          <Typography variant="h3" textAlign={'center'}>
            Fixture
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <TeamWithLogo data={predictions} home={true} />
            <Typography variant="h4">vs</Typography>
            <TeamWithLogo data={predictions} home={false} />
          </Box>
          <Box
            style={{
              margin: '50px auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              width: '80%'
            }}
          >
            {statTable.map(stat => {
              const key = stat as keyof typeof predictions.comparison;
              return (
                <PercentBar
                  key={stat}
                  stat={key}
                  homePercent={predictions.comparison[key].home}
                  awayPercent={predictions.comparison[key].away}
                />
              );
            })}
          </Box>
        </Box>
      ) : (
        <LinearProgress color="success" />
      )}
    </Container>
  );
};

export default Fixture;
