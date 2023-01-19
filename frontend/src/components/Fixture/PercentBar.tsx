import { Box, Typography } from '@mui/material';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

interface Props {
  stat: string;
  homePercent: string;
  awayPercent: string;
}

const statNameToOriginal = new Map<string, string>([
  ['form', 'Form'],
  ['att', 'Attack'],
  ['def', 'Defense'],
  ['total', 'Total']
]);

const PercentBar = (props: Props) => {
  const percentNumberHome = parseInt(
    props.homePercent.substring(0, props.homePercent.length - 1)
  );
  const percentNumberAway = parseInt(
    props.awayPercent.substring(0, props.awayPercent.length - 1)
  );

  const homeColor =
    percentNumberHome >= 50
      ? 'green'
      : percentNumberHome < 20
      ? 'red'
      : 'yellow';
  const awayColor =
    percentNumberAway > 50
      ? 'green'
      : percentNumberAway < 20
      ? 'red'
      : 'yellow';

  return (
    <Box>
      <Typography variant="h6">{statNameToOriginal.get(props.stat)}</Typography>
      <Box style={{ display: 'flex' }}>
        <Box
          style={{
            minWidth: props.homePercent,
            backgroundColor: homeColor,
            minHeight: '30px',
            borderRadius: '10px 0 0 10px'
          }}
        ></Box>
        <Box
          style={{
            minWidth: props.awayPercent,
            backgroundColor: awayColor,
            minHeight: '30px',
            borderRadius: '0 10px 10px 0'
          }}
        >
          &nbsp;
        </Box>
      </Box>
    </Box>
  );
};

export default PercentBar;
