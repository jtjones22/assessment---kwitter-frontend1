import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETGLOBALMESSAGES, GETUSERMESSAGES, DELETEMESSAGE } from "../actionTypes";

const url = domain + "/messages";

export const getUserMessages = username => dispatch => {
  dispatch({
    type: GETUSERMESSAGES.START
  });

  return fetch(`${url}?username=${username}`, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSERMESSAGES.SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSERMESSAGES.FAIL, payload: err }));
    });
};

export const getGlobalMessages = () => dispatch => {
  dispatch({
    type: GETGLOBALMESSAGES.START
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETGLOBALMESSAGES.SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETGLOBALMESSAGES.FAIL, payload: err }));
    });
};

export const _deleteMessage = messageId => (dispatch, getState) => {
  dispatch({
    type: DELETEMESSAGE.START
  });

  const token = getState().auth.login.result.token

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGE.SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEMESSAGE.FAIL, payload: err }));
    });
};

export const deleteMessage = (messageId, username) => (dispatch, getState) => {
  
  const username = getState().auth.login.result.username

  return dispatch(_deleteMessage(messageId)).then(() => {
    if(getState().router.location.pathname === "/messagefeed") {
      dispatch(
        getGlobalMessages()
      )
    } else {
      dispatch(
        getUserMessages(username)
      )
    }
  }
  );
};