import Image from "next/image";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div>
      <section>
        <div className="pt-24 pb-16 bg-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 justify-between">
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
                <Link href="/">
                  <a className="inline-block">
                    <Image
                      src="/images/logos/white.png"
                      alt=""
                      layout="intrinsic"
                      width="116"
                      height="32"
                    />
                  </a>
                </Link>
                <p className="leading-8 text-white">
                  I like to code cool shit!
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0">
                <h5 className="text-xl font-bold mb-5 text-white">
                  Start Here
                </h5>
                <ul>
                  <li className="mb-2">
                    <Link href="/my-story">
                      <a className="inline-block text-white hover:text-gray-200">
                        My Story
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/talks">
                      <a className="inline-block text-white hover:text-gray-200">
                        Talks
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/podcasts">
                      <a className="inline-block text-white hover:text-gray-200">
                        Podcasts
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <a className="inline-block text-white hover:text-gray-200">
                        Blogs
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0">
                <h5 className="text-xl font-bold mb-5 text-white">Then Here</h5>
                <ul>
                  <li className="mb-2">
                    <Link href="/hackathons">
                      <a className="inline-block text-white hover:text-gray-200">
                        Hackathons
                      </a>
                    </Link>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-block text-white hover:text-gray-200"
                      href="https://github.com/stevenlriv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-block text-white hover:text-gray-200"
                      href="https://oncyber.io/metagala"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Metagala
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <h5 className="text-xl font-bold mb-5 text-white">
                  And Socials
                </h5>
                <ul>
                  <li className="mb-2">
                    <a
                      className="inline-block text-white hover:text-gray-200"
                      href="https://twitter.com/stevenlriv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-block text-white hover:text-gray-200"
                      href="https://instagram.com/stevenlriv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-block text-white hover:text-gray-200"
                      href="https://www.linkedin.com/in/steven-rivera/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
