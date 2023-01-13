import {
  Box,
  Container,
  LinearProgress,
  styled,
  Typography
} from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_SPORTS_KEY } from '../../config';

const LeagueMap = new Map<number, string>([
  [140, 'La Liga'],
  [39, 'Premier League'],
  [78, 'Bundesliga'],
  [135, 'Serie a (Italy)'],
  [61, 'Ligue 1'],
  [106, 'Ekstraklasa'],
  [71, 'Serie a (Brazil)']
]);

const countryList = [
  'England',
  'Poland',
  'Belgium',
  'France',
  'Spain',
  'Netherlands',
  'Germany',
  'Portugal',
  'Turkey',
  'Italy',
  'Saudi Arabia',
  'Argentina',
  'Australia',
  'Austria',
  'Brazil',
  'Bulgaria',
  'Chile',
  'Croatia',
  'Cyprus',
  'Czechia',
  'Denmark',
  'Egypt',
  'Ghana',
  'Greece',
  'India',
  'Ireland',
  'Israel',
  'Jamaica',
  'Japan',
  'Costa Rica',
  'Mexico',
  'Norway',
  'Paraguay',
  'Peru',
  'Romania',
  'Slovakia',
  'Scotland',
  'Switzerland',
  'USA',
  'Wales',
  'Hungary'
];

interface LeagueData {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    logo: string;
  };
}

const Logo = styled(Box)({
  padding: '10px 20px 0px 20px',
  maxWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all .2s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2);',
    cursor: 'pointer'
  }
});

const LeagueList = () => {
  const [leagueData, setLeagueData] = useState<LeagueData[]>();
  useEffect(() => {
    const fetchLeagueDataById = async () => {
      const mapToEntries = Array.from(LeagueMap.entries());
      const res = await Promise.all(
        mapToEntries.map(([key, value]) => {
          return axios.get(
            'https://api-football-v1.p.rapidapi.com/v3/leagues',
            {
              params: { id: key },
              headers: {
                'X-RapidAPI-Key': API_SPORTS_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
              }
            }
          );
        })
      );
      setLeagueData(res.map(el => el.data.response[0]));
    };

    fetchLeagueDataById();
  }, []);

  return (
    <Container className="glass2">
      <Box>
        <Typography variant="h4">Most popular leagues</Typography>

        <Box
          style={{
            display: 'flex',
            margin: '30px 0',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {leagueData ? (
            leagueData.map(leagueData => {
              return (
                <Link
                  key={leagueData.league.id}
                  to={`./${leagueData.league.id}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Logo>
                    <img src={leagueData.league.logo} height={150}></img>
                    <Typography
                      variant="h6"
                      style={{ textAlign: 'center', marginTop: '20px' }}
                    >
                      {leagueData.league.name}
                    </Typography>
                  </Logo>
                </Link>
              );
            })
          ) : (
            <LinearProgress color="success" />
          )}
        </Box>
        <Typography variant="h4">Select country for a top league</Typography>
        <Box
          style={{
            display: 'flex',
            gap: '10px',
            margin: '30px 60px',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
          }}
        >
          {countryList.sort().map(country => {
            return (
              <Logo key={country}>
                <img
                  height={100}
                  width={160}
                  crossOrigin="anonymous"
                  src={`https://countryflagsapi.com/png/${country}`}
                ></img>
                <Typography style={{ textAlign: 'center', fontSize: '18px' }}>
                  {country}
                </Typography>
              </Logo>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default LeagueList;
