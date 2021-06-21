import React from "react";
import type { SelectAnswer } from "src/types/chatbot";

import { Answer } from "./index";

type Props = {
  answers: Answer[];
  select: SelectAnswer;
};

const AnswersList: React.VFC<Props> = (props) => {
  return (
    <div className={"c-grid__answer"}>
      {props.answers.map((value, index) => {
        return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select} />;
      })}
    </div>
  );
};

export default AnswersList;
