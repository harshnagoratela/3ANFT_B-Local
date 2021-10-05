/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import EpisodeCard from "./episode-card"

export default function EpisodeList(props) {
  const data = props.data    
  const posts = data.edges
    .filter(edge => !!edge.node.date)
    .map(edge => <EpisodeCard key={edge.node.id} data={edge.node} />)
  return <EpisodeMaker data={posts} />
}

const EpisodeMaker = ({ data }) => (
  <section className="home-posts">
    <h2>
      Episodes{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
    <Link
      className="button"
      to="/episodes"
      sx={{
        variant: "variants.button",
      }}
    >
      See more
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
