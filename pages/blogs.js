import SEO from "../components/SEO/index.js";
import MainMenu from "../components/Menu/MainMenu.js";
import MobileMenu from "../components/Menu/MobileMenu.js";
import ContentRow from "../components/Content/Row/index.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="Blogs &bull; Steven Rivera"
        type="website"
        url="https://riverasteven.com/talks"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Explore the Blogs Steven is currently working on."
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
                <h2 className="text-5xl md:text-6xl font-heading">Blogs</h2>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <p className="max-w-lg leading-8">
                  Every blog I&apos;m sending some of my weekly articles.
                </p>
              </div>
            </div>

            <ContentRow
              two={{ title: "Medium", description: "Any type of post from personal views, to my publications to Neftify medium.", url: "https://medium.com/@stevenlriv", imageURL: "/images/blogs/medium-icon.png" }}
              three={{ title: "The Weekly Rundown", description: "My weekly NFT market analisis at NFTPlazas", url: "https://nftplazas.com/author/steven/", imageURL: "/images/blogs/weekly-rundown.jpeg" }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
