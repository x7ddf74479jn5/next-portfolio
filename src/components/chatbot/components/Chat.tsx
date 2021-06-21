import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import React from "react";
import styles from "src/styles/components/chatbot/Chat.module.scss";

import type { Chat as ChatType } from "../../../types/chatbot/index";
import { icons } from "../../../utils/images";

type Props = ChatType;

const Chat: React.VFC<Props> = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={icons.pandashark.path} />
        ) : (
          <Avatar alt="icon" src={icons.noProfile.path} />
        )}
      </ListItemAvatar>
      <div className={styles.chatBubble}>{props.text}</div>
    </ListItem>
  );
};

export default Chat;
