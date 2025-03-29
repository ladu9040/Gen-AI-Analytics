import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const DataVisualization = ({ data }) => {
  if (!data || !data.data) {
    return <div>No visualization data available</div>;
  }
  
  const { type, title, data: chartData } = data.data;
  
  if (!chartData || chartData.length === 0) {
    return <div>Chart data is empty or invalid</div>;
  }

  const renderChart = () => {
    switch (type) {
      case 'lineChart':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
     
      case 'barChart':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );
     
      case 'pieChart':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                // Fixed label function
                label={({name, value, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
     
      default:
        return <div>Unsupported chart type</div>;
    }
  };

//   console.log('Chart type:', type);
//   console.log('Chart data:', chartData);
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      {renderChart()}
      <div className="mt-4 text-sm text-gray-500">
        <p>Query execution time: {data.executionTimeMs}ms</p>
        <p>Result count: {data.resultCount} data points</p>
      </div>
    </div>
  );
};

export default DataVisualization;