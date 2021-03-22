import Spacer from "src/components/common/Spacer";
import { samplesDetail } from "src/contents/samples";
import { Layout } from "src/layouts/layout";
import { AriaTitle } from "../../components/common/AriaTitle";

const Portfolio = () => {
  const sample = samplesDetail.find((sample) => {
    return sample.id === "portfolio";
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
          {typeof sample.link === "string" ? (
            <p>{sample.link}</p>
          ) : (
            <p>
              <a href={sample.link.href} target="_blank" rel="noreferrer">
                {sample.link.label}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <Spacer size="md" />
      <AriaTitle title="Portfolio" caption="ポートフォリオ" />

      {content}
    </Layout>
  );
};

export default Portfolio;
