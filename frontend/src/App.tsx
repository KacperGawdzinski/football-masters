import ResponsiveAppBar from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import { Box, styled, Typography } from '@mui/material';
import LeagueList from './components/League/LeagueList';
import LeagueTable from './components/League/LeagueTable';
import TeamPage from './components/Team/TeamPage';
import Calendar from './components/Calendar/Calendar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Home from './components/Home';

const SiteContainer = styled(Box)({
  backgroundColor: '#77DD77',
  width: '100%',
  minWidth: '100vh',
  height: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
});
//#bfcbc1

function App() {
  return (
    <SiteContainer>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/player/:id" element={<PlayerProfile season={2020} />} />
          <Route path="/leagues" element={<LeagueList />} />
          <Route path="/leagues/:league_id" element={<LeagueTable />} />
          <Route path="/leagues/:league_id/:team_id" element={<TeamPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
        <Box style={{ minHeight: '100px', marginTop: '20px' }}>
          <div
            style={{
              backgroundImage: `url(/logo4black.png)`,
              height: '45px',
              width: '200px',
              backgroundSize: '100% 100%',
              margin: '0 auto 0px auto',
              color: 'black'
            }}
          />
          <Box textAlign={'center'} style={{ margin: '5px 0' }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
          <Typography align="center">
            ® 2023 Football Masters. All rights reserved
          </Typography>
        </Box>
      </BrowserRouter>
    </SiteContainer>
  );
}

export default App;
