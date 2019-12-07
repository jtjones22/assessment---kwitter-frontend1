import { domain, jsonHeaders, handleJsonResponse } from "./constants";
<<<<<<< HEAD
import {
  GETGLOBALMESSAGES,
  GETUSERMESSAGES,
  DELETEMESSAGE,
  POSTMESSAGE
} from "../actionTypes";
=======
import { GETGLOBALMESSAGES, GETUSERMESSAGES, DELETEMESSAGE, POSTMESSAGE } from "../actionTypes";
>>>>>>> a23a65a81d19a0bfc356d1aa54eda5e1691d919e

const url = domain + "/messages";

export const getUserMessages = username => dispatch => {
  dispatch({
    type: GETUSERMESSAGES.START
  });

  return fetch(`${url}?username=${username}`, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSERMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETUSERMESSAGES.FAIL, payload: err })
      );
    });
};

export const getGlobalMessages = () => dispatch => {
  dispatch({
    type: GETGLOBALMESSAGES.START
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETGLOBALMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETGLOBALMESSAGES.FAIL, payload: err })
      );
    });
};

<<<<<<< HEAD
const _deleteMessage = messageId => (dispatch, getState) => {
=======
export const _postMessage = postMessageText => (dispatch, getState) => {
  dispatch({
    type: POSTMESSAGE.START
  });

  const token = getState().auth.login.result.token

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(postMessageText)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE.SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
    });
};

export const postMessage = postMessageText => (dispatch, getState) => {
  return dispatch(_postMessage(postMessageText))
  .then(() => dispatch(getGlobalMessages())
  );
};

export const _deleteMessage = messageId => (dispatch, getState) => {
>>>>>>> a23a65a81d19a0bfc356d1aa54eda5e1691d919e
  dispatch({
    type: DELETEMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETEMESSAGE.FAIL, payload: err })
      );
    });
};

export const deleteMessage = (messageId, username) => (dispatch, getState) => {
  const username = getState().auth.login.result.username;

  return dispatch(_deleteMessage(messageId)).then(() => {
    if (getState().router.location.pathname === "/messagefeed") {
      dispatch(getGlobalMessages());
    } else {
      dispatch(getUserMessages(username));
    }
  });
};

const _postMessage = messageData => (dispatch, getState) => {
  dispatch({
    type: POSTMESSAGE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(messageData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTMESSAGE.FAIL, payload: err }));
    });
};

export const postMessage = messageData => (dispatch) => {

  return dispatch(_postMessage(messageData)).then(() => {
    dispatch(getGlobalMessages())
  });
};
