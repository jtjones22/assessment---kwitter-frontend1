import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSERMESSAGES, GETGLOBALMESSAGES } from "../actionTypes";

const url = domain + "/messages";

export const getUserMessages = username => dispatch => {
  dispatch({
    type: GETUSERMESSAGES.START
  });

  return fetch(`${url}?limit=100&offset=0&username=${username}`, {
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

export const getGlobalMessages = messageData => dispatch => {
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