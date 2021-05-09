import { NextArrowButton } from "src/components/common/NextArrowButton";
import HorizontalRule from "src/components/home/HorizontalRule";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import styles from "src/styles/components/home/Contact.module.scss";

const Contact = () => {
  return (
    <WrapInSection background="primary">
      <div className={styles.gridContact}>
        <h2>お仕事のご依頼・ご相談</h2>
        <HorizontalRule />
        <Spacer size="md" />
        <p>
          企業HPなどのWebサイト制作、チャットボット開発、WordPress導入・カスタマイズなどのお見積もり、ご相談はお気軽にご連絡ください。
          お客様だけでなく、エンドユーザーにも喜んでいただけるよう技術を提供します。
        </p>
        <Spacer size="sm" />
        <NextArrowButton label="お問い合わせ" href="/contact/" />
        <Spacer size="md" />
      </div>
    </WrapInSection>
  );
};

export default Contact;
