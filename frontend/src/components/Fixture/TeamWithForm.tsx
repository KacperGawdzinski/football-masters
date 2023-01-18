import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CancelIcon from '@mui/icons-material/Cancel';
import Predictions from '../../dataTypes/Predictions';
import { Link } from 'react-router-dom';

interface Props {
  data: Predictions;
  home: boolean;
}

const mapFormToIcons = (form: string) => {
  const length = form.length;
  if (!length) return null;

  const maxLength = Math.min(form.length, 5);

  return form
    .substring(0, maxLength)
    .split('')
    .map((letter, idx) => {
      if (letter === 'W') {
        return <CheckCircleIcon key={idx} htmlColor="green" />;
      } else if (letter === 'L') {
        return <CancelIcon key={idx} htmlColor="#E25B49" />;
      } else {
        return <DoDisturbOnIcon key={idx} htmlColor="#FFF300" />;
      }
    });
};

const TeamWithForm = ({ data, home }: Props) => {
  const team = home ? data.teams.home : data.teams.away;

  return (
    <Box>
      <Link
        to={`/leagues/${data.league.id}/${team.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img src={team.logo} width={150}></img>
          <Typography variant="h4" align="center">
            {team.name}
          </Typography>
        </Box>
      </Link>
      <Typography
        variant="h5"
        align="center"
        style={{ marginTop: '30px', marginBottom: '10px' }}
      >
        Form
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
        {mapFormToIcons(team.league.form)}
      </Box>
    </Box>
  );
};

export default TeamWithForm;
