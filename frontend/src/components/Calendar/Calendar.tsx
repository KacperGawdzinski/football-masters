import { Box, Container, LinearProgress, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_SPORTS_KEY, LeagueMap } from '../../config';
import FixtureData from '../../dataTypes/FixtureData';
import { RootState } from '../../redux/store';
import LeagueFixtures from './LeagueFixtures';

const Calendar = () => {
  const [fixturesData, setFixturesData] = useState<FixtureData[][]>();
  const season = useSelector((state: RootState) => state.season.season);

  useEffect(() => {
    const fetchCalendarData = async () => {
      const mapToEntries = Array.from(LeagueMap.entries());
      const res = await Promise.all(
        mapToEntries.map(([key, value]) => {
          return axios.get(
            'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            {
              params: { league: key, season: season, next: 7 },
              headers: {
                'X-RapidAPI-Key': API_SPORTS_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
              }
            }
          );
        })
      );
      setFixturesData(
        res.map(el => {
          return el.data.response;
        })
      );
    };
    fetchCalendarData();
  }, [season]);

  return (
    <Container className="glass2">
      {fixturesData && season === 2022 ? (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {fixturesData.map(data => {
            if (data.length) {
              return (
                <LeagueFixtures key={data[0].fixture.id} fixtures={data} />
              );
            }
          })}
        </Box>
      ) : season < 2022 ? (
        <Box>
          <Typography variant="h5">
            Unable to fetch calendar: season has ended.
          </Typography>
        </Box>
      ) : (
        <LinearProgress color="success" />
      )}
    </Container>
  );
};

export default Calendar;
