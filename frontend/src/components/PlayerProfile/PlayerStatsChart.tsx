import { Box, Typography } from '@mui/material';
import { Cell, Pie, PieChart } from 'recharts';

const COLORS = ['#ECF87F', '#f5fcae'];

interface Props {
  attribute: string;
  value: number;
}

const PlayerStatsChart = (props: Props) => {
  const data = [
    { name: 'Group A', value: props.value },
    { name: 'Group B', value: 100 - props.value }
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          // minWidth: '100px',
          top: 87,
          left: props.value === 100 ? 'calc(50% - 22px)' : 'calc(50% - 14px)',
          fontSize: 26,
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        {`${props.value}%`}
      </div>
      <PieChart
        width={200}
        height={200}
        style={{ display: 'block', position: 'relative', margin: 'auto' }}
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
      <Typography
        style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}
      >
        {props.attribute}
      </Typography>
    </Box>
  );
};

export default PlayerStatsChart;
