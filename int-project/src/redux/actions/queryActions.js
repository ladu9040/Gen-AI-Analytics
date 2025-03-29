import {
    SUBMIT_QUERY,
    PROCESS_QUERY_START,
    PROCESS_QUERY_SUCCESS,
    PROCESS_QUERY_FAILURE,
    CLEAR_RESULTS,
    SELECT_HISTORY_ITEM,
    SUGGEST_QUERIES
  } from '../types';
  import { processQueryData } from '../../utils/queryProcessor';
  
  export const submitQuery = (query) => (dispatch) => {
    dispatch({ type: SUBMIT_QUERY, payload: query });
    dispatch({ type: PROCESS_QUERY_START });
    
    // Simulate API call with timeout
    setTimeout(() => {
      try {
        const results = processQueryData(query);
        dispatch({ 
          type: PROCESS_QUERY_SUCCESS, 
          payload: results 
        });
      } catch (error) {
        dispatch({ 
          type: PROCESS_QUERY_FAILURE, 
          payload: error.message 
        });
      }
    }, 1500); // Simulate processing time
  };
  
  export const clearResults = () => ({
    type: CLEAR_RESULTS
  });
  
  export const selectHistoryItem = (query) => (dispatch) => {
    dispatch({ type: SELECT_HISTORY_ITEM, payload: query });
    dispatch(submitQuery(query));
  };
  
  export const suggestQueries = (inputText) => {
    // Mock AI suggestions based on input text
    const suggestions = [
      "Show monthly user engagement for 2024",
      "Compare conversion rates between desktop and mobile",
      "Analyze retention rates across user segments",
      "Visualize key performance metrics for Q1",
      "Generate report on user behavior patterns"
    ].filter(suggestion => 
      suggestion.toLowerCase().includes(inputText.toLowerCase())
    );
    
    return {
      type: SUGGEST_QUERIES,
      payload: suggestions
    };
  };