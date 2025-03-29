import { generateMockData } from './mockData';

export const processQueryData = (query) => {
  if (!query || query.trim() === '') {
    throw new Error('Empty query provided');
  }
  
  // Mock query processing logic
  const cleanQuery = query.trim().toLowerCase();
  
  // Simulate query validation
  if (cleanQuery.length < 5) {
    throw new Error('Query too short. Please provide more details.');
  }
  
  if (cleanQuery.includes('error')) {
    throw new Error('Error processing query: Invalid parameters');
  }
  
  // Generate mock response data
  const responseData = generateMockData(cleanQuery);
  
  // Add metadata
  return {
    query: query,
    timestamp: new Date().toISOString(),
    executionTimeMs: Math.floor(Math.random() * 1500) + 500,
    resultCount: responseData.data.length,
    data: responseData
  };
};