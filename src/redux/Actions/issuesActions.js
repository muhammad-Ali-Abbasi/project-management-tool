export const setIssue=issue=>({
    type:'CREATEISSUE',
    payload:issue
})
export const deleteIssue=issueid=>({
    type:'DELETEISSUE',
    payload:issueid
})