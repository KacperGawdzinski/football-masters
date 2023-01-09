import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  styled
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_SPORTS_KEY } from '../../config';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CancelIcon from '@mui/icons-material/Cancel';

interface StandingData {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
}

const StandingsTableCell = styled(TableCell)({
  borderBottom: '1px solid black'
});

const StandingsTableRow = styled(TableRow)({
  ':hover': {
    transform: 'scale(1.01)',
    transition: 'all .2s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2);',
    cursor: 'pointer'
  }
});

interface LeagueData {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  standings: Array<Array<StandingData>>;
}

const LeagueTable = () => {
  const [leagueData, setLeagueData] = useState<LeagueData>();
  const params = useParams();

  useEffect(() => {
    const fetchLeagueData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/standings',
        {
          params: { league: params.id, season: 2022 },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setLeagueData(response.data.response[0].league);
    };
    fetchLeagueData();
  }, []);

  return (
    <TableContainer style={{ padding: '0 50px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StandingsTableCell>No</StandingsTableCell>
            <StandingsTableCell></StandingsTableCell>
            <StandingsTableCell align="left" style={{ width: '30%' }}>
              Club
            </StandingsTableCell>
            <StandingsTableCell align="center">MP</StandingsTableCell>
            <StandingsTableCell align="center">W</StandingsTableCell>
            <StandingsTableCell align="center">D</StandingsTableCell>
            <StandingsTableCell align="center">L</StandingsTableCell>
            <StandingsTableCell align="center">GS</StandingsTableCell>
            <StandingsTableCell align="center">GL</StandingsTableCell>
            <StandingsTableCell align="center">GD</StandingsTableCell>
            <StandingsTableCell align="center">Points</StandingsTableCell>
            <StandingsTableCell align="center">Form</StandingsTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leagueData
            ? leagueData.standings[0].map(standing => {
                return (
                  <StandingsTableRow
                    key={standing.team.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StandingsTableCell component="th" scope="row">
                      {standing.rank}
                    </StandingsTableCell>
                    <StandingsTableCell align="left">
                      {' '}
                      <img src={standing.team.logo} height={50}></img>
                    </StandingsTableCell>
                    <StandingsTableCell align="left">
                      {' '}
                      {standing.team.name}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {standing.all.played}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {' '}
                      {standing.all.win}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {' '}
                      {standing.all.draw}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {' '}
                      {standing.all.lose}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {standing.all.goals.for}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {standing.all.goals.against}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {standing.goalsDiff}
                    </StandingsTableCell>
                    <StandingsTableCell
                      align="center"
                      style={{ fontWeight: 'bold' }}
                    >
                      {' '}
                      {standing.points}
                    </StandingsTableCell>
                    <StandingsTableCell align="center">
                      {standing.form.split('').map((letter, idx) => {
                        if (letter === 'W') {
                          return (
                            <CheckCircleIcon key={idx} htmlColor="green" />
                          );
                        } else if (letter === 'L') {
                          return <CancelIcon key={idx} htmlColor="#E25B49" />;
                        } else {
                          return (
                            <DoDisturbOnIcon key={idx} htmlColor="#FFF300" />
                          );
                        }
                      })}
                    </StandingsTableCell>
                  </StandingsTableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeagueTable;
