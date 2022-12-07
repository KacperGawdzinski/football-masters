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
            color: 'white',
            width: '80%'
          }}
        >
          {' '}
          <img
            src={'https://media.api-sports.io/football/players/276.png'}
            style={{ borderRadius: 10 }}
          />
          <Typography
            variant="h1"
            sx={{ alignSelf: 'center', margin: '0px 100px' }}
          >
            Neymar
          </Typography>
          <img
            src={'https://media.api-sports.io/football/players/276.png'}
            style={{ borderRadius: 10 }}
          />
        </Box>
        <Box sx={{ mt: '30px' }}>
          <Typography>name</Typography>
          <Typography>surname</Typography>
          <Typography>age</Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              minWidth: '100px',
              top: 190,
              left: 106,
              color: 'white',
              fontSize: 26
            }}
          >
            67%
          </div>
          <PieChart width={800} height={400}>
            <Pie
              data={data}
              cx={120}
              cy={200}
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
      </Container>
    </div>
  );
}

export default App;
