import React from 'react'
import ImageContainer from 'components/Organisms/ImageContainer'
import ListItem from 'components/Molecules/ListItem'
import ImageListItemContent from 'components/Atoms/ImageListItemContent'
import Soundcloud from 'components/Organisms/Soundcloud'

const ImageContents: React.FC = () => (
  <section id="contents">
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
        <ImageListItemContent containerType="track" contentName="img">
          <img src="/static/AITC-0001/TrackList.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/eulious403">
          <img src="/static/AITC-0001/Track01.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/Euk_lid">
          <img src="/static/AITC-0001/Track02.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="">
          <img src="/static/AITC-0001/Track03.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="">
          <img src="/static/AITC-0001/Track04.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/__kyoichi">
          <img src="/static/AITC-0001/Track05.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/ZyuuziA8">
          <img src="/static/AITC-0001/Track06.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/tendon_dtm">
          <img src="/static/AITC-0001/Track07.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="track">
        <ImageListItemContent containerType="track" contentName="img" linkDestination="https://twitter.com/naki_00">
          <img src="/static/AITC-0001/Track08.png" alt="" />
        </ImageListItemContent>
      </ListItem>
    </ImageContainer>

    <ImageContainer containerType="credit">
      <ListItem containerType="credit">
        <ImageListItemContent containerType="credit" contentName="img">
          <img src="/static/AITC-0001/Credit.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="credit">
        <ImageListItemContent
          containerType="credit"
          contentName="img"
          linkDestination="https://twitter.com/yousei_kainushi"
        >
          <img src="/static/AITC-0001/CreditProduce.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="credit">
        <ImageListItemContent
          containerType="credit"
          contentName="img"
          linkDestination="https://twitter.com/yousei_kainushi"
        >
          <img src="/static/AITC-0001/CreditArtwork.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="credit">
        <ImageListItemContent containerType="credit" contentName="img" linkDestination="https://twitter.com/leafchina">
          <img src="/static/AITC-0001/CreditDesign.png" alt="" />
        </ImageListItemContent>
      </ListItem>
      <ListItem containerType="credit">
        <ImageListItemContent containerType="credit" contentName="img">
          <img src="/static/AITC-0001/CreditWeb.png" alt="" />
        </ImageListItemContent>
      </ListItem>
    </ImageContainer>
  </section>
)
export default ImageContents
