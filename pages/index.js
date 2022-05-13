import Image from "next/image";
import Link from "next/link";

import SEO from "../components/SEO/index.js";
import TopBannerCurrentMessage from "../components/TopBanner/CurrentMessage.js";
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
        <TopBannerCurrentMessage />

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

        <section className="py-24 bg-gray-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-heading mb-6">
                Programming Languages That I Know
              </h2>
              <p>
                This is a list of all the programming languages I have interacted and can build in.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-8">
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">JavaScript</h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                    Includes ReactJs, React Native, Node.js and Vue.js
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    Solidity
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                    Smart Contracts in EVM machines (Ethereum)
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    Rust
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">Go</h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    C
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">C++</h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    C#
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    PHP
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    Python
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    SQL
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    TypeScript
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8">
                <div className="py-12 px-6 lg:p-20 bg-white">
                  <h5 className="text-xl font-heading mb-4">
                    CSS
                  </h5>
                  <p className="max-w-xs leading-8 text-gray-400">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="absolute top-0 left-0" />
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                <h1 className="max-w-md mx-auto lg:mx-0 text-5xl lg:text-6xl font-heading">
                  Spoken Languages That I know
                </h1>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-2xl mx-auto py-12 px-8 md:p-12 bg-black">
                  <div className="md:flex mb-14">
                    <div className="mb-6 md:mb-0 mr-6 xl:mr-10">
                      <div className="w-14 h-14 bg-indigo-300 transform rotate-45 flex items-center justify-center">
                        <h2 className="text-2xl font-bold transform -rotate-45">
                          1
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading text-white mb-4">
                        Spanish
                      </h2>
                      <p className="text-lg text-white">
                        A Romance language spoken in Spain and in much of
                        Central and South America (except Brazil) and several
                        other countries. More than 400 millon speakers.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex mb-14">
                    <div className="mb-6 md:mb-0 mr-6 xl:mr-10">
                      <div className="w-14 h-14 bg-orange-300 transform rotate-45 flex items-center justify-center">
                        <h2 className="text-2xl font-bold transform -rotate-45">
                          2
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading text-white mb-4">
                        English
                      </h2>
                      <p className="text-lg text-white">
                        English is a West Germanic language of the Indo-European
                        language family, originally spoken by the inhabitants of
                        early medieval England. More than 1.132 billon speakers.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="mb-6 md:mb-0 mr-6 xl:mr-10">
                      <div className="w-14 h-14 bg-red-300 transform rotate-45 flex items-center justify-center">
                        <h2 className="text-2xl font-bold transform -rotate-45">
                          3
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-heading text-white mb-4">
                        Mandarin Chinese
                      </h2>
                      <p className="text-lg text-white">
                        Mandarin is a group of Sinitic (Chinese) languages and
                        dialects that are natively spoken across most of
                        northern and southwestern China. More than 1.117 billon
                        speakers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
