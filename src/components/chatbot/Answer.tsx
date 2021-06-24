import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import type { SelectAnswer } from "src/types/chatbot";
import type { Answer as AnswerType } from "src/types/chatbot";

const useStyles = makeStyles(() => {
  return createStyles({
    button: {
      borderColor: "#ffb549",
      color: "#ffb549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#ffb549",
        color: "#fff",
      },
    },
  });
});

type Props = AnswerType & {
  select: SelectAnswer;
  isSelectReady: () => boolean;
};

const Answer: React.VFC<Props> = (props) => {
  const classes = useStyles();
  const handleClick = () => {
    if (!props.isSelectReady()) {
      return;
    }

    return props.select(props.content, props.nextId);
  };

  return (
    <Button className={classes.button} variant="outlined" onClick={handleClick}>
      {props.content}
    </Button>
  );
};
export default Answer;
