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
export const DELETEUSER = createActionTypes("DELETEUSER")
export const CREATEUSER = createActionTypes("CREATEUSER")
export const UPDATEUSER = createActionTypes("UPDATEUSER")

//messages
export const GETUSERMESSAGES = createActionTypes("GETUSERMESSAGES")
export const GETGLOBALMESSAGES = createActionTypes("GETGLOBALMESSAGES")

//likes
export const ADDLIKE = createActionTypes("ADDLIKE")
export const REMOVELIKE = createActionTypes("REMOVELIKE")
