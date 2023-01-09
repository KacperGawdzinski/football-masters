import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const LeagueWrapper = styled(Box)({
  display: 'flex',
  gap: '15px',
  justifyContent: 'left',
  alignItems: 'center',
  marginTop: '50px'
});

const LeagueImage = styled('img')({
  maxWidth: '100px',
  height: 'auto'
});

interface Props {
  leagueImageLink: string;
  teamImageLink: string;
  leagueName: string;
}

const LeagueHeader = (props: Props) => {
  return (
    <LeagueWrapper>
      <Box>
        <LeagueImage src={props.leagueImageLink} />
      </Box>
      <Box>
        <LeagueImage src={props.teamImageLink} />
      </Box>
      <Typography variant="h3">{props.leagueName}</Typography>
    </LeagueWrapper>
  );
};

export default LeagueHeader;
