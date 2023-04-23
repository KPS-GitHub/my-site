import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import BasicContentSection from '../components/ContentSection/BasicContentSection'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage')
    // console.log('page: ', page)
    const sections = get(page, 'sections')
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
        <br />
        sections:
        {sections &&
          sections.map((sec, i) => {
            // console.log('sec: ', sec)
            return (
              <BasicContentSection data={sec} />
            )
          })}
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
      sections {
        title
        subtitle
        richText {
          raw
        }
      }
    }
  }
`
