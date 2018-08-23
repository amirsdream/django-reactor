import { combineReducers } from 'redux';
import notes from "./notes";


const stickyApp = combineReducers({
  notes,
})

export default stickyApp;