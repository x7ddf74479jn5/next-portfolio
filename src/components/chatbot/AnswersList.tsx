import React from "react";
import styles from "src/styles/components/chatbot/AnswerList.module.scss";
import type { SelectAnswer } from "src/types/chatbot";
import type { Answer as AnswerType } from "src/types/chatbot";

import Answer from "./Answer";

type Props = {
  answers: AnswerType[];
  select: SelectAnswer;
};

const AnswersList: React.VFC<Props> = (props) => {
  return (
    <div className={styles.gridAnswer}>
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select} />;
      })}
    </div>
  );
};

export default AnswersList;
