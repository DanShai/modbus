import React from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

export const Radchart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart
        outerRadius="72%"
        iuterRadius="100%"
        width={450}
        height={300}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="RegValue"
          dataKey="regValue"
          stroke="#1E90FF"
          fill="#1E90FF"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
