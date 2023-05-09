import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div``
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const RichText = ({ richText }) => {
  return <Wrap>
    {renderRichText(richText, options)}
    {/* {console.log('richText from RichText component: ', richText)}
    {console.log('options from RichText component: ', options)} */}
    </Wrap>
}

export default RichText

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return ( 
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // console.log('JSON.stringify(node,null,2) using node from BLOCKS.EMBEDDED_ENTRY: ', JSON.stringify(node,null,2))
      return ( 
        <>
          <h2>Embedded Entry</h2>          
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}
