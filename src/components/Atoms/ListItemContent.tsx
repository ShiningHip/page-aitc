import React from 'react'
import Classname from 'classnames'
import style from './ListItemContent.scss'

export interface Props {
  containerType: string
  contentName: string
  fontSize?: string
  isBold: boolean
  text: string
  linkDestination?: string
}

const ListItemContent: React.FC<Props> = ({ containerType, contentName, fontSize, isBold, text, linkDestination }) => {
  const classNames = Classname(`${containerType}_list_item_${contentName}`, fontSize, { bold: isBold })

  return (
    <>
      <style jsx>{style}</style>
      <span className={classNames}>
        {linkDestination ? (
          <a href={linkDestination} target="_blank">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </>
  )
}

export default ListItemContent
