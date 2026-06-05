/**
 * SEO component for page metadata, canonical URLs, social previews, and JSON-LD.
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const absoluteUrl = (siteUrl, path = "") => {
  if (!path) return siteUrl
  if (/^https?:\/\//.test(path)) return path
  return `${siteUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`
}

function SEO({ description, image, lang, meta, keywords, pathname, schema, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const siteMetadata = site.siteMetadata
  const metaDescription = description || siteMetadata.description
  const siteUrl = siteMetadata.siteUrl || "https://www.atjiujitsunyc.com"
  const canonical = absoluteUrl(siteUrl, pathname)
  const previewImage = absoluteUrl(siteUrl, image || "/img/og-image.jpg")

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={[{ rel: "canonical", href: canonical }]}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `robots`, content: `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1` },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:url`, content: canonical },
        { property: `og:image`, content: previewImage },
        { property: `og:site_name`, content: siteMetadata.title },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:creator`, content: siteMetadata.author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image`, content: previewImage },
      ]
        .concat(
          keywords && keywords.length > 0
            ? { name: `keywords`, content: keywords.join(`, `) }
            : []
        )
        .concat(meta)}
    >
      {schema && schema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schema.length === 1 ? schema[0] : schema)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  image: `/img/og-image.jpg`,
  pathname: `/`,
  schema: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  pathname: PropTypes.string,
  schema: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
