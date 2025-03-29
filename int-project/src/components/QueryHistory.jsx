import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHistoryItem } from '../redux/actions/queryActions';

const QueryHistory = () => {
  const { queryHistory } = useSelector(state => state.query);
  const dispatch = useDispatch();

  if (queryHistory.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-medium mb-2">Recent Queries</h3>
        <p className="text-gray-500">No recent queries</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-medium mb-2">Recent Queries</h3>
      <div className="space-y-2">
        {queryHistory.map((query, index) => (
          <div
            key={index}
            className="py-2 px-3 bg-white rounded border border-gray-200 cursor-pointer hover:bg-gray-100 flex items-center"
            onClick={() => dispatch(selectHistoryItem(query))}
          >
            <span className="text-gray-600 truncate">{query}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryHistory;