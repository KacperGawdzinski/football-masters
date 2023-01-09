import ResponsiveAppBar from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import { Box, Container, styled } from '@mui/material';
import LeagueList from './components/League/LeagueList';
import LeagueTable from './components/League/LeagueTable';

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
        <Container className="glass">
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route
              path="/h2h"
              element={<PlayerProfile playerId={274} season={2020} />}
            />
            <Route path="/leagues" element={<LeagueList />} />
            <Route path="/leagues/:id" element={<LeagueTable />} />

            {/* <Route path="*" element={<NoPage />} /> */}
            {/* </Route> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </SiteContainer>
  );
}

export default App;
