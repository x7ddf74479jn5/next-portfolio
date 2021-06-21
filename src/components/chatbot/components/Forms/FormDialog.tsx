import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useCallback, useState } from "react";

import TextInput from "./TextInput";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const FormDialog: React.VFC<Props> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const validateEmailFormat = (email: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const validateRequiredInput = (...args: string[]) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i = (i + 1) | 0) {
      if (args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank;
  };

  const submitForm = () => {
    const isBlank = validateRequiredInput(name, email, description);
    const isValidEmail = validateEmailFormat(email);

    if (isBlank) {
      alert("必須入力欄が空白です。");
      return false;
    } else if (!isValidEmail) {
      alert("メールアドレスの書式が異なります。");
      return false;
    } else {
      const payload = {
        text:
          "お問い合わせがありました\n" +
          "お名前:" +
          name +
          "\n" +
          "Email:" +
          email +
          "\n" +
          "お問い合わせ内容:\n" +
          description,
      };
      const url = "https://hooks.slack.com/services/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";

      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("お問い合わせが完了しました。追ってご連絡します");
        setName("");
        setEmail("");
        setDescription("");
        return props.handleClose();
      });
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput label={"件名（必須）"} multiline={false} rows={1} value={name} type={"text"} onChange={inputName} />
        <TextInput
          label={"メールアドレス（必須）"}
          multiline={false}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
        <TextInput
          label={"お問い合わせ内容（必須）"}
          multiline={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitForm} color="primary">
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
