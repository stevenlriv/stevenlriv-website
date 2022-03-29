import Image from "next/image";
import Link from "next/link";

const MobileMenu = (props) => {
  return (
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-3/4 max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-black bg-opacity-75" />
      <nav className="relative flex flex-col h-full p-8 bg-white">
        <div className="flex items-center justify-between mb-12">
          <Link href="/">
            <a className="items-center">
              <Image
                src="/images/logos/black.png"
                alt=""
                layout="intrinsic"
                width="116"
                height="32"
              />
            </a>
          </Link>
          <button
            className="inline-block navbar-close focus:outline-none"
            type="button"
            aria-label="Close"
          >
            <img src="/images/navigations/x2.svg" alt="" />
          </button>
        </div>
        <div>
          <ul>
            <li className="py-3">
              <Link href="/my-story">
                <a className="inline-block font-bold hover:text-gray-900">
                  My Story
                </a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="/talks">
                <a className="inline-block font-bold hover:text-gray-900">
                  Talks
                </a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="/podcasts">
                <a className="inline-block font-bold hover:text-gray-900">
                  Podcasts
                </a>
              </Link>
            </li>
            <li className="py-3">
              <Link href="/blogs">
                <a className="inline-block font-bold hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
