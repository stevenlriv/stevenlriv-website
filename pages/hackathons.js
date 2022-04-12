import SEO from "../components/SEO/index.js";
import TopBannerCurrentMessage from "../components/TopBanner/CurrentMessage.js";
import MainMenu from "../components/Menu/MainMenu.js";
import ContentRow from "../components/Content/Row/index.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="Hackathons &bull; Steven Rivera"
        type="website"
        url="https://riverasteven.com/hackathons"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Every hackathon Steven has been participated."
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
                  Hackathons
                </h2>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <p className="max-w-lg leading-8">
                  Every hackathon Steven has been participated.
                </p>
              </div>
            </div>

            <ContentRow
              one={{
                title: "Restart Week Hackathon",
                description:
                  "Social Impact in Puerto Rico through blockchain, open data, vr/ar",
                url: "https://restart-week-hackathon.devpost.com/",
                imageURL: "/images/hackathons/restart-week-ts.png",
              }}
              two={{
                title: "Solana Ignition",
                description:
                  "Launching the next wave of crypto apps and infrastructure",
                url: "https://solana.com/news/solana-ignition-hackathon-winners",
                imageURL: "/images/hackathons/solana-ignition-ts.png",
              }}
              three={{
                title: "Metaverso Hackathon",
                description: "Puerto Rico's first NFT Hackathon",
                url: "https://metaverso-hackathon.devpost.com/?ref_feature=challenge&ref_medium=discover",
                imageURL: "/images/hackathons/metaverso-ts.png",
              }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
