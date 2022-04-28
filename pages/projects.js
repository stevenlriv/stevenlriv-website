import SEO from "../components/SEO/index.js";
import TopBannerCurrentMessage from "../components/TopBanner/CurrentMessage.js";
import MainMenu from "../components/Menu/MainMenu.js";
import ContentRow from "../components/Content/Row/index.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="Projects &bull; Steven Rivera"
        type="website"
        url="https://riverasteven.com/projects"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Every project Steven is currently working on."
      />

      <div className="antialiased bg-body text-body font-body">

        <TopBannerCurrentMessage />

        <section className="pb-24 relative">
          <div className="absolute top-0 left-0 hidden xl:block h-full max-w-sm w-full" />

          <MainMenu />
        </section>

        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 mb-20 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                <h2 className="text-5xl md:text-6xl font-heading">Projects</h2>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <p className="max-w-lg leading-8">
                  Every project Steven is currently working on.
                </p>
              </div>
            </div>

            <ContentRow
              one={{
                title: "Neftify",
                description:
                  "A Web3 company that focuses on building products for the metaverse and gaming ecosystem",
                url: "https://neftify.com",
                imageURL: "/images/projects/neftify-white.png",
              }}
              two={{
                title: "Neftify Media",
                description: "We are focused on building content and products that are persistent and immutable",
                url: "https://neftify.media",
                imageURL: "/images/projects/neftify-media-white.png",
              }}
              three={{
                title: "Tattoo Skullz Society",
                description:
                  "Tattoo Skullz Society is a collection of 5,000 NFTs—unique digital collectibles living on the Ethereum blockchain created by code-mixing 175 art elements.",
                url: "https://tattooskullzsociety.com/",
                imageURL: "/images/projects/tattoo-skullz-white.png",
              }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
