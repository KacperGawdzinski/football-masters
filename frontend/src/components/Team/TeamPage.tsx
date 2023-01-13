import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useParams } from 'react-router-dom';
import { API_SPORTS_KEY } from '../../config';
import Stat from '../../dataTypes/Stat';
import PlayerStatsChart from '../PlayerProfile/PlayerStatsChart';
import StatInfoGrid from '../PlayerProfile/StatInfoGrid';
import Formation from './Formation';
import 'react-multi-carousel/lib/styles.css';
import PlayerTile from './PlayerTile';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Label
} from 'recharts';
import BreadcrumbsLink from '../styledComponents/BreadcrumpsLink';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Squad {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  players: [
    {
      id: number;
      name: string;
      age: number;
      number: number;
      position: string;
      photo: string;
    }
  ];
}

interface Team {
  biggest: {
    goals: {
      against: {
        away: string;
        home: string;
      };
      for: {
        away: string;
        home: string;
      };
    };
    loses: {
      away: string;
      home: string;
    };
    streak: {
      draws: number;
      loses: number;
      wins: number;
    };
    wins: {
      away: string;
      home: string;
    };
  };
  clean_sheet: {
    away: number;
    home: number;
    total: number;
  };
  failed_to_score: { away: number; home: number; total: number };
  fixtures: {
    draws: {
      away: number;
      home: number;
      total: number;
    };
    loses: {
      away: number;
      home: number;
      total: number;
    };
    wins: {
      away: number;
      home: number;
      total: number;
    };
    played: {
      away: number;
      home: number;
      total: number;
    };
  };
  form: string;
  goals: {
    against: {
      average: {
        away: string;
        home: string;
        total: string;
      };
      total: {
        away: string;
        home: string;
        total: string;
      };
    };
    for: {
      average: {
        away: string;
        home: string;
        total: string;
      };
      total: {
        away: string;
        home: string;
        total: string;
      };
    };
  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
  };
  lineups: [
    {
      formation: string;
      played: number;
    }
  ];
  penalty: {
    missed: {
      percentage: string;
      total: number;
    };
    scored: {
      percentage: string;
      total: number;
    };
  };
  team: {
    id: number;
    logo: string;
    name: string;
  };
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const positions = ['Attacker', 'Midfielder', 'Defender', 'Goalkeeper'];

const TeamPage = () => {
  const [squadData, setSquadData] = useState<Squad>();
  const [teamData, setTeamData] = useState<Team>();
  const params = useParams();

  useEffect(() => {
    const fetchSquadData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/players/squads',
        {
          params: { team: params.team_id },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setSquadData(response.data.response[0]);
    };

    const fetchTeamData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        {
          params: {
            team: params.team_id,
            season: '2022',
            league: params.league_id
          },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setTeamData(response.data.response);
    };
    fetchSquadData();
    fetchTeamData();
  }, []);

  const homeStats: Stat[] = [
    {
      attribute: 'Wins',
      value: teamData?.fixtures.wins.home.toString() || ''
    },
    {
      attribute: 'Draws',
      value: teamData?.fixtures.draws.home.toString() || ''
    },
    {
      attribute: 'Loses',
      value: teamData?.fixtures.loses.home.toString() || ''
    }
  ];

  const awayStats: Stat[] = [
    {
      attribute: 'Wins',
      value: teamData?.fixtures.wins.away.toString() || ''
    },
    {
      attribute: 'Draws',
      value: teamData?.fixtures.draws.away.toString() || ''
    },
    {
      attribute: 'Loses',
      value: teamData?.fixtures.loses.away.toString() || ''
    }
  ];

  const data = [
    {
      x: 'Lose',
      result: 'Win'
    },
    {
      x: 'Draw',
      result: 'Lose'
    },
    {
      x: 'Draw',
      result: 'Lose'
    },
    {
      x: 'Draw',
      result: 'Lose'
    },

    {
      x: 'Win',
      result: 'Win'
    },
    {
      x: 'Lose',
      result: 'Win'
    },
    { x: 'Lose', result: 'Win' },
    { x: 'Draw', result: 'Draw' }
  ];

  return (
    <Container className="glass">
      {squadData && teamData ? (
        <Box>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <BreadcrumbsLink to="/leagues">Leagues</BreadcrumbsLink>
            <BreadcrumbsLink to={`/leagues/${teamData.league.id}`}>
              {teamData.league.name}
            </BreadcrumbsLink>
            <Typography color="text.primary">{teamData.team.name}</Typography>
          </Breadcrumbs>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
              gap: '30px'
            }}
          >
            <img src={squadData?.team.logo} />
            <Typography variant="h2">{squadData?.team.name}</Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px'
            }}
          >
            {teamData ? (
              <Formation
                formationString={teamData?.lineups[0].formation}
              ></Formation>
            ) : null}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                minWidth: '500px'
              }}
            >
              <Box
                style={{
                  marginTop: '40px',
                  maxWidth: '500px',
                  flexDirection: 'column',
                  alignContent: 'center',
                  margin: '0 auto'
                }}
              >
                <Typography
                  variant="h4"
                  style={{ textAlign: 'center', marginBottom: '10px' }}
                >
                  Home
                </Typography>
                <StatInfoGrid statistics={homeStats} />
              </Box>
              <Box
                style={{
                  marginTop: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  margin: '20px auto'
                }}
              >
                <Typography
                  variant="h4"
                  style={{ textAlign: 'center', marginBottom: '10px' }}
                >
                  Away
                </Typography>
                <StatInfoGrid statistics={awayStats} />
              </Box>
              <Box style={{ marginTop: '30px' }}>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid stroke="#535555" strokeDasharray="5 5" />
                    <XAxis tick={false} stroke="black">
                      <Label value="Last games" />
                    </XAxis>
                    <YAxis type="category" dataKey={'x'} stroke="black" />
                    <Line
                      type="linear"
                      dataKey={'result'}
                      stroke="black"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>
            {teamData ? (
              <Box
                style={{
                  marginTop: '50px',
                  marginRight: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  gap: '30px'
                }}
              >
                <PlayerStatsChart
                  attribute="Penalty ratio"
                  value={
                    Math.round(
                      (teamData.penalty.scored.total /
                        (teamData.penalty.scored.total +
                          teamData.penalty.missed.total)) *
                        100
                    ) || 100
                  }
                ></PlayerStatsChart>
                <PlayerStatsChart
                  attribute="Clean sheet"
                  value={
                    Math.round(
                      (teamData.clean_sheet.total /
                        teamData.fixtures.played.total) *
                        100
                    ) || 100
                  }
                ></PlayerStatsChart>
              </Box>
            ) : null}
          </Box>

          {squadData ? (
            <Box style={{ marginTop: '30px' }}>
              {positions.map(position => (
                <Box key={position}>
                  <Typography
                    variant="h4"
                    style={{ margin: '0px 0px 10px 14px' }}
                  >
                    {`${position}s`}
                  </Typography>
                  <Carousel responsive={responsive}>
                    {squadData.players
                      .filter(player => player.position === position)
                      .map(player => {
                        return (
                          <PlayerTile
                            key={player.id}
                            player={player}
                          ></PlayerTile>
                        );
                      })}
                  </Carousel>
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      ) : null}
    </Container>
  );
};

export default TeamPage;
