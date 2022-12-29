import { Box, Typography } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 67 },
  { name: 'Group B', value: 33 }
];
const COLORS = ['#c6f5d3', 'transparent'];

const PlayerStatsChart = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          // minWidth: '100px',
          top: 87,
          left: 85,
          color: 'white',
          fontSize: 26
        }}
      >
        67%
      </div>
      <PieChart
        width={200}
        height={200}
        style={{ display: 'block', position: 'relative' }}
      >
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Typography>xd</Typography>
    </Box>
  );
};

export default PlayerStatsChart;
