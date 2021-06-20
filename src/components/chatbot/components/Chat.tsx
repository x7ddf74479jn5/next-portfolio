import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import React from "react";

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
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
