import { Grid } from '@mui/material';
import Stat from '../../dataTypes/Stat';
import StatInfo from './StatInfo';

interface Props {
  statistics: Stat[];
}

const StatInfoGrid = (props: Props) => {
  return (
    <Grid
      container
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      {props.statistics.map(stat => (
        <Grid item key={stat.attribute} sx={{ width: '140px' }}>
          <StatInfo value={stat.value} attribute={stat.attribute}></StatInfo>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatInfoGrid;
