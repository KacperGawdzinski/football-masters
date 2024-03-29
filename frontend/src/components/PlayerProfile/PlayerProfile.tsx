import { Box, Typography, styled, Container, Breadcrumbs } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlayerData from '../../dataTypes/PlayerData';
import Stat from '../../dataTypes/Stat';
import mapStatsToObject from '../../utils/mapStatsToObject';
import LeagueStats from './LeagueStats';
import StatInfoGrid from './StatInfoGrid';
import LinearProgress from '@mui/material/LinearProgress';
import { API_SPORTS_KEY } from '../../config';
import { useParams } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BreadcrumbsLink from '../styledComponents/BreadcrumpsLink';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const PlayerHeader = styled(Box)({
  display: 'flex',
  gap: 50,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px'
});

const PlayerImage = styled('img')({
  borderRadius: '10px'
});

const PlayerName = styled(Box)({
  textAlign: 'center'
});

function PlayerProfile() {
  const season = useSelector((state: RootState) => state.season.season);
  const [playerData, setPlayerData] = useState<PlayerData>();
  const params = useParams();

  useEffect(() => {
    const fetchPlayerData = async () => {
      const response = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/players',
        {
          params: { id: params.id, season },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setPlayerData(response.data.response[0]);
    };
    fetchPlayerData();
  }, [season]);

  const playerProperties = ['age', 'height', 'weight'];
  const playerStats: Stat[] = mapStatsToObject(
    playerProperties,
    playerData ? playerData.player : {}
  );

  return (
    <Container className="glass">
      {playerData ? (
        <Box>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <BreadcrumbsLink to="/leagues" style={{}}>
              Leagues
            </BreadcrumbsLink>
            <BreadcrumbsLink
              to={`/leagues/${playerData.statistics[0].league.id}`}
            >
              {playerData.statistics[0].league.name}
            </BreadcrumbsLink>
            <BreadcrumbsLink
              to={`/leagues/${playerData.statistics[0].league.id}/${playerData.statistics[0].team.id}`}
            >
              {playerData.statistics[0].team.name}
            </BreadcrumbsLink>
            <Typography color="text.primary">
              {playerData.player.name}
            </Typography>
          </Breadcrumbs>
          <PlayerHeader>
            <PlayerImage src={playerData?.player.photo} />
            <PlayerName>
              <Typography variant="h2">{playerData?.player.name}</Typography>
              <Typography variant="h6">
                {playerData?.player.name == playerData?.player.firstname
                  ? playerData?.player.lastname
                  : playerData?.player.firstname}
              </Typography>
            </PlayerName>
            <Box style={{ marginLeft: 'auto' }}>
              <StatInfoGrid statistics={playerStats} />
            </Box>
          </PlayerHeader>
          <LeagueStats playerData={playerData}></LeagueStats>
        </Box>
      ) : (
        <LinearProgress color="success" />
      )}
    </Container>
  );
}

export default PlayerProfile;
