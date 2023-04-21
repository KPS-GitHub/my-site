import React from 'react'
import { 
  graphql 
} from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={page.title}
          // description={plainTextDescription}
          // image={`http:${page.heroImage.resize.src}`}
        />
        <Hero
          image={page.heroImage?.gatsbyImage}
          title={page.title}
          content={page.description}
        />
        page template
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug(
    $slug: String!
  ) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
    }
  }
`
