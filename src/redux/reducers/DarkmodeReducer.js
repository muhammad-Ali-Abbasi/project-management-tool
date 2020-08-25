
const initilastate ={
    darkmode: JSON.parse(localStorage.getItem('darkmode'))
    
    }
    const darkmode =(state = initilastate,Action)=>{
        switch (Action.type) {
            case "TOGGLEMODE":
                return {
                    ...state,
                    darkmode: !Action.payload
                }
            break;

            default:
                return state
                break;
        }
    
    }
    
    export default darkmode
    
    