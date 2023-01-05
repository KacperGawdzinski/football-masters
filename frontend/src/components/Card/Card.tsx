import { Box, Typography } from '@mui/material';

interface Props {
  type: string;
  amount: number;
}

const Card = (props: Props) => {
  return (
    <Box>
      <img src={`./${props.type}.png`} width={50} />
      <Typography variant="h5">{props.amount}</Typography>
    </Box>
  );
};

export default Card;
