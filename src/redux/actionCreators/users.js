import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, DELETEUSER } from "../actionTypes";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({
    type: GETUSER.START
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

export const deleteUser = username => dispatch => {
    dispatch({
      type: DELETEUSER.START
    });
  
    return fetch(url + "/" + username, {
      method: "DELETE",
      headers: jsonHeaders,
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: DELETEUSER.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
      });
  };