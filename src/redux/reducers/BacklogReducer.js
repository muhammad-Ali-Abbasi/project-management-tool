
const initilastate ={
    currentbacklogs:[
        {
        id: '325436577456',
        natures:"minor",
        backlogName:"backlog1",
        startDate:"23/04/2012",
        endDate:"23/04/2030",
        description:"this is note a big backlog will fix in minutes",
        tags:[{id:"rtt656",value:"no poblem",label:"no problem"}]}]
    
    }
    const Backlogs =(state = initilastate,Action)=>{
        switch (Action.type) {
            case "CREATEBACKLOG":
                return{
                    
                    currentbacklogs: [...state.currentbacklogs,Action.payload]
                }
                break;
                case "DELETEBACKLOG":
                    const currentItems = [...state.currentbacklogs]
                    const filteredItems = currentItems.filter((item)=> item.id !== Action.payload)
                    
                    return{
                        currentbacklogs: filteredItems
                    }
                    break;
            
            default:
                return state
                break;
        }
    
    }
    
    export default Backlogs
    
    