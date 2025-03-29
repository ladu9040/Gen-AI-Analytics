# Gen AI Analytics 

A React-based dashboard prototype for natural language querying of analytics data. This project demonstrates a user interface for an AI-powered analytics tool that allows users to ask questions about their data in natural language and receive visualized responses.

## [Live Demo](https://gen-ai-analytics-73hf.vercel.app/)

## Features

- **Natural Language Query Interface**: Ask questions about your data in plain English
- **AI-Powered Query Suggestions**: Get intelligent suggestions as you type
- **Query History**: Access your recent queries for quick reference
- **Dynamic Data Visualization**: View results in appropriate chart formats (line, bar, pie)
- **Responsive Design**: Works on all device sizes

## Technical Implementation

### Technologies Used

- **React.js**: Frontend framework
- **Redux**: State management
- **Recharts**: Data visualization
- **Tailwind CSS**: Styling

### Architecture

The application follows a component-based architecture with Redux for state management:

- **Components**: Modular UI elements (QueryInput, QueryHistory, ResultsDisplay, etc.)
- **Redux Store**: Centralized state management
- **Mock Data Service**: Simulates backend API responses

### Key Components

1. **QueryInput**: Allows users to enter natural language queries with smart suggestions
2. **QueryHistory**: Displays recent queries and allows resubmission
3. **ResultsDisplay**: Shows query results with appropriate visualizations
4. **DataVisualization**: Renders different chart types based on data

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ladu9040/Gen-AI-Analytics.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open (http://localhost:3000) in your browser

## Usage Examples

The dashboard accepts various types of natural language queries. Try examples like:

- "Show me user engagement trends over the last 6 months"
- "Compare conversion rates across different user segments"
- "What's the distribution of users by platform?"
- "Analyze retention rates for Q1 2024"

## Deployment

This project is configured for easy deployment to platforms like Netlify or Vercel.

## Project Structure

```
src/
├── components/             # React components
│   ├── Dashboard.jsx       # Main dashboard layout
│   ├── QueryInput.jsx      # Query input with suggestions
│   ├── QueryHistory.jsx    # Recent queries list
│   ├── ResultsDisplay.jsx  # Results container
│   └── DataVisualization.jsx  # Chart components
├── redux/                  # Redux state management
│   ├── actions/            # Action creators
│   ├── reducers/           # State reducers
│   └── store.js            # Redux store configuration
├── utils/                  # Utility functions
│   ├── mockData.js         # Data generation utilities
│   └── queryProcessor.js   # Query processing simulation
└── App.js                  # Root component
```

## Future Improvements

- Integration with real backend API
- Enhanced natural language processing capabilities
- More visualization options
- User authentication and saved queries
- Exportable reports

## License

MIT
