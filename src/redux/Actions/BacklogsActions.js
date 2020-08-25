export const setBacklog=backlog=>({
    type:'CREATEBACKLOG',
    payload:backlog
})
export const deleteBacklog=backlogid=>({
    type:'DELETEBACKLOG',
    payload:backlogid
})