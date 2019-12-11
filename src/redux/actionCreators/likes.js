import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { POSTLIKE, DELETELIKE } from "../actionTypes";
import { getGlobalMessages, getUserMessages } from "./messages";

const url = domain + "/likes";

export const toggleLike = messageId => (dispatch, getState) => {
  const username = getState().auth.login.result.username;
  const pathName = getState().router.location.pathname
  if (pathName === '/messagefeed') {
    const messages = getState().messages.getGlobalMessages.result.messages;
    const message = messages.find(message => {
      return message.id === messageId;
    });
    const like = message.likes.find(like => {
      return like.username === username;
    });
    if (like) {
      return dispatch(deleteLike(like.id));
    } else {
      return dispatch(postLike(messageId));
    }
  } else {
    const messages = getState().messages.getUserMessages.result.messages
    const message = messages.find(message => {
      return message.id === messageId;
    });
    const like = message.likes.find(like => {
      return like.username === username;
    });
    if (like) {
      return dispatch(deleteLike(like.id));
    } else {
      return dispatch(postLike(messageId));
    }
  }


};

const _postLike = messageId => (dispatch, getState) => {
  dispatch({
    type: POSTLIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({
      messageId: messageId
    })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTLIKE.FAIL, payload: err }));
    });
};

export const postLike = messageId => (dispatch, getState) => {
  const username = getState().users.getUser.result.user.username;

  return dispatch(_postLike(messageId)).then(() => {
    if (getState().router.location.pathname === "/messagefeed") {
      dispatch(getGlobalMessages());
    } else {
      dispatch(getUserMessages(username));
    }
  });
};

const _deleteLike = likeId => (dispatch, getState) => {
  dispatch({
    type: DELETELIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETELIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETELIKE.FAIL, payload: err.message })
      );
    });
};

export const deleteLike = likeId => (dispatch, getState) => {
  const username = getState().users.getUser.result.user.username;

  return dispatch(_deleteLike(likeId)).then(() => {
    if (getState().router.location.pathname === "/messagefeed") {
      dispatch(getGlobalMessages());
    } else {
      dispatch(getUserMessages(username));
    }
  });
};
