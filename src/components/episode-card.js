/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const EpisodeCard = ({ data }) => (
  <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
    <a href={data.link} target="_blank">
      {data.featuredImage ? (
        <GatsbyImage
          image={data.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.title + " - Featured image"}
          className="featured-image"
        />
      ) : (
        <img 
          src="/assets/pod-pic.png" 
          alt={data.title + " - Featured image"}
          className="featured-image"
        />
      )}
    </a>
    <div className="post-content">
      <h2 className="title">
        <a
          href={data.link}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.title}
        </a>
      </h2>
      <p
        className="meta"
        sx={{
          color: "muted",
        }}
      >
        <time>{data.date}</time>
      </p>
    </div>
  </article>
)

export default EpisodeCard
