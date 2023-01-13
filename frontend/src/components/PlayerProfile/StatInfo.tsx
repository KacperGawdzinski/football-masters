import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

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
    font-size: 30px;
  }
`;

const StatInfo = (props: Props) => {
  const index = props.value.search(/[A-Za-z]/);

  return (
    <Box style={{ margin: '00px 0 0 0' }}>
      <StatBox variant="h3" attribute={capitalizeFirstLetter(props.attribute)}>
        {index === -1 ? props.value : props.value.substring(0, index)}
      </StatBox>
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        {capitalizeFirstLetter(props.attribute)}
      </Typography>
    </Box>
  );
};

export default StatInfo;
