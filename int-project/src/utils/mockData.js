export const generateMockData = (query) => {
    // Extract potential timeframe from query
    const timeframeMatch = query.match(/last\s+(\d+)\s+(day|week|month|year)s?/i);
    const timeValue = timeframeMatch ? parseInt(timeframeMatch[1]) : 6;
    
    // Determine the data type based on query content
    let dataType = 'barChart';
    if (query.toLowerCase().includes('trend') || query.toLowerCase().includes('over time')) {
      dataType = 'lineChart';
    } else if (query.toLowerCase().includes('distribution') || query.toLowerCase().includes('breakdown')) {
      dataType = 'pieChart';
    } else if (query.toLowerCase().includes('compare')) {
      dataType = 'barChart';
    }
    
    // Generate data based on the determined type
    switch (dataType) {
      case 'lineChart':
        return generateLineChartData(timeValue);
      case 'barChart':
        return generateBarChartData(timeValue);
      case 'pieChart':
        return generatePieChartData();
      default:
        return generateLineChartData(timeValue);
    }
  };
  
  const generateLineChartData = (periods) => {
    const data = [];
    const baseValue = Math.floor(Math.random() * 1000) + 500;
    
    for (let i = 0; i < periods; i++) {
      const value = baseValue + Math.floor(Math.random() * 200) - 100;
      data.push({
        name: `Period ${i + 1}`,
        value: value > 0 ? value : baseValue
      });
    }
    
    return {
      type: 'lineChart',
      title: 'Trend Analysis',
      data
    };
  };
  
  const generateBarChartData = (categories) => {
    const data = [];
    
    for (let i = 0; i < categories; i++) {
      data.push({
        name: `Category ${i + 1}`,
        value: Math.floor(Math.random() * 1000) + 100
      });
    }
    
    return {
      type: 'barChart',
      title: 'Comparative Analysis',
      data
    };
  };
  
  const generatePieChartData = () => {
    const segments = Math.floor(Math.random() * 3) + 4; // 4-6 segments
    const data = [];
    let total = 0;
    
    // Generate random values first
    for (let i = 0; i < segments; i++) {
      const value = Math.floor(Math.random() * 100) + 20;
      data.push({ value });
      total += value;
    }
    
    // Normalize to percentages
    data.forEach((item, index) => {
      item.name = `Segment ${index + 1}`;
      item.percentage = Math.round((item.value / total) * 100);
    });
    
    return {
      type: 'pieChart',
      title: 'Distribution Analysis',
      data
    };
  };