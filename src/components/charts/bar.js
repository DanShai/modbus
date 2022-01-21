import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

export const Bachart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={450}
        height={300}
        data={data}
        outerRadius="75%"
        iuterRadius="100%"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" hide={false} />
        <YAxis
          type="number"
          domain={[dataMin => -1 * Math.abs(dataMin), dataMax => dataMax * 1]}
          hide={true}
        />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#1E90FF" />
        <ReferenceLine x={0} stroke="#FFF" />
        <Bar dataKey="regValue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
