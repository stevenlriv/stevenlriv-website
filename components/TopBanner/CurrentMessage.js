import Image from "next/image";
import Link from "next/link";
import TopBanner from "./index.js";

const TopBannerCurrentMessage = (props) => {
  return (
    <div>
        <TopBanner message="Click aquí para participar en mi clase de Web 3: ¿Cómo convertirte en un programador?" link="https://parahispanohablantes.substack.com/p/de-0-a-web3-como-convertirte-en-un-programador" />
    </div>
  );
};

export default TopBannerCurrentMessage;
