import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import styles from "src/styles/components/samples/ExternalLink.module.scss";

type Props = {
  label: string;
  url: string;
};

const ExternalLink: React.VFC<Props> = ({ label, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <span className={styles.externalLink}>
        {label}
        <OpenInNewIcon fontSize="small" />
      </span>
    </a>
  );
};
export default ExternalLink;
