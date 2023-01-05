import { Grid } from '@mui/material';
import Stat from '../dataTypes/Stat';
import StatInfo from './StatInfo/StatInfo';

interface Props {
  statistics: Stat[];
}

const StatInfoGrid = (props: Props) => {
  return (
    // <Grid item style={{ marginTop: '20px' }}>
    <Grid
      container
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {props.statistics.map(stat => (
        <Grid item key={stat.attribute} sx={{ width: '140px' }}>
          <StatInfo value={stat.value} attribute={stat.attribute}></StatInfo>
        </Grid>
      ))}
    </Grid>
    // </Grid>
  );
};

export default StatInfoGrid;
