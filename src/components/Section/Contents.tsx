import React from 'react'
import Container from 'components/Organisms/Container'
import ListItem from 'components/Molecules/ListItem'
import TrackListItem from 'components/Molecules/TrackListItem'
import InfoListItemContent from 'components/Atoms/InfoListItemContent'
import CreditListItem from 'components/Molecules/CreditListItem'
import CreditListItemContent from 'components/Atoms/CreditListItemContent'
import Soundcloud from 'components/Organisms/Soundcloud'

const Contents: React.FC = () => (
  <section id="contents">
    <Container containerType="info" subtitle="AITC-0001">
      <ListItem containerType="info">
        <InfoListItemContent fontSize="f20" text="2020-03-01" />
        <InfoListItemContent fontSize="f30" text="2020-春M3" />
        <InfoListItemContent fontSize="f20" text="第一展示場" />
        <br />
        <br />
        <InfoListItemContent fontSize="f80" text="I-21a" />
        <br />
        <br />
        <br />
        <br />
      </ListItem>
      <ListItem containerType="info">
        <InfoListItemContent fontSize="f120" text="AITC" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <InfoListItemContent fontSize="f50" text="1,000 YEN" />
      </ListItem>
    </Container>

    <Soundcloud />

    <Container containerType="track" subtitle="TRACK LIST">
      <TrackListItem no="1" title="StrawFlower" artist="eulious" />
      <TrackListItem no="2" title="Septendecim" artist="Euk" />
      <TrackListItem no="3" title="Awaking" artist="やながわ" />
      <TrackListItem no="4" title="Cloudy" artist="くらゆき" />
      <TrackListItem no="5" title="Rainy celestite" artist="響一" />
      <TrackListItem no="6" title="decode" artist="zyuuziro" />
      <TrackListItem no="7" title="Wonky Blocking" artist="TENDON" />
      <TrackListItem no="8" title="Query" artist="Naki" />
    </Container>

    <Container containerType="credit" subtitle=" ">
      <CreditListItem role="Sound">
        <CreditListItemContent name="eulious" url="https://twitter.com/eulious403" />
        <CreditListItemContent name="Euk" url="https://twitter.com/Euk_lid" />
        <CreditListItemContent name="やながわ" />
        <CreditListItemContent name="くらゆき" />
        <CreditListItemContent name="響一" url="https://twitter.com/__kyoichi" />
        <CreditListItemContent name="zyuuziro" url="https://twitter.com/ZyuuziA8" />
        <CreditListItemContent name="TENDON" url="https://twitter.com/tendon_dtm" />
        <CreditListItemContent name="Naki" url="https://twitter.com/naki_00" />
      </CreditListItem>
      <CreditListItem role="Artwork">
        <CreditListItemContent name="Radiosity" url="https://twitter.com/yousei_kainushi" />
      </CreditListItem>
      <CreditListItem role="Design">
        <CreditListItemContent name="Leaf7" url="https://twitter.com/leafchina" />
      </CreditListItem>
      <CreditListItem role="Trailer MV">
        <CreditListItemContent name="Naki" url="https://twitter.com/naki_00" />
      </CreditListItem>
      <CreditListItem role="Direction">
        <CreditListItemContent name="Radiosity" url="https://twitter.com/yousei_kainushi" />
      </CreditListItem>
      <CreditListItem role="Produce">
        <CreditListItemContent name="AITC" />
      </CreditListItem>
    </Container>
  </section>
)

export default Contents
