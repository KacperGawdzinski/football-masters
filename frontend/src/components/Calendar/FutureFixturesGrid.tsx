import { Grid } from '@mui/material';
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
            <CalendarTile fixture={fixture}></CalendarTile>
          ) : null;
        })}
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
        {props.fixtures.map((fixture, idx) => {
          return idx > 3 ? (
            <CalendarTile fixture={fixture}></CalendarTile>
          ) : null;
        })}
      </Grid>{' '}
    </Grid>
  );
};

export default FutureFixturesGrid;
