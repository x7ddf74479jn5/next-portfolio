import * as React from "react";
import ReactModal from "react-modal";

interface Props {
  /** このダイアログを表示するなら true */
  isOpen: boolean;
  /** このダイアログを閉じるときのコールバック */
  onClose?: () => void;
}

interface State {
  username: string;
}

export const ChatBotDialog: React.FC<Props> = (props) => {
  // 具体的に #root 要素などを指定した方がよい？
  ReactModal.setAppElement("body");

  // ダイアログが開いたときに呼び出される
  const handleOpen = () => {
    // ここで設定情報などを読み込む
  };

  // ダイアログ領域外のクリックや、ESCキーを押したときに呼び出される
  const handleClose = () => {
    // 親コンポーネントにダイアログを閉じてもらうためのコールバック通知
    props.onClose?.();
  };

  // スタイルのカスタマイズ

  // const customStyles: ReactModal.Styles = {
  //   // ダイアログ内のスタイル（中央に表示）
  //   content: {
  //     width: "100%",
  //     height: "650px",
  //     // maxWidth:"500px",
  //     zIndex: 999,
  //     overflow: "hidden",
  //     borderStyle: "none",
  //     backgroundColor: "transparent",
  //     top: "10%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, 0)",
  //   },
  //   // 親ウィンドウのスタイル（ちょっと暗くする）
  //   overlay: {
  //     zIndex: 998,
  //     background: "rgba(0, 0, 0, 0.2)",
  //   },
  // };

  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        onAfterOpen={handleOpen}
        onRequestClose={handleClose}
        // style={customStyles}
        contentLabel="chat-bot"
        className="content"
        overlayClassName="overlay"
      >
        <iframe
          src="https://chatbot-demo-70752.web.app/"
          width="100%"
          height="100%"
          style={{ borderStyle: "solid", borderColor: "#ffb549" }}
        />
        <button className="chat-close-button" onClick={() => handleClose()}>
          <img alt="チャットボットを閉じる" className="chat-close" src="/img/icons/close.png" />
        </button>
      </ReactModal>
    </div>
  );
};
