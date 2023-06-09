import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/Blog_CurrentlyUnused/article-preview'

class BlogIndex extends React.Component {
  render() {
    const pages = get(this, 'props.data.allContentfulPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Page" />
        <Hero title="Page" />
        <ArticlePreview pages={pages} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPage(sort: { title: DESC }) {
      nodes {
        title
        slug
      }
    }
  }
`
