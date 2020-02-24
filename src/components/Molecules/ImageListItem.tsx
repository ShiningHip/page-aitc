import React from 'react'
import style from './ImageListItem.scss'

interface Props {
  containerType: string
  children: React.ReactNode
}

const ImageListItem: React.FC<Props> = (props: Props) => (
  <>
    <style jsx>{style}</style>
    <li className={`${props.containerType}_list_item images`}>{props.children}</li>
  </>
)

export default ImageListItem
