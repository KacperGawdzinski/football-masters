import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';

interface Props {
  player: {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
  };
}

const PlayerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  ':hover': {
    transform: 'scale(1.05)',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer'
  }
});

const PlayerTile = (props: Props) => {
  const nameWords = props.player.name.split(' ');
  if (nameWords.length > 2) {
    props.player.name = `${nameWords[0]} ${nameWords[nameWords.length - 1]}`;
  }

  return (
    <Link to={`/player/${props.player.id}`} style={{ textDecoration: 'none' }}>
      <PlayerBox>
        <Typography variant="h6" style={{ textAlign: 'center' }}>
          {props.player.name}
        </Typography>

        <img
          src={props.player.photo}
          draggable={false}
          style={{ borderRadius: '10px', width: '90%', height: '90%' }}
        ></img>
        <Typography variant="h6" style={{ textAlign: 'center' }}>
          {props.player.number}
        </Typography>
      </PlayerBox>
    </Link>
  );
};

export default PlayerTile;
