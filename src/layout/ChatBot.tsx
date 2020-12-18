// import chat from "/src/module/chat-bot.js"
// import ch from "/js/chat-bot.js"
// const chatBot = require("chat-bot.js")
export const ChatBot = () => {
  return (
    <>
      <div
        className="c-modal"
        // style={{
        //   display:"block",
        //   position: "fixed",
        //   // width: "300px",
        //   // height: "600px",
        //   // right: "20px",
        //   // bottom: "20px",
        //   height: "592px",
        //   maxWidth: "432px",
        //   padding: "0 1rem",
        //   width: "100%",
        //   top:"50%",
        //   left:"50%",
        //   transform: translate(-50%, -50%)
        // }}
      >
        　
        <button>
          <img
            alt="ナビゲーション メニューを閉じる"
            className="chat-close"
            src="/img/icons/close.png"
            height="24"
            width="24"
          />
        </button>
        <iframe
          src="https://chatbot-demo-70752.web.app/"
          width="100%"
          height="100%"
          // width="300px"
          // height="600px"
          // style={{
          //   display: "block",
          //   // margin: "20px auto",
          //   border: "none",
          //   backgroundColor: "transparent",
          //   overflow: "hidden",
          // }}
        ></iframe>
      </div>
      <style jsx>{`
        .c-modal {
          display: block;
          position: fixed;
          height: 100vh;
          width: 100%;
          top: 50%;
          left: 50%;
          z-index: 999;
          transform: translate(-50%, -50%);
        }
        ,
        .c-modal button {
          display: block;
          margin: 0 0 0 auto;
          height: 24px;
          width: 24px;
        }
        ,
        iframe {
          display: block;
          width: 100%;
          height: 80%;
          border: none;
          background-color: transparent;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
