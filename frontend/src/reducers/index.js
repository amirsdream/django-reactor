import { combineReducers } from 'redux';
import notes from "./notes";
import auth from "./auth";


const stickyApp = combineReducers({
  notes, auth,
})

export default stickyApp;