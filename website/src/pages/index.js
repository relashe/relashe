import "@fontsource/arapey"
import "@fontsource/raleway"
import { format } from "date-fns"
import React from "react"
import { HomeBanner, PageMain, Teaser } from "relashing"
import "../styles/styles.scss"

const Homepage = () => (
  <PageMain>
    <HomeBanner
      title="Relashe,"
      className="scheme--brand-blue-dark"
      titleLines={[
        "we got it.",
        "we got you.",
        "we can help you.",
        "we'll get there - together.",
        "let us help you.",
        "we care about you.",
        "we're on it.",
        "it's you and me.",
        `it's ${format(new Date(), "EEEE")}`,
      ]}
    />
    <Teaser
      content={`
      <p>A digital world requires digital partners and digital builders. Here at Relashe we have both.</p>

We provide the digital insight and knowledge to transform ideas, concepts and brands into creative, interactive and engaging digital experiences. This insight can be translated into building websites, online platforms and other elements your clients require.
As well as helping you reach your consumers, we help other digitally minded people who want to shape up and better our world, through mentoring and through partnerships that can further improve their clients' businesses.`}
    />

    <div>SERVICES</div>
    <Teaser
      content="If you are looking to partner up with a developer for a specific project or looking for someone to work together, send a message, we'd love to hear from you! We are also looking for people we can work with on bigger projects so, how much easier would it be if we look for each other?"
      className="scheme--brand-grey"
    />
    <Teaser
      content="Need help in the digital industry? Want to know about the digital industry? Hit us up! It is an ever evolving and fast paced industry and, in our opinion, the best thing about it is the community within, the lending hand in every corner that makes it exciting! We'd love to be that lending hand to others!
In any stage of your career (high school, college, university, online course, first job, second job, new career path) if you have questions, if you want help with resources, anything.. let us know, we'd love to try and help"
    />
    <Teaser
      content="Feel free to say hi! Relashe, we will reply."
      className="scheme--brand-blue-light"
    />
  </PageMain>
)

export default Homepage
