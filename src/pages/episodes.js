/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../components/layout"
import EpisodeCard from "../components/episode-card"
import Seo from "../components/seo"

const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const episodesListQuery = graphql`
  query episodesListQuery {
    episodes: allFeedEpisodes(
      sort: {fields: isoDate, order: DESC}, 
    ) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
          date: isoDate(formatString: "MMMM DD, YYYY")
          link
          content {
            encoded
            encodedSnippet
          }
        }
      }
    }
  }
`
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)
class Episodes extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/episodes/"
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const episodes = data.episodes.edges
      .filter(edge => !!edge.node.date)
      .map(edge => <EpisodeCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    const podbeanPlayer = `<iframe title="All About Affordable NFTs" allowtransparency="true" height="315" width="100%" style="border: none; min-width: min(100%, 430px);" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=kct8g-c2e113-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=2baf9e&size=315" allowfullscreen=""></iframe>`;

    // console.log("***** data",episodes)

    return (
      <Layout className="blog-page">
        <Seo
          title={"Episodes — Page " + currentPage + " of " + numPages}
          description={
            "3A NFT episodes " + currentPage + " of " + numPages
          }
        />
        <h1>3A NFT Episodes</h1>
        <div
          className="podplayer"
          dangerouslySetInnerHTML={{ __html: podbeanPlayer }}
        />
        <div className="grids col-1 sm-2 lg-3">{episodes}</div>
        {/* <Pagination {...props} /> */}
      </Layout>
    )
  }
}

export default Episodes
