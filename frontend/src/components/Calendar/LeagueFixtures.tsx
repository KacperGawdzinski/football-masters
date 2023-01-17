import { Box, Typography, Grid } from '@mui/material';
import CalendarTile from './CalendarTile';

const LeagueFixtures = () => {
  return (
    <Box>
      {' '}
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        Premier League
      </Typography>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px'
        }}
      >
        <Box style={{ display: 'flex', minWidth: '600px' }}>
          <img
            src={'https://media-2.api-sports.io/football/teams/41.png'}
            height={150}
          ></img>
          <Box style={{ margin: 'auto 0' }}>
            <Typography variant="h5">Southampton - Liverpool</Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              2023-05-28 15:00
            </Typography>
          </Box>
          <img
            src={'https://media-2.api-sports.io/football/teams/40.png'}
            height={150}
          ></img>
        </Box>
        <Box>
          <Grid container style={{ minWidth: '800px' }}>
            <Grid
              item
              xs={6}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <CalendarTile></CalendarTile>
              <CalendarTile></CalendarTile>
              <CalendarTile></CalendarTile>
            </Grid>{' '}
            <Grid
              item
              xs={6}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <CalendarTile></CalendarTile>
              <CalendarTile></CalendarTile>
              <CalendarTile></CalendarTile>
            </Grid>{' '}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LeagueFixtures;
