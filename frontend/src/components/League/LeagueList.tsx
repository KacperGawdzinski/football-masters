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

export const countryList = new Map<number, string>([
  [39, 'England'],
  [106, 'Poland'],
  [144, 'Belgium'],
  [61, 'France'],
  [140, 'Spain'],
  [88, 'Netherlands'],
  [78, 'Germany'],
  [94, 'Portugal'],
  [203, 'Turkey'],
  [135, 'Italy'],
  [307, 'Saudi Arabia'],
  [128, 'Argentina'],
  [188, 'Australia'],
  [218, 'Austria'],
  [71, 'Brazil'],
  [172, 'Bulgaria'],
  [265, 'Chile'],
  [210, 'Croatia'],
  [318, 'Cyprus'],
  [345, 'Czechia'],
  [119, 'Denmark'],
  [233, 'Egypt'],
  [570, 'Ghana'],
  [197, 'Greece'],
  [323, 'India'],
  [357, 'Ireland'],
  [382, 'Israel'],
  [322, 'Jamaica'],
  [98, 'Japan'],
  [162, 'Costa Rica'],
  [262, 'Mexico'],
  [103, 'Norway'],
  [250, 'Paraguay'],
  [281, 'Peru'],
  [283, 'Romania'],
  [332, 'Slovakia'],
  [179, 'Scotland'],
  [207, 'Switzerland'],
  [253, 'USA'],
  [110, 'Wales'],
  [271, 'Hungary']
]);

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
          {Array.from(countryList)
            .sort((a, b) => a[1].localeCompare(b[1]))
            .map(el => {
              return (
                <Link
                  key={el[0]}
                  to={`/leagues/${el[0]}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Logo>
                    <img
                      height={100}
                      width={160}
                      crossOrigin="anonymous"
                      src={`https://countryflagsapi.com/png/${el[1]}`}
                    ></img>
                    <Typography
                      style={{ textAlign: 'center', fontSize: '18px' }}
                    >
                      {el[1]}
                    </Typography>
                  </Logo>
                </Link>
              );
            })}
        </Box>
      </Box>
    </Container>
  );
};

export default LeagueList;
