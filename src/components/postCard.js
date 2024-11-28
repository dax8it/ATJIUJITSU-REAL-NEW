import React, { Component } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tags from "./tag"

export default props => {
  const thumbnail = props.node.frontmatter.thumbnail ? getImage(props.node.frontmatter.thumbnail) : null
  return (
    <article
      className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
        props.postClass
      } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    >
      {thumbnail ? (
        <ContentWithImage props={props} thumbnail={thumbnail} />
      ) : (
        <ContentNoImage props={props} />
      )}
    </article>
  )
}

class ContentNoImage extends Component {
  render() {
    const { props } = this.props
    return (
      <div className="post-card-content">
        <div>
          <Tags tags={props.node.frontmatter.tags} />
        </div>
        <div>
          <Link to={props.node.fields.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
          </Link>
        </div>
        <div className="post-card-body">
          {props.node.frontmatter.description || props.node.excerpt}
        </div>
        <div>
          <Link
            to={props.node.fields.slug}
            className="post-card-link post-card-readmore"
          >
            {props.node.frontmatter.description || props.node.excerpt
              ? "Read more"
              : null}
          </Link>
        </div>
      </div>
    )
  }
}

class ContentWithImage extends Component {
  render() {
    const { props, thumbnail } = this.props
    return (
      <div className="post-card-content">
        <div className="post-card-image-link">
          <GatsbyImage image={thumbnail} alt={props.node.frontmatter.title} className="kg-image" />
        </div>
        <div className="post-card-content-link">
          <Link to={props.node.fields.slug} className="post-card-link">
            <h2 className="post-card-title">
              {props.node.frontmatter.title || props.node.fields.slug}
            </h2>
          </Link>
        </div>
      </div>
    )
  }
}
