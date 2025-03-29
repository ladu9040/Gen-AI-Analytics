import { combineReducers } from '@reduxjs/toolkit';
import queryReducer from './queryReducer';

export default combineReducers({
  query: queryReducer
});