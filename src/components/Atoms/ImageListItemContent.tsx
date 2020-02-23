import React from 'react'
import Classname from 'classnames'
import style from './ImageListItemContent.scss'

export interface Props {
  containerType: string
  contentName: string
  children: React.ReactNode
  linkDestination?: string
}

const ImageListItemContent: React.FC<Props> = ({ containerType, contentName, children, linkDestination }) => {
  const classNames = Classname(`${containerType}_list_item_${contentName}`, 'images')

  return (
    <>
      <style jsx>{style}</style>
      <span className={classNames}>
        {linkDestination ? (
          <a href={linkDestination} target="_blank">
            {children}
          </a>
        ) : (
          children
        )}
      </span>
    </>
  )
}

export default ImageListItemContent
