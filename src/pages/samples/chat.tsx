import { AriaTitle } from "src/components/common/AriaTitle";
import Spacer from "src/components/common/Spacer";
import ExternalLink from "src/components/samples/ExternalLink";
import { samplesDetail } from "src/contents/samples";
import { Layout } from "src/layouts/layout";

const Chat = () => {
  const sample = samplesDetail.find((sample) => {
    return sample.id === "chat-bot";
  });

  if (!sample) {
    return;
  }

  const content = (
    <section className="c-section">
      <div className="c-section-wrapin p-grid__works">
        <img src={sample.img} alt={sample.alt} />
        <div className="p-grid__works__row">
          <h3>概要</h3>
          <p>{sample.abstract}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>用途・目的</h3>
          <ul>
            {sample.purpose.map((p, index) => {
              return <li key={index}>{p}</li>;
            })}
          </ul>
        </div>
        <div className="p-grid__works__row">
          <h3>こだわり</h3>
          <ul>
            {sample.point.map((p, index) => {
              return <li key={index}>{p}</li>;
            })}
          </ul>
        </div>
        <div className="p-grid__works__row">
          <h3>使用言語</h3>
          <p>{sample.lang}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>技術</h3>
          <p>{sample.tech}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>リンク</h3>
          <p>ヘッダーメニューの中からお試しいただけます。</p>
          {typeof sample.link === "string" ? (
            <p>{sample.link}</p>
          ) : (
            <p>
              <ExternalLink label={sample.link.label} url={sample.link.href} />
            </p>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <section>
        <Spacer size="md" />
      </section>
      <AriaTitle title="Chat Bot" caption="チャットボット" />
      {content}
    </Layout>
  );
};

export default Chat;
