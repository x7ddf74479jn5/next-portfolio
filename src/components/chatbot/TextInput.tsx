import type { TextFieldProps } from "@material-ui/core/TextField";
import TextField from "@material-ui/core/TextField";
import React from "react";

type Props = TextFieldProps;

const TextInput: React.VFC<Props> = (props) => {
  return (
    <TextField
      fullWidth={true}
      id={props.id}
      label={props.label}
      margin={"dense"}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
