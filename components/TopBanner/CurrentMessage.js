import Image from "next/image";
import Link from "next/link";
import TopBanner from "./index.js";

const TopBannerCurrentMessage = (props) => {
  return (
    <div>
        <TopBanner message="Looking to build something on-chain? Click here..." link="https://neftify.media/" />
    </div>
  );
};

export default TopBannerCurrentMessage;
