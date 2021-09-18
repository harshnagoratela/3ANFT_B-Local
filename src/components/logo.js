import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Logo = props => (
  <div className="site-logo">
    <Link to="/">
    <StaticImage
      src="https://i.imgur.com/nu1zyDDm.jpg"
      alt="3A NFT Podcast "
      placeholder="blurred"
      layout="fixed"
      width={80}
      height={80}
    />

    </Link>

  </div>
)

export default Logo
