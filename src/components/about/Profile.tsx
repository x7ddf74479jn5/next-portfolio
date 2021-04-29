import { WrapInSection } from "src/components/layouts/Section";
import styles from "src/styles/components/about/Profile.module.scss";
import { images } from "src/utils/images";

const Profile: React.VFC = () => {
  return (
    <div className={styles.bgPrimary}>
      <WrapInSection id={"profile"}>
        <h2 className={styles.headlineAboutWhite}>Profile</h2>
        <div className={styles.gridProfile}>
          <div className={styles.left}>
            <div className={styles.mediaProfile}>
              <img src={images.pandasharkIcon.path} alt={images.pandasharkIcon.alt} />
              <p>パンダシャーク</p>
            </div>
          </div>
          <div className={styles.right}>
            <p>喫茶店の調理職×Webエンジニア。</p>
            <p>
              珈琲と美味しい料理が好き。
              <br />
              得意な料理ジャンルはイタリアンです。
            </p>
            <p>現在、プログラミング・情報技術者資格試験の勉強と転職活動を行っています。</p>
          </div>
        </div>
      </WrapInSection>
    </div>
  );
};

export default Profile;
