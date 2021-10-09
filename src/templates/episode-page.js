/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowLeftSLine } from "react-icons/ri"
import { SiSpotify, SiApplepodcasts, SiGooglepodcasts } from "react-icons/si"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Episode = ({ data, pageContext }) => {
  const { feedEpisodes } = data // data.markdownRemark holds your post data
  const { title, date, link, contentSnippet, content, enclosure } = feedEpisodes

  return (
    <Layout className="page">
      <Seo
        title={title}
        description={contentSnippet}
        article={true}
      />
      <article className="blog-post">
        <Link to="/episodes/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Back to All Episodes
        </Link>
        <header className="featured-banner">
          <section className="article-header">
            <h1>{title}</h1>
            <time sx={{ color: "muted" }}>{date}</time>
          </section>
        </header>
        <div className="blog-post-content">
          {enclosure && enclosure.url &&
            <audio controls style={{ width: '100%' }}>
              <source src={enclosure.url} />
            </audio>
          }
        </div>
        <div
          className="social-icons"
          style={{justifyContent: 'center'}}
          sx={{
            variant: "variants.socialIcons",
          }}
        >
          <Link to={`https://podcasts.apple.com/us/podcast/all-about-affordable-nfts/id1586490838`} target="_blank">
            <SiApplepodcasts />
          </Link>
          <Link to={`https://open.spotify.com/show/4JPeNkNEtJc2rAzdCMlRWl?si=1b961d00601240fa`} target="_blank">
            <SiSpotify />
          </Link>
          <Link to={`https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL0FmZm9yZGFibGVORlQvZmVlZC54bWw?sa=X&ved=0CAMQ4aUDahcKEwiQ0Y7lo7rzAhUAAAAAHQAAAAAQAQ&hl=en`} target="_blank">
            <SiGooglepodcasts />
          </Link>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content.encoded }}
        />
      </article>
    </Layout>
  )
}

export default Episode

export const pageQuery = graphql`
  query EpisodeQuery($id: String!) {
    feedEpisodes(id: { eq: $id }) {
      id
      title
      date: isoDate(formatString: "MMMM DD, YYYY")
      link
      contentSnippet
      content {
        encoded
      }
      enclosure {
        url
      }
    }
  }
`
