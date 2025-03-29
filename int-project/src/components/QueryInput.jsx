import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuery, suggestQueries } from '../redux/actions/queryActions';

const QueryInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { suggestions } = useSelector(state => state.query);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length > 2) {
      dispatch(suggestQueries(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(submitQuery(inputValue.trim()));
      setInputValue('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    dispatch(submitQuery(suggestion));
    setInputValue('');
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder="Ask a question about your data..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="absolute right-2 top-[10px] bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition cursor-pointer"
        >
          Query
        </button>
      </form>
      
      {suggestions.length > 0 && inputValue && (
        <div className="mt-1 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueryInput;