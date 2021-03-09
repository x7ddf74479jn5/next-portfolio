import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export const IconArrowNext: React.FC<Props> = ({ label, href }) => {
  return (
    <Link href={href}>
      <a className="p-btn-round p-icon__arrow-next" role="button">
        {label}
      </a>
    </Link>
  );
};
