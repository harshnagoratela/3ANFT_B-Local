import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Logo = props => (
  <div className="site-logo">
    <Link to="/">
    <StaticImage
      src="../../static/assets/3anft-logo.jpg"
      alt="3A NFT Podcast "
      placeholder="none"
      layout="fixed"
      width={100}
      height={100}
      border="4px solid white"
      
    />

    </Link>

  </div>
)

export default Logo
