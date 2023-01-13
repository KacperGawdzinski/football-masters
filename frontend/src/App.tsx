import ResponsiveAppBar from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import { Box, Breadcrumbs, Container, styled, Typography } from '@mui/material';
import LeagueList from './components/League/LeagueList';
import LeagueTable from './components/League/LeagueTable';
import TeamPage from './components/Team/TeamPage';

const SiteContainer = styled(Box)({
  backgroundColor: '#77DD77',
  width: '100%',
  minWidth: '100vh',
  height: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed'
});

function App() {
  return (
    <SiteContainer>
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>

        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/player/:id" element={<PlayerProfile season={2020} />} />
          <Route path="/leagues" element={<LeagueList />} />
          <Route path="/leagues/:league_id" element={<LeagueTable />} />
          <Route path="/leagues/:league_id/:team_id" element={<TeamPage />} />

          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </SiteContainer>
  );
}

export default App;
