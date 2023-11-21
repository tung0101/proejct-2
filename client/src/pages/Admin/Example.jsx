import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
const data = [
  {
    name: '1',
    uv: 0,
  },
  {
    name: '2',
    uv: 10,
  },
  {
    name: '3',
    uv: 20,
  },
  {
    name: '4',
    uv: 30,
  },
  {
    name: '5',
    uv: 41,
  },
  {
    name: '6',
    uv: 60,
  },
  {
    name: '7',
    uv: 38,
  },
  {
    name: '8',
    uv: 90,
  },
  {
    name: '9',
    uv: 70,
  },
  {
    name: '10',
    uv: 76,
  },
  {
    name: '11',
    uv: 87,
  },
  {
    name: '12',
    uv: 100,
  },
];
export default class Example extends PureComponent {
  chart = () => (
    <ResponsiveContainer height={500} width="100%">
      <AreaChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="black" tick={{ fill: 'black'}}  />
        <YAxis ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} stroke="black" 
          tick={{ fill: 'black' }}/>
        <Area type="monotone"
          dataKey="uv"
          stroke="#FAA392"
          fill="#FAA392"
          strokeWidth={3}
          fillOpacity={0.3}
          dot={{ stroke: '#FAA392', fill: 'black' }} />
        {/* <Scatter data={data} dataKey="uv" fill="blue" /> */}
      </AreaChart>
    </ResponsiveContainer>
  );

  render() {
    return (
      <>
        {this.chart()}
      </>
    );
  }
}