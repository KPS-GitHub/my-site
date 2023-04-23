import { get } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import RichText from './RichText'

const Wrap = styled.div``

const BasicContentSection = ({ data }) => {
    const title = get(data, 'title');
    const subtitle = get(data, 'subtitle');
    const richText = get(data, 'richText');
  return (
    <Wrap>
        {title && <h2> {title} </h2>}
        {subtitle && <h5> {subtitle} </h5>}
        <RichText richText={richText} />
    </Wrap>
  );
}

export default BasicContentSection
