import React from 'react'
import { Tooltip,Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

/**
 *
<PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
 */
export const Pichart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' , '#FFE042' , '#FF844E' , '#FF3052' , '#FF8172']
  const RADIAN = Math.PI / 180
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={450} height={300}>
      <Tooltip />

      <Pie
          data={data.filter(({regValue}) => regValue>1)}
          nameKey="name"
          dataKey="regValue"
          cx="60%"
          cy="50%"
          startAngle={0}
          endAngle={210}
          innerRadius="30%"
          outerRadius="45%"
          fill="#8884d8"
          paddingAngle={5}
          label
        >
        	{
          	data.filter(({regValue}) => regValue>1).map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
