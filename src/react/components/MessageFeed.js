import React, { Component } from "react";
import MessageCard from "./MessageCard";

const fakeUser = {
  pictureLocation: null,
  username: "jtjones22",
  displayName: "Jonathan Jones",
  about: "",
  googleId: null,
  createdAt: "2019-11-19T22:55:56.998Z",
  updatedAt: "2019-11-19T22:55:56.998Z"
};

const fakeUserMessages = [
  {
    id: 981,
    text: "This is my sixth Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:35:06.752Z",
    likes: []
  },
  {
    id: 980,
    text: "This is my fifth Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:35:06.752Z",
    likes: []
  },
  {
    id: 979,
    text: "This is my fourth Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:35:03.092Z",
    likes: []
  },
  {
    id: 978,
    text: "This is my third Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:58.952Z",
    likes: []
  },
  {
    id: 977,
    text: "This is my second Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:48.026Z",
    likes: []
  },
  {
    id: 976,
    text: "This is my first Kwitter message.",
    username: "jtjones22",
    createdAt: "2019-11-20T20:34:30.285Z",
    likes: []
  }
];

class MessageFeed extends Component {
  render() {
    return fakeUserMessages.map(message => (
      <MessageCard
        key={message.id}
        id={message.id}
        text={message.text}
        username={message.username}
        likes={message.likes}
        displayName={fakeUser.displayName}
      />
    ));
  }
}

export default MessageFeed;
