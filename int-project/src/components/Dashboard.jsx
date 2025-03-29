import React from 'react';
import QueryInput from './QueryInput';
import QueryHistory from './QueryHistory';
import ResultsDisplay from './ResultsDisplay';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Gen AI Analytics Dashboard</h1>
          <p className="text-gray-600">Ask natural language questions about your data</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <QueryHistory />
          </div>
          
          <div className="lg:col-span-3">
            <QueryInput />
            <ResultsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;