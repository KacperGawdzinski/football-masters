import { Box, Typography } from '@mui/material';
import FixtureData from '../../dataTypes/FixtureData';

interface Props {
  fixture: FixtureData;
}

const CalendarTile = (props: Props) => {
  const date = new Date(props.fixture.fixture.date);
  const homeTeamNameWords = props.fixture.teams.home.name.split(' ');
  const awayTeamNameWords = props.fixture.teams.away.name.split(' ');

  if (homeTeamNameWords.length > 1) {
    props.fixture.teams.home.name = `${homeTeamNameWords[0][0]}. ${homeTeamNameWords[1]}`;
  }

  if (awayTeamNameWords.length > 1) {
    props.fixture.teams.away.name = `${awayTeamNameWords[0][0]}. ${awayTeamNameWords[1]}`;
  }

  return (
    <Box style={{ display: 'flex', marginTop: '5px' }}>
      <Box style={{ margin: 'auto 0' }}>
        <img
          src={props.fixture.teams.home.logo}
          width={'50px'}
          height={'auto'}
        ></img>
      </Box>

      <Box style={{ margin: '0px 10px 0 10px', minWidth: '220px' }}>
        <Typography
          align="center"
          variant="body1"
        >{`${props.fixture.teams.home.name} - ${props.fixture.teams.away.name}`}</Typography>
        <Typography
          align="center"
          variant="body2"
          style={{ textAlign: 'center' }}
        >
          {date.toLocaleString().substring(0, 17)}
        </Typography>
      </Box>
      <Box style={{ margin: 'auto 0' }}>
        <img
          src={props.fixture.teams.away.logo}
          width={'50px'}
          height={'auto'}
        ></img>
      </Box>
    </Box>
  );
};

export default CalendarTile;
