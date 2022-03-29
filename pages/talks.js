import SEO from "../components/SEO/index.js";
import MainMenu from "../components/Menu/MainMenu.js";
import MobileMenu from "../components/Menu/MobileMenu.js";
import ContentRow from "../components/Content/Row/index.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="Talks &bull; Steven Rivera"
        type="website"
        url="https://riverasteven.com/talks"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Every talk, video and article Steven has been featured in is here."
      />

      <div className="antialiased bg-body text-body font-body">
        <section className="pb-24 relative">
          <div className="absolute top-0 left-0 hidden xl:block h-full max-w-sm w-full" />

          <MainMenu />
          <MobileMenu />
        </section>

        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4 mb-20 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                <h2 className="text-5xl md:text-6xl font-heading">Talks</h2>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <p className="max-w-lg leading-8">
                  Every talk, video and article Steven has been featured in is
                  here.
                </p>
              </div>
            </div>

            <ContentRow
              one={{ title: "Más allá del arte: Usos y Utilidades de los NFTs", description: "We explore utilities in NFTs beyond just jpegs. The interview is in Spanish only.", url: "https://www.facebook.com/prblockchain/videos/3117984951823075", imageURL: "/images/talks/cryptocurious.jpeg" }}
              two={{ title: "NEFTIFY, NFT Lending 101", description: "NFTYQ sits down w/ Neftify to discuss building the Shopify of the Play-to-Earn Guild movement, data on Guild growth in 2022, the gig economy and Gaming Guilds, and much more!", url: "https://www.youtube.com/watch?v=sTVqI-o3td4", imageURL: "/images/talks/neftify.jpg" }}
              three={{ title: "NFTs will be the biggest market in crypto", description: "Interview with Web3Creators", url: "https://www.web3creators.com/stories/nfts-will-be-the-biggest-market-in-crypto", imageURL: "/images/steven.jpeg" }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
