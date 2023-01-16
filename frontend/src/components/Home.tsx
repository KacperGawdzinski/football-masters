import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const Home = () => {
  return (
    <Container className="glass">
      <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Typography color="text.primary">Home</Typography>
        </Breadcrumbs>
        <div
          style={{
            backgroundImage: `url(/logo4black.png)`,
            height: '87px',
            width: '400px',
            backgroundSize: '100% 100%',
            margin: '0 auto 30px auto',
            color: 'black'
          }}
        />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            gap: '20px'
          }}
        >
          <div
            style={{
              backgroundImage: `url(/messi-ronaldo.png)`,
              height: '400px',
              width: '360px',
              backgroundSize: '100% 100%'
            }}
          />
          <Box style={{ maxWidth: '500px', margin: 'auto 0' }}>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Introducing a new football stats site with everything you need to
              know about your favorite teams and players
            </Typography>
            {/* <Typography>
            Advanced metrics, real-time updates, and easy-to-use search and
            visualization tools. The go-to destination for any football fan.
          </Typography> */}
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: 'auto',
            marginTop: '50px',
            gap: '20px'
          }}
        >
          <Box style={{ maxWidth: '500px', margin: 'auto 0' }}>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Our new football statistics site offers in-depth league, player,
              and team data, with advanced metrics, real-time updates
            </Typography>
            {/* <Typography>
            Advanced metrics, real-time updates, and easy-to-use search and
            visualization tools. The go-to destination for any football fan.
          </Typography> */}
          </Box>
          <div
            style={{
              backgroundImage: `url(/ball.png)`,
              height: '360px',
              width: '400px',
              backgroundSize: '100% 100%'
            }}
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: 'auto',
            marginTop: '50px',
            gap: '20px'
          }}
        >
          <div
            style={{
              backgroundImage: `url(/calendar.png)`,
              height: '360px',
              width: '400px',
              backgroundSize: '100% 100%'
            }}
          />
          <Box style={{ maxWidth: '500px', margin: 'auto 0' }}>
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              It includes an interactive calendar of fixtures, where users can
              keep track of upcoming matches and never miss a game again
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
