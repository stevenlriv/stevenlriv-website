import SEO from "../components/SEO/index.js";
import TopBannerCurrentMessage from "../components/TopBanner/CurrentMessage.js";
import MainMenu from "../components/Menu/MainMenu.js";
import Footer from "../components/Footer/index.js";

export default function Home() {
  return (
    <div>
      <SEO
        title="My Story &bull; Steven Rivera"
        type="article"
        url="https://riverasteven.com/my-story"
        imgURL="https://riverasteven.com/images/social-banner.png"
        description="Learn about the beginnings and the story of Steven Rivera."
      />

      <div className="antialiased bg-body text-body font-body">
      
        <TopBannerCurrentMessage />

        <section className="pb-24 relative">
          <div className="absolute top-0 left-0 hidden xl:block h-full max-w-sm w-full" />

          <MainMenu />
        </section>

        <section className="pb-24">
          <div className="mb-14">
            <div className="container px-4 mx-auto">
              <div className="max-w-3xl mx-auto text-center py-24">
                <h2 className="text-4xl md:text-5xl font-heading mt-4 mb-6">
                  Steven Rivera.
                </h2>
                <p className="leading-8">
                  Steven Rivera is a Web3 founder, currently CTO of{" "}
                  <a
                    href="https://neftify.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Neftify
                  </a>{" "}
                  a Web3 metaverse company that has generated millions of
                  dollars in revenue.
                </p>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto">
              <p className="leading-8 mb-8 pb-8 border-b">
                Steven is considered one of Latin America&apos;s leading minds
                on what&apos;s next in technology, Web3, and the Metaverse.
                Known as &apos;Steven,&apos; he is described as one of the
                youngest tech people in Puerto Rico. Early to coding in 2009,
                crypto in 2017, and NFTs in 2020, Steven is looking to be at the
                forefront of technology development.
              </p>
              <h2 className="text-4xl font-heading mb-6">
                Steven Rivera&apos;s Story
              </h2>
              <p className="leading-8 mb-6">
                Steven was born in 1996 to a low-income family and resided in
                Morovis for most of his early years. Went to public schools and
                taught itself to code and learn English using the internet. He
                started making money at an early age, selling whatever he could
                find or building like &apos;bolines&apos; and
                &apos;gallitos&apos; to have cash for candies.
              </p>

              <p className="leading-8 mb-6">
                From an early age, Steven recognized that he needed to make
                money to be able to help his family financially. So the journey
                started with $0 and a drive to do something for his family.
                Steven began to learn how to code at the age of 12 and has been
                trying to build companies since then.
              </p>

              <p className="leading-8 mb-6">
                At 17, with no money for college due to financial difficulties
                in his family, he decided to join the military to get a
                scholarship and be able to afford housing while studying at the
                University of Puerto Rico, Rio Piedras Campus. However, after
                one year abroad training in Fort Gordon, Georgia Information
                Technology and Cybersecurity, Steven returned from his military
                training as a different person and forgot about his early
                entrepreneurial endeavors.
              </p>

              <p className="leading-8 mb-6">
                He started studying Biology at the University, but something
                felt off. Then Hurricane Maria came in 2017, and Steven got
                deployed to help Puerto Rico. Unfortunately, during this point,
                the University gave Steven an unfair deal while deployed and
                helping Puerto Rico and made it impossible for Steven to manage
                both at the same time. So Steven choose to help Puerto Rico and
                lost an entire semester.
              </p>
              <p className="leading-8 mb-6">
                After that unfair experience with the University and having
                discovered crypto around the same time, Steven decided to go
                back to its roots and pursue entrepreneurship once again.
              </p>
              <p className="leading-8 mb-6">
                Then came the hardest journey of his life that is still active
                today. To summarize:
              </p>
              <ul className="mb-6 list-decimal list-inside">
                <li className="leading-8 mb-2">
                  Built multiple companies that went to $0 while earning a
                  salary of $0 per month.
                </li>
                <li className="leading-8 mb-2">
                  Participated in multiple hackathons and won 3 of them,
                  competing at international levels.
                </li>
                <li className="leading-8 mb-2">
                  Made and lost $100,000+ in crypto markets.
                </li>
              </ul>

              <p className="leading-8 mb-6">
                Now Steven is focused on building the biggest tech company in
                Puerto Rico and Latin America,{" "}
                <a href="https://neftify.com" target="_blank" rel="noreferrer">
                  Neftify
                </a>{" "}
                . And at the same time, Steven is looking to inspire young
                entrepreneurs and teach them that you can do big things with
                code. It does not matter where you come from, if you have a
                degree, your color of skin or your gender. If you code, you can
                build the future you want for yourself and your family.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
