import Image from "next/image";
import Link from "next/link";

import SEO from "../components/SEO/index.js";
import MainMenu from "../components/Menu/MainMenu.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="Steven Rivera"
        type="website"
        url="https://riverasteven.com"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Like the Nike slogan, I 'just do it!' and accomplish
                    everything I put my mind to. I like to code cool shit!"
      />

      <div className="antialiased bg-body text-body font-body">
        <section className="pb-24 relative">
          <div className="absolute top-0 left-0 hidden xl:block h-full max-w-sm w-full" />

          <MainMenu />

          <div className="relative container px-4 mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-5/12 mb-6">
                <div className="flex flex-col items-center">
                  <div className="mb-9">
                    <Image
                      src="/images/steven.jpeg"
                      alt=""
                      layout="intrinsic"
                      width="500"
                      height="500"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12 flex items-center">
                <div className="max-w-lg mx-auto">
                  <h1 className="text-5xl lg:text-6xl font-heading mb-6">
                    <span>Steven Rivera.</span>
                  </h1>
                  <p className="navigationleading-8 md:max-w-md xl:max-w-sm mb-6">
                    Like the Nike slogan, I &apos;just do it!&apos; and
                    accomplish everything I put my mind to. I&apos;m the
                    Co-founder of Neftify, a Web3 company that focuses on
                    building products for the metaverse and gaming ecosystem.
                  </p>
                  <div className="ml-auto">
                    <Link href="/my-story">
                      <a className="inline-block w-full md:w-auto text-center px-8 py-3 text-white font-bold bg-black hover:bg-gray-900 transition duration-200">
                        Read My Story
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-black relative">
          <img
            className="absolute top-0 left-0 w-full h-full opacity-50"
            src="/images/backgrounds/features-16-shadow.png"
          />
          <div className="container px-4 mx-auto relative">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="flex items-center justify-center p-12 lg:p-20 bg-black shadow-lg">
                  <div className="text-center">
                    <p className="text-sm text-white mb-2">
                      Lines of code written
                    </p>
                    <h2 className="text-4xl font-heading text-gray-50">1M+</h2>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="flex items-center justify-center p-12 lg:p-20 bg-black shadow-lg">
                  <div className="text-center">
                    <p className="text-sm text-white mb-2">
                      Value created with code
                    </p>
                    <h2 className="text-4xl font-heading text-gray-50">
                      $17M+
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <div className="flex items-center justify-center p-12 lg:p-20 bg-black shadow-lg">
                  <div className="text-center">
                    <p className="text-sm text-white mb-2">
                      People that used my code
                    </p>
                    <h2 className="text-4xl font-heading text-gray-50">
                      20 000+
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 relative">
          <div className="container px-4 mx-auto relative z-10">
            <span className="text-indigo-400 uppercase">MY WORKS</span>
            <h1 className="text-5xl md:text-6xl font-heading mb-16 mt-2">
              Discover my recent projects
            </h1>
            <div className="mb-20">
              <div className="max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-none mx-auto">
                <div className="w-full mb-16">
                  <div>
                    <a
                      href="https://neftify.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/images/Neftify-banner.png"
                        alt=""
                        layout="responsive"
                        width="5760"
                        height="3240"
                      />
                    </a>
                    <a
                      href="https://neftify.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 className="text-lg font-heading mb-2 mt-6">
                        Neftify
                      </h5>
                    </a>
                    <p className="text-xs text-gray-500 uppercase">
                      A web3 metaverse company
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/projects">
                <a className="inline-block px-8 py-3 text-white font-bold bg-black hover:bg-gray-900">
                  More Projects
                </a>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
