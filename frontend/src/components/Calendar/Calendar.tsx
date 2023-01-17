import { Box, Container } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { API_SPORTS_KEY } from '../../config';
import LeagueFixtures from './LeagueFixtures';

const LEAGUE_IDS = [];

const Calendar = () => {
  // const [playerData, setPlayerData] = useState<PlayerData>();

  useEffect(() => {
    const fetchCalendarData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/players',
        {
          params: { id: params.id, season: props.season },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setPlayerData(response.data.response[0]);
    };
    fetchCalendarData();
  }, []);

  return (
    <Container className="glass2">
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <LeagueFixtures></LeagueFixtures>
        <LeagueFixtures></LeagueFixtures>
      </Box>
    </Container>
  );
};

export default Calendar;
