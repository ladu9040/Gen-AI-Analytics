import {
    SUBMIT_QUERY,
    PROCESS_QUERY_START,
    PROCESS_QUERY_SUCCESS,
    PROCESS_QUERY_FAILURE,
    CLEAR_RESULTS,
    SELECT_HISTORY_ITEM,
    SUGGEST_QUERIES
  } from '../types';
  
  const initialState = {
    currentQuery: '',
    queryHistory: [],
    results: null,
    loading: false,
    error: null,
    suggestions: []
  };
  
  const queryReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_QUERY:
        return {
          ...state,
          currentQuery: action.payload,
          queryHistory: [
            action.payload,
            ...state.queryHistory.filter(q => q !== action.payload)
          ].slice(0, 10), // Keep only the 10 most recent queries
          suggestions: []
        };
      
      case PROCESS_QUERY_START:
        return {
          ...state,
          loading: true,
          error: null,
          results: null
        };
      
      case PROCESS_QUERY_SUCCESS:
        return {
          ...state,
          loading: false,
          results: action.payload
        };
      
      case PROCESS_QUERY_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      
      case CLEAR_RESULTS:
        return {
          ...state,
          results: null,
          error: null
        };
      
      case SELECT_HISTORY_ITEM:
        return {
          ...state,
          currentQuery: action.payload
        };
      
      case SUGGEST_QUERIES:
        return {
          ...state,
          suggestions: action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default queryReducer;