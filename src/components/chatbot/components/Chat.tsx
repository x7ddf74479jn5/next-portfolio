import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import React from "react";

import type { Chat as ChatType } from "../../../types/chatbot/index";

// import NoProfile from "src/components/chatbot/assets/img/no-profile.png";
// import Pandashark from "src/components/chatbot/assets/img/pandashark.png";

type Props = ChatType;

const Chat: React.VFC<Props> = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={"src/components/chatbot/assets/img/pandashark.png"} />
        ) : (
          <Avatar alt="icon" src={"src/components/chatbot/assets/img/no-profile.png"} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
