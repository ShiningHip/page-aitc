import React from 'react'
import Layout from 'components/Layout'
import Front from 'components/Section/Front'
import ImageContainer from 'components/Organisms/ImageContainer'
import ListItem from 'components/Molecules/ListItem'

const Index: React.FC = () => (
  <Layout>
    <Front />
    <ImageContainer containerType="info">
      <ListItem containerType="info">
        <img src="/static/AITC-0001/topMessage.png" alt="" />
      </ListItem>
      <ListItem containerType="info">
        <img src="/static/AITC-0001/jacketFront.png" alt="" />
      </ListItem>
    </ImageContainer>
  </Layout>
)
export default Index
