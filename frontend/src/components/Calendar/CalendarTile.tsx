import { Grid, Box, Typography } from '@mui/material';

const CalendarTile = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <img
        src={'https://media-2.api-sports.io/football/teams/33.png'}
        height={50}
      ></img>
      <Box style={{ margin: '0px 10px 0 10px' }}>
        <Typography variant="body1">Southampton - Liverpool</Typography>
        <Typography variant="body2" style={{ textAlign: 'center' }}>
          2023-05-28 15:00
        </Typography>
      </Box>
      <img
        src={'https://media-2.api-sports.io/football/teams/36.png'}
        height={50}
      ></img>
    </Box>
  );
};

export default CalendarTile;
