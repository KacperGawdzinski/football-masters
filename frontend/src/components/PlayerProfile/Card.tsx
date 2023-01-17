import { Box, Typography } from '@mui/material';

interface Props {
  type: string;
  amount: number;
}

const Card = (props: Props) => {
  return (
    <Box>
      <div
        style={{
          backgroundImage: `url(/${props.type}.png)`,
          height: '50px',
          width: '50px',
          backgroundSize: '100% 100%',
          margin: '0 auto 0px auto',
          color: 'black'
        }}
      />
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        {props.amount}
      </Typography>
    </Box>
  );
};

export default Card;
