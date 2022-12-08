import React from 'react';
import ResponsiveAppBar from './components/Header';
import axios from 'axios';
import { fetchNewsDefaultParams } from './api/newsapi';
import { settings } from './api/apiFootball';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// const x = async () => {
//   const y = await axios.get(
//     'http://eventregistry.org/api/v1/article/getArticles',
//     { data: fetchNewsDefaultParams }
//   );
//   console.log(y);
// };
// x();

// const z = async () => {
//   const y = await axios(settings);
//   console.log(y);
// };
// z();

const data = [
  { name: 'Group A', value: 67 },
  { name: 'Group B', value: 33 }
];
const COLORS = ['#c6f5d3', 'transparent'];
function App() {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(53,98,33,1) 0%, rgba(20,203,59,1) 65%, rgba(63,116,30,1) 100%)',
        width: '100vw',
        height: '100vh'
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container className="glass" sx={{ mt: '80px', minWidth: '80%' }}>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: 'flex',
              md: 'flex'
            },
            justifyContent: 'center',
            margin: '30px auto 0 auto',
            color: 'white'
          }}
        >
          <Box
            sx={{
              width: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left'
            }}
          >
            <img
              src={'https://media.api-sports.io/football/players/276.png'}
              style={{ borderRadius: 10 }}
            />
          </Box>
          <Box>
            <Typography variant="h1">Neymar</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              da Silva Santos Júnior
            </Typography>
          </Box>
          <Box
            sx={{
              width: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
              gap: '20px'
            }}
          >
            <img
              src={'https://media.api-sports.io/football/teams/85.png'}
              style={{ borderRadius: 10 }}
            />
            <img
              src={'https://media.api-sports.io/football/leagues/61.png'}
              style={{ borderRadius: 10 }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', color: 'white' }}>
          <Box
            sx={{
              mt: '50px',
              position: 'relative',
              display: 'flex',
              gap: '40px'
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                28
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Age
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                175cm
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Height
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                68kg
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Weight
              </Typography>
            </Box>
          </Box>

          <Box sx={{ position: 'relative', margin: '0 auto' }}>
            <div
              style={{
                position: 'absolute',
                minWidth: '100px',
                top: 90,
                left: 87,
                color: 'white',
                fontSize: 26
              }}
            >
              67%
            </div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    stroke="transparent"
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Pie
                data={data}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Box>
          <Box
            sx={{
              mt: '50px',
              position: 'relative',
              display: 'flex',
              gap: '40px'
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                28
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Age
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                175cm
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Height
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                68kg
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Weight
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
