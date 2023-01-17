import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FixtureData from '../../dataTypes/FixtureData';
import Hr from '../styledComponents/Hr';
import FutureFixturesGrid from './FutureFixturesGrid';

interface Props {
  fixtures: FixtureData[];
}

const LeagueFixtures = (props: Props) => {
  const date = new Date(props.fixtures[0].fixture.date);

  return (
    <Box>
      <Link
        style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
        to={`/leagues/${props.fixtures[0].league.id}`}
      >
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          {props.fixtures[0].league.name}
        </Typography>
      </Link>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
          marginBottom: '40px'
        }}
      >
        <Box style={{ display: 'flex', minWidth: '300px', maxWidth: '500px' }}>
          <Box style={{ margin: 'auto 0' }}>
            <img
              src={props.fixtures[0].teams.home.logo}
              width={'100px'}
              height={'auto'}
            ></img>
          </Box>
          <Box style={{ margin: 'auto 0', minWidth: '270px' }}>
            <Box
              display={'flex'}
              style={{
                margin: 'auto 0',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant="h5"
                style={
                  props.fixtures[0].teams.home.name.split(' ').length > 1
                    ? { wordSpacing: 9999, minWidth: '50%' }
                    : { minWidth: '50%' }
                }
                align={'center'}
              >{`${props.fixtures[0].teams.home.name} `}</Typography>
              <Typography>-</Typography>
              <Typography
                variant="h5"
                style={
                  props.fixtures[0].teams.away.name.split(' ').length > 1
                    ? { wordSpacing: 9999, minWidth: '50%' }
                    : { minWidth: '50%' }
                }
                align={'center'}
              >{`${props.fixtures[0].teams.away.name}`}</Typography>
            </Box>

            <Typography variant="body1" style={{ textAlign: 'center' }}>
              {date.toLocaleString().substring(0, 17)}
            </Typography>
          </Box>
          <Box style={{ margin: 'auto 0' }}>
            <img
              src={props.fixtures[0].teams.away.logo}
              width={'100px'}
              height={'auto'}
            ></img>
          </Box>
        </Box>
        <Box>
          <FutureFixturesGrid fixtures={props.fixtures} />
        </Box>
      </Box>
      <Hr />
    </Box>
  );
};

export default LeagueFixtures;
