import { Box, Typography, styled } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlayerData from '../../dataTypes/PlayerData';
import Stat from '../../dataTypes/Stat';
import mapStatsToObject from '../../utils/mapStatsToObject';
import LeagueStats from './LeagueStats';
import StatInfoGrid from './StatInfoGrid';
import LinearProgress from '@mui/material/LinearProgress';
import { API_SPORTS_KEY } from '../../config';

const PlayerHeader = styled(Box)({
  display: 'flex',
  gap: 50,
  justifyContent: 'center',
  alignItems: 'center'
});

const PlayerImage = styled('img')({
  borderRadius: '10px'
});

const PlayerName = styled(Box)({
  textAlign: 'center'
});

interface Props {
  playerId: number;
  season: number;
}

function PlayerProfile(props: Props) {
  const [playerData, setPlayerData] = useState<PlayerData>();
  useEffect(() => {
    const fetchPlayerData = async () => {
      const respo = await axios.get(
        'https://api-football-v1.p.rapidapi.com/v3/players',
        {
          params: { id: props.playerId, season: props.season },
          headers: {
            'X-RapidAPI-Key': API_SPORTS_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        }
      );
      setPlayerData(respo.data.response[0]);
    };
    fetchPlayerData();
  }, []);

  const playerProperties = ['age', 'height', 'weight'];
  const playerStats: Stat[] = mapStatsToObject(
    playerProperties,
    playerData ? playerData.player : {}
  );

  return (
    <div style={{ width: '100%' }}>
      {playerData ? (
        <div style={{ width: '100%' }}>
          <PlayerHeader>
            <PlayerImage src={playerData?.player.photo} />
            <PlayerName>
              <Typography variant="h1">{playerData?.player.name}</Typography>
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
        </div>
      ) : (
        <LinearProgress color="success" />
      )}
    </div>
  );
}

export default PlayerProfile;
