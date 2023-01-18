import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FixtureData from '../../dataTypes/FixtureData';
import CalendarTile from './CalendarTile';

interface Props {
  fixtures: FixtureData[];
}

const FutureFixturesGrid = (props: Props) => {
  return (
    <Grid container style={{ minWidth: '800px' }}>
      <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
        {props.fixtures.map((fixture, idx) => {
          return idx <= 3 && idx > 0 ? (
            <Link
              to={`/fixture/${fixture.fixture.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <CalendarTile fixture={fixture}></CalendarTile>
            </Link>
          ) : null;
        })}
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
        {props.fixtures.map((fixture, idx) => {
          return idx > 3 ? (
            <Link
              to={`/fixture/${fixture.fixture.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <CalendarTile fixture={fixture}></CalendarTile>
            </Link>
          ) : null;
        })}
      </Grid>{' '}
    </Grid>
  );
};

export default FutureFixturesGrid;
