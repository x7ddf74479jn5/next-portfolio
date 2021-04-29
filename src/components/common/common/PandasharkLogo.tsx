import Image from "next/image";
import Link from "next/link";

import { images } from "../../../utils/images";

type Props = {
  width: number;
  height: number;
};

const PandasharkLogo: React.VFC<Props> = ({ width, height }) => {
  return (
    <>
      <Link href="/">
        <a target="_self" aria-label="パンダシャーク">
          <Image
            width={width}
            height={height}
            alt={images.pandasharkRectangle.alt}
            src={images.pandasharkRectangle.path}
          />
        </a>
      </Link>
    </>
  );
};

export default PandasharkLogo;
