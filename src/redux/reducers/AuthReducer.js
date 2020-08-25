

const initilastate ={
    user: localStorage.getItem("projeeauthkey")?localStorage.getItem("projeeauthkey"):null,
    userName: localStorage.getItem("projeeuser")?localStorage.getItem("projeeuser"):"anonymous"
    }
    const Auth =(state = initilastate,Action)=>{
        switch (Action.type) {
            case "AUTHENTICATEUSER":
                localStorage.setItem("projeeauthkey",Action.payload)
                return{
                    ...state,
                    user: localStorage.getItem("projeeauthkey")
                }
            break;
            case "REMOVEEUSER":
                localStorage.removeItem("projeeauthkey")
                return{user:null}

            break;
            case "SETUSERNAME":
                localStorage.setItem("projeeuser",Action.payload)
                return{
                    ...state,
                    userName: localStorage.getItem("projeeuser")
                }
            break;
            case "REMOVEEUSERNAME":
                localStorage.removeItem("projeeuser")
                return{userName: "anonymous"}
            break;
            default:
                return state
                break;
        }
    
    }
    
    export default Auth
    
    