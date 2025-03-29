import React from 'react';
import { useSelector } from 'react-redux';
import LoadingIndicator from './LoadingIndicator';
import ErrorDisplay from './ErrorDisplay';
import DataVisualization from './DataVisualization';

const ResultsDisplay = () => {
  const { results, loading, error } = useSelector(state => state.query);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (!results) {
    return (
      <div className="bg-gray-50 rounded-lg p-12 text-center">
        <h3 className="text-xl text-gray-600 mb-2">No Results</h3>
        <p className="text-gray-500">Enter a query to analyze your data</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="mb-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
        <h3 className="text-lg font-medium">Query</h3>
        <p className="text-gray-700">{results.query}</p>
      </div>
      <DataVisualization data={results} />
    </div>
  );
};

export default ResultsDisplay;