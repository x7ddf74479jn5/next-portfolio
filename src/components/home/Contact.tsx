import { NextArrowButton } from "src/components/common/NextArrowButton";
import Spacer from "src/components/layouts/Spacer";

const Contact = () => {
  return (
    <section className="c-section c-bg-primary">
      <div className="c-section-wrapin p-grid__contact">
        <h2>お仕事のご依頼・ご相談</h2>
        <hr className="c-section__line" />
        <Spacer size="md" />
        <p>
          企業HPなどのWebサイト制作、チャットボット開発、WordPress導入・カスタマイズなどのお見積もり、ご相談はお気軽にご連絡ください。
          お客様だけでなく、エンドユーザーにも喜んでいただけるよう技術を提供します。
        </p>
        <Spacer size="sm" />
        <NextArrowButton label="お問い合わせ" href="/contact/" />
        <Spacer size="md" />
      </div>
    </section>
  );
};

export default Contact;
