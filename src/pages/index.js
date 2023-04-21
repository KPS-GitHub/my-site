import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const pages = get(this, 'props.data.allContentfulPage.nodes')

    return (
      <Layout>
        <Hero
          // image={author.heroImage.gatsbyImage}
        />
        <ArticlePreview pages={pages} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPage(sort: { title: DESC }) {
      nodes {
        title
        slug
      }
    }
  }
`
