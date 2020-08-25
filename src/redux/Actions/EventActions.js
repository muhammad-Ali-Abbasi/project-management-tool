export const filterEvent= dateId =>({
    type:'FILTEREVENT',
    payload:dateId
})

export const addEvent= newEvent =>({
    type:'CREATEEVENT',
    payload:{
        id: newEvent.id,
        eventname: newEvent.eventName,
    }
})
export const deleteEvent= id =>({
    type:'DELETEEVENT',
    payload: id
})
