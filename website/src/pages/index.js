import "@fontsource/arapey"
import "@fontsource/raleway"
import { format } from "date-fns"
import React from "react"
import {
  BodyCopy,
  ContentContainer,
  HomeBanner,
  PageMain,
  Teaser,
  ServiceCardContainer,
  ServiceCard,
  Contact,
} from "relashing"
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
      intro=" A digital world requires digital partners and digital builders. Here at Relashe we have both."
    />
    <ContentContainer>
      <BodyCopy>
        <h2 className="t-heading-2 u-spacing-heading-bottom">
          How we work together
        </h2>
        <p>
          We provide the digital insight and knowledge to transform ideas,
          concepts and brands into creative, interactive and engaging digital
          experiences. This insight can be translated into building websites,
          online platforms and other elements your clients require.
        </p>
        <p>
          As well as helping you reach your consumers, we help other digitally
          minded people who want to shape up and better our world, through
          mentoring and through partnerships that can further improve their
          clients' businesses.
        </p>
      </BodyCopy>
    </ContentContainer>

    <ServiceCardContainer title="Services" className="u-spacing-0-top">
      <ServiceCard
        title="Web development"
        description="
        Builders build. Our expertise is in building web solutions and transform design concepts, ideas, sketches into 
        interactive websites, using all kinds of new (and not so new) technologies.
        "
        imageClassName="scheme--brand-blue-light"
      />
      <ServiceCard
        title="Consultancy/Contracting"
        description="
        We love to give a hand and help teams with their projects. Our goal is always the end user and 
        we achieve that through our clients and through working alognside different teams with different skillsets
        creating websites and applications.
        "
        imageClassName="scheme--brand-grey-dark"
      />
      <ServiceCard
        title="Mentoring"
        description="
        One of the areas we focus on is knowledge sharing with the community and also with those wanting to join the digital world.
        We invest our time and our passion in supporting and helping people learning more about web development and how to join the tech industry and make it more diverse.
        "
        imageClassName="scheme--brand-grey-light"
      />
    </ServiceCardContainer>

    <Teaser
      content={`
        If you are looking to partner up with a developer for a specific project or just looking for someone to work together with, send a message!
        `}
      textCenter
      className="scheme--brand-grey"
    >
      <BodyCopy className="u-spacing-heading-top">
        <div className="l-content-container-small l-text-center">
          <p>
            We are also looking for creative people (developers, designers,
            illustrators etc) we can work with so, how much easier would it be
            if we look for each other?
          </p>
        </div>
      </BodyCopy>
    </Teaser>

    <ContentContainer>
      <BodyCopy>
        <h2 className="t-heading-2 u-spacing-heading-bottom">
          Learning + helping
        </h2>
        <p>
          Need help in the digital industry? Want to know about the digital
          industry? Hit us up!{" "}
        </p>
        <p>
          It is an ever evolving and fast paced industry and, in our opinion,
          the best thing about it is the community within, the lending hand in
          every corner that makes it exciting! We'd love to be that lending hand
          to others! In any stage of your career (high school, college,
          university, online course, first job, second job, new career path) if
          you have questions, if you want help with resources, anything.. let us
          know, we'd love to try and help
        </p>
      </BodyCopy>
    </ContentContainer>

    <Contact
      heading={`Feel free to say hi! At Relashe we like to collaborate!`}
      className="scheme--brand-blue-light"
    />
  </PageMain>
)

export default Homepage
