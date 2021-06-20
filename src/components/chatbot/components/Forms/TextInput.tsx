import TextField from "@material-ui/core/TextField";
import React from "react";

const TextInput = (props) => {
  return (
    <TextField
      fullWidth={true}
      id="standard-basic"
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
