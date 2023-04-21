import React from 'react'
import { Link } from 'gatsby'

import Container from '../container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ pages }) => {
  if (!pages) return null
  if (!Array.isArray(pages)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {pages.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                {/* <GatsbyImage alt="" image={post.heroImage.gatsbyImage} /> */}
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {/* {post.description?.raw && renderRichText(post.description)} */}
              </div>
              <div className={styles.meta}>
                {/* <small className="meta">{post.publishDate}</small> */}
                {/* <Tags tags={post.tags} /> */}
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
