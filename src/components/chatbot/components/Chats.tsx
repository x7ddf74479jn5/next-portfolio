import List from "@material-ui/core/List";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import { Chat } from "./index";

const useStyles = makeStyles(() => {
  return createStyles({
    chats: {
      height: 400,
      padding: "0",
      overflow: "auto",
    },
  });
});

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />;
      })}
    </List>
  );
};

export default Chats;
