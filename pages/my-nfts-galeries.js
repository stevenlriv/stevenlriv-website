import SEO from "../components/SEO/index.js";
import TopBannerCurrentMessage from "../components/TopBanner/CurrentMessage.js";
import MainMenu from "../components/Menu/MainMenu.js";
import ContentRow from "../components/Content/Row/index.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="My NFTs Galeries &bull; Steven Rivera"
        type="website"
        url="https://riverasteven.com/my-nfts-galeries"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Every NFT Galeries Steven has created."
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
                <h2 className="text-5xl md:text-6xl font-heading">
                  My NFTs Galeries
                </h2>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <p className="max-w-lg leading-8">
                  Every NFT Galeries Steven has created.
                </p>
              </div>
            </div>

            <ContentRow
              one={{
                title: "Metagala",
                description:
                  "My bluechips NFT Art collection on Ethereum",
                url: "https://oncyber.io/metagala",
                imageURL: "/images/my-nfts-galeries/metagala.png",
              }}
              two={{
                title: "Metaricua",
                description:
                  "My first boricua NFT galerie in the Metaverse",
                url: "https://oncyber.io/metaricua",
                imageURL: "/images/my-nfts-galeries/metaricua.png",
              }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
