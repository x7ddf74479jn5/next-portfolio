import { AriaTitle } from "src/components/AriaTitle";
import { Layout } from "src/layout/layout";
import { privacyRoute } from "src/static/breadcrumbs";
import { NextPage } from "next";

import Spacer from "src/components/common/Spacer";

const googleAnalyticsTerms = "https://marketingplatform.google.com/about/analytics/terms/jp/";

const Privacy: NextPage = () => {
  return (
    <Layout>
      <section>
        <Spacer size="md" />
      </section>

      <AriaTitle title="Privacy Policy" caption="プライバシーポリシー" breadcrumbs={privacyRoute} />
      <section className="c-section">
        <div className="c-section-wrapin p-grid__privacy">
          <div>
            <h3>ご登録いただいた情報について</h3>
            <p>個人情報漏えい防止のため、当社の個人情報保護方針に従い適正に管理しております。</p>
          </div>
          <div>
            <h3>収集目的</h3>
            <p>
              弊社では、弊社サービスへのお問い合わせ・お申込みに際し、必要な範囲内で個人情報の提供をお願いしております。
            </p>
            <p>ご提供いただいた個人情報は、弊社「個人情報保護方針」に定めた目的以外には利用いたしません。</p>
          </div>
          <div>
            <h3>第三者への提供</h3>
            <p>
              弊社では、お問い合わせ・お申込みいただいた方の同意なく、個人情報を第三者に提供することはございません。
            </p>
            <p>
              ただし、次の場合には、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することがありますので、あらかじめご了承ください。
            </p>
            <ol>
              <li>法令に基づく場合</li>
              <li>
                人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合
              </li>
              <li>
                公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合
              </li>
              <li>
                国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
              </li>
            </ol>
          </div>
          <div>
            <h3>第三者への委託</h3>
            <p>
              当社は、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。この場合には、個人情報保護体制が整備された委託先を選定するとともに、個人情報保護に関する契約を締結いたします。
            </p>
          </div>
          <div>
            <h3>当サイトが使用しているアクセス解析ツールについて</h3>
            <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
            <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。</p>
            <p>このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
            <p>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
            <p>
              この規約に関して、詳しくは<a href={googleAnalyticsTerms}>こちら</a>をご覧ください。
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
