import { NextPage } from "next";
import { AriaTitle } from "src/components/common/AriaTitle";
import Spacer from "src/components/common/Spacer";
import { termsRoute } from "src/contents/breadcrumbs";
import { Layout } from "src/layout/layout";

const Terms: NextPage = () => {
  return (
    <Layout>
      <section>
        <Spacer size="md" />
      </section>

      <AriaTitle title="Terms" caption="利用規約" breadcrumbs={termsRoute} />

      {/* <section className="c-section">
    <div className="c-section__area-title animated fadeInLeft">
      <div className="p-headline__sub animated fadeInUp fast delay-1s">
        <h2>Terms</h2>
        <p>利用規約</p>
        <ul className="u-text__breadcrumbs">
          <li><a href="/" target="_self">HOME</a><span>＞</span></li>
          <li><a href="/terms/" target="_self">TERMS</a><span></span></li>
        </ul>
      </div>
    </div>
  </section> */}

      {/* <section className="c-section">
        <div className="c-section-wrapin p-grid__community">
          <p>Webエンジニアを目指す人のためのオンライン学習コミュニティを準備中です。</p>
          <p>以下のような方を応援するコミュニティにします。</p>
          <ul>
            <li>別の業種・職種からエンジニアに転職したい</li>
            <li>Webエンジニアを目指して勉強している</li>
            <li>Webサイトを制作できるようになりたい</li>
          </ul>
          <p>現在は0期生と試験的に活動しており、今後、正式に募集いたします。</p>
        </div>
      </section> */}
    </Layout>
  );
};

export default Terms;
