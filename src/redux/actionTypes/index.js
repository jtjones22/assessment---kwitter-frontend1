const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

//auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");

//users
export const GETUSER = createActionTypes("GETUSER")
export const GETUSERS = createActionTypes("GETUSERS")

export const POSTUSER = createActionTypes("POSTUSER")
export const DELETEUSER = createActionTypes("DELETEUSER")
export const PATCHUSER = createActionTypes("PATCHUSER")
export const PUTPICTURE = createActionTypes("PUTPICTURE")



//messages
export const GETUSERMESSAGES = createActionTypes("GETUSERMESSAGES")
export const GETGLOBALMESSAGES = createActionTypes("GETGLOBALMESSAGES")
export const DELETEMESSAGE = createActionTypes("DELETEMESSAGE")
export const POSTMESSAGE = createActionTypes("POSTMESSAGE")




//likes
export const POSTLIKE = createActionTypes("POSTLIKE")
export const DELETELIKE = createActionTypes("DELETELIKE")
