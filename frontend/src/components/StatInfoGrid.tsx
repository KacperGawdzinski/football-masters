import { Grid } from '@mui/material';
import Stat from '../dataTypes/Stat';
import StatInfo from './StatInfo/StatInfo';

interface Props {
  statistics: Stat[];
}

const StatInfoGrid = (props: Props) => {
  return (
    <Grid
      container
      justifyContent={'space-around'}
      style={{ marginTop: '70px' }}
    >
      {props.statistics.map(stat => (
        <Grid item key={stat.attribute}>
          <StatInfo value={stat.value} attribute={stat.attribute}></StatInfo>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatInfoGrid;
