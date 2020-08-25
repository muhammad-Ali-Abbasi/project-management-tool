
const initilastate ={
    currentactiveSprints:[
        {
        id: '325436577456',
        natures:"minor",
        activeSprintName:"hello", 
        startDate:"23/04/2012",
        endDate:"23/04/2030",
        description:"this is note a big activeSprint will fix in minutes",
        tags:[{id:"rtt656",value:"no poblem",label:"no problem"}]}]
    }
    const ActiveSprints =(state = initilastate,Action)=>{
        switch (Action.type) {
            case "CREATEACTIVESPRINT":
                return{
                    
                    currentactiveSprints: [...state.currentactiveSprints,Action.payload]
                }
                break;
                case "DELETEACTIVESPRINT":
                    const currentItems = [...state.currentactiveSprints]
                    const filteredItems = currentItems.filter((item)=> item.id !== Action.payload)
                    
                    return{
                        currentactiveSprints: filteredItems
                    }
                    break;
            
            default:
                return state
                break;
        }
    
    }
    
    export default ActiveSprints
    
    