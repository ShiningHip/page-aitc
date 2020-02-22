import React from 'react'
import style from './ListItem.scss'

interface Props {
  containerType: string
  children: React.ReactNode
}

const ListItem: React.FC<Props> = (props: Props) => (
  <>
    <style jsx>{style}</style>
    <li className={`${props.containerType}_list_item`}>{props.children}</li>
  </>
)

export default ListItem
