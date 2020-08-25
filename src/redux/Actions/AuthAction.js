export const SignupHandler =user=>({
    type:"AUTHENTICATEUSER",
    payload: user
})
export const deleteuser =()=>({
    type: "REMOVEEUSER"
})
export const deleteusername =()=>({
    type: "REMOVEEUSERNAME"
})
export const setusername =username=>({
    type: "SETUSERNAME",
    payload: username
})
