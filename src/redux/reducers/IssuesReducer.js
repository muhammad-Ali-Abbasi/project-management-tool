
const initilastate ={
currentissues:[
    {
    id: '325436577456',
    natures:"minor",
    issueName:"fonts problem",
    startDate:"23/04/2012",
    endDate:"23/04/2030",
    description:"this is note a big issue will fix in minutes",
    tags:[{id:"rtt656",value:"no poblem",label:"no problem"}]}]

}
const Issues =(state = initilastate,Action)=>{
    switch (Action.type) {
        case "CREATEISSUE":
            return{
                
                currentissues: [...state.currentissues,Action.payload]
            }
            break;
            case "DELETEISSUE":
                const currentItems = [...state.currentissues]
                const filteredItems = currentItems.filter((item)=> item.id !== Action.payload)
                
                return{
                    currentissues: filteredItems
                }
                break;
        
        default:
            return state
            break;
    }

}

export default Issues

