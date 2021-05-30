import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

const Foot: React.VFC<Props> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  );
};

export default Foot;
