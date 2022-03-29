import Image from "next/image";
import Link from "next/link";

const MainMenu = (props) => {
  return (
    <div>
      <nav className="relative py-10">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between relative">
            <Link href="/">
              <a className="inline-block">
                <Image
                  src="/images/logos/black.png"
                  alt=""
                  layout="intrinsic"
                  width="116"
                  height="32"
                />
              </a>
            </Link>
            
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="inline-flex">
                <li className="mr-8">
                  <Link href="/my-story">
                    <a className="inline-block font-bold hover:text-gray-900">
                      My Story
                    </a>
                  </Link>
                </li>
                <li className="mr-8">
                  <Link href="/talks">
                    <a className="inline-block font-bold hover:text-gray-900">
                      Talks
                    </a>
                  </Link>
                </li>
                <li className="mr-8">
                  <Link href="/podcasts">
                    <a className="inline-block font-bold hover:text-gray-900">
                      Podcasts
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    <a className="inline-block font-bold hover:text-gray-900">
                      Blogs
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block ml-auto" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
