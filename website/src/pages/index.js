import React from "react"
import { Teaser, HomeBanner, PageMain } from "relashing";
import "../styles/styles.scss";

export default () => (
    <PageMain>
        <HomeBanner
            title="A digital team focused on all things web."
            intro={`Relashe, we got it.`}
            className="scheme--brand-blue-dark"
        />
        <Teaser 
            content="Relashe is a solutions team focused on client experiences and close relationships with brands and businesses."
        />
    </PageMain>
);
