import React from 'react'
import style from './TrackListItem.scss'
import ListItemContent from 'app/components/Atoms/ListItemContent'

interface Props {
  no: string
  title: string
  artist: string
}

const TrackListItem: React.FC<Props> = ({ no, title, artist }) => (
  <>
    <style jsx>{style}</style>
    <li className="track_list_item">
      <ListItemContent containerType="track" contentName="no" isBold={false} text={no} />
      <ListItemContent containerType="track" contentName="title" isBold={true} text={title} />
      <ListItemContent containerType="track" contentName="artist" isBold={false} text={artist} />
    </li>
  </>
)

export default TrackListItem
