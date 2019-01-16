import HomeReducer from './HomeReducer';
import TrendingReducer from './TrendingReducer';
import RandomReducer from './RandomReducer';
import GIFDetailsReducer from './GIFDetailsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  HomeReducer,
  TrendingReducer,
  RandomReducer,
  GIFDetailsReducer,
});
