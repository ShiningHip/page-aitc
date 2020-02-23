import React from 'react'
import Layout from 'components/Layout'
import Front from 'components/Section/Front'
import ImageContainer from 'components/Organisms/ImageContainer'
import ListItem from 'components/Molecules/ListItem'
import ImageListItemContent from 'components/Atoms/ImageListItemContent'
import Soundcloud from 'components/Organisms/Soundcloud'

const Index: React.FC = () => (
  <Layout>
    <Front />
    <ImageContainer containerType="info">
      <ListItem containerType="info">
        <img src="/static/AITC-0001/topMessage.png" alt="" />
      </ListItem>
      <ListItem containerType="info">
        <ImageListItemContent containerType="info" contentName="jacket">
          <img src="/static/AITC-0001/jacketFront.png" alt="" />
        </ImageListItemContent>
        <ImageListItemContent containerType="info" contentName="text">
          <img src="/static/AITC-0001/InfoText.png" alt="" />
        </ImageListItemContent>
      </ListItem>
    </ImageContainer>

    <Soundcloud />

    <ImageContainer containerType="track">
      <ListItem containerType="track">
        <img src="/static/AITC-0001/TrackList.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track01.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track02.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track03.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track04.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track05.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track06.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track07.png" alt="" />
      </ListItem>
      <ListItem containerType="track">
        <img src="/static/AITC-0001/Track08.png" alt="" />
      </ListItem>
    </ImageContainer>

    <ImageContainer containerType="credit">
      <ListItem containerType="credit">
        <img src="/static/AITC-0001/Credit.png" alt="" />
      </ListItem>
      <ListItem containerType="credit">
        <img src="/static/AITC-0001/CreditProduce.png" alt="" />
      </ListItem>
      <ListItem containerType="credit">
        <img src="/static/AITC-0001/CreditArtwork.png" alt="" />
      </ListItem>
      <ListItem containerType="credit">
        <img src="/static/AITC-0001/CreditDesign.png" alt="" />
      </ListItem>
      <ListItem containerType="credit">
        <img src="/static/AITC-0001/CreditWeb.png" alt="" />
      </ListItem>
    </ImageContainer>
  </Layout>
)
export default Index
