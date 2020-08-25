
const initilastate ={
    events:[
        {
            id:1
            ,eventname:"alin jone"
    },
    {
        id:2
        ,eventname:"Wali Shan",
    },
    {
        id:"2-5-2020"
        ,eventname:"alin Shan",
    },
    {
        id:"7-5-2020"
        ,eventname:"hrev",
    }
    
    ],
    filteredEvents: null
}
    const Events =(state = initilastate,Action)=>{
        switch (Action.type) {

        case "FILTEREVENT":
           let current = [...state.events]
            let filtered =  current.filter(item=> item.id == Action.payload)
                return{
                    events: state.events,
                    filteredEvents: filtered
                }
                
            break;

        case "CREATEEVENT":
                
        return {
            filteredEvents: state.filteredEvents,
            events: [...state.events,Action.payload]
        }
            break;
        case "DELETEEVENT":
                  const currentEvents = [...state.events] 
                  const restevents = currentEvents.filter((item)=> item.id !== Action.payload)
                  return{
                    filteredEvents: state.filteredEvents,
                    events: restevents
                  }
            break;
            
            default:
                return state
                break;
        }
    
    }
    
    export default Events
    
    