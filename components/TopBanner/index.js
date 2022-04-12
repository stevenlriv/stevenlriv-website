import Image from "next/image";
import Link from "next/link";

const TopBanner = (props) => {
  return (
    <div>
      <section className="py-4 bg-black">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto mb-2 text-center">
            <p className="text-white font-bold">
              {props.link ? (
                <a href={props.link} target="_blank" rel="noreferrer">
                  {props.message}
                </a>
              ) : (
                <div>{props.message}</div>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBanner;
