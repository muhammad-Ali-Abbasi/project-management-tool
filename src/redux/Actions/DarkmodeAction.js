import darkmode from "../reducers/DarkmodeReducer";

export const toggleDarkmode =darkmode=>({
    type:'TOGGLEMODE',
    payload: darkmode
})