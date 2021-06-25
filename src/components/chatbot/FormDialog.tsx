import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useCallback, useState } from "react";
import useClickAway from "src/hooks/useClickAway";
import styles from "src/styles/components/chatbot/FormDialog.module.scss";

import { validateEmailFormat, validateRequiredInput } from "../../utils/helper";
import TextInput from "./TextInput";

type Props = {
  handleClose: () => void;
};

const FormDialog: React.VFC<Props> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const ref = React.useRef<HTMLDivElement>(null);
  useClickAway(ref, props.handleClose);
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
      const url = process.env.SLACK_API_ENDPOINT;
      if (!url) {
        throw new Error("API endpoint is undefined");
      }

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
    <div className={styles.formDialog} ref={ref}>
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={"件名（必須）"}
          id="name"
          multiline={false}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          label={"メールアドレス（必須）"}
          id="email"
          multiline={false}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
        <TextInput
          label={"お問い合わせ内容（必須）"}
          id="description"
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
    </div>
  );
};

export default FormDialog;
