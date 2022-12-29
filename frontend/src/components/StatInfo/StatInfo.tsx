import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

interface Props {
  attribute: string;
  value: string;
}

const attributeToMetric = new Map<string, string>([
  ['Age', ''],
  ['Height', 'cm'],
  ['Weight', 'kg']
]);

const StatBox = styled(Typography)<{ attribute: string }>`
  text-align: center;
  &:after {
    content: '${props => attributeToMetric.get(props.attribute)}';
    font-size: 32px;
  }
`;

const StatInfo = (props: Props) => {
  return (
    <Box style={{ margin: '40px 0 0 0' }}>
      <StatBox variant="h3" attribute={props.attribute}>
        {props.value}
      </StatBox>
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        {props.attribute}
      </Typography>
    </Box>
  );
};

export default StatInfo;
