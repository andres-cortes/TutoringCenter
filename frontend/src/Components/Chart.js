import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Stats from './Stats'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('10:00 AM', 1),
  createData('11:00 AM', 4),
  createData('12:00 PM', 6),
  createData('1:00 PM', 2),
  createData('2:00 PM', 9),
  createData('3:00 PM', 12),
  createData('4:00 PM', 9),
  createData('5:00 PM', 6),
  createData('6:00 PM', 3),
  createData('7:00 PM', 3),
  createData('8:00 PM', 2),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      {Stats()}
      {/*<ResponsiveContainer>
        
        
        <LineChart
          data={data}
          margin={{
            top: 15,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Students
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
        {Stats()}


      </ResponsiveContainer>*/}
    </React.Fragment>
  );
}
