

import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { ADDLIKE, REMOVELIKE } from "../actionTypes";

const url = domain + "/likes";

export const addLike => () => dispatch => {
  dispatch({
    type: ADDLIKE.START
  });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

export const removeLike = username => dispatch => {
    dispatch({
      type: REMOVELIKE.START
    });
  
    return fetch(url + "/" + likeId, {
      method: "DELETE",
      headers: jsonHeaders,
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: REMOVELIKE.SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(dispatch({ type: REMOVELIKE.FAIL, payload: err }));
      });
  };