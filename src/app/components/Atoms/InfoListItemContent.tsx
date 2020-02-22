import React from 'react'
import style from './InfoListItemContent.scss'
import ListItemContent from './ListItemContent'

interface Props {
  fontSize: string
  text: string
}

const InfoListItemContent: React.FC<Props> = ({ fontSize, text }) => (
  <>
    <style jsx>{style}</style>
    <ListItemContent containerType="info" contentName="content" fontSize={fontSize} isBold={true} text={text} />
  </>
)

export default InfoListItemContent
