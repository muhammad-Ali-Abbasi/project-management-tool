import {combineReducers} from 'redux'
import issues from "./IssuesReducer"
import backlogs from "./BacklogReducer"
import Events from "./EventReducer"
import activeSprints from "./ActiveSprintReducer"
import darkmode from "./DarkmodeReducer"
import Auth from "./AuthReducer"
export default combineReducers({
    issues: issues,
    activeSprints:activeSprints,
    Events: Events,
    darkmode: darkmode,
    backlogs:backlogs,
    Auth:Auth
})