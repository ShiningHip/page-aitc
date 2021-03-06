import React from 'react'
import Classname from 'classnames'
import style from './ImageListItemContent.scss'

export interface Props {
  containerType: string
  contentName: string
  children?: React.ReactNode
  linkDestination?: string
}

const ImageListItemContent: React.FC<Props> = ({ containerType, contentName, children, linkDestination }) => {
  const classNames = Classname(`${containerType}_list_item_${contentName}`)

  return (
    <>
      <style jsx>{style}</style>
      <div className={classNames}>
        {linkDestination ? (
          <a href={linkDestination} target="_blank">
            {children}
          </a>
        ) : (
          children
        )}
      </div>
    </>
  )
}

export default ImageListItemContent
