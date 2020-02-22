import React from 'react'
import style from './CreditListItemContent.scss'
import ListItemContent from './ListItemContent'

interface Props {
  name: string
  url?: string
}

const CreditListItemContent: React.FC<Props> = (props: Props) => (
  <>
    <style jsx>{style}</style>
    <ListItemContent
      containerType="credit"
      contentName="name"
      isBold={true}
      text={props.name}
      linkDestination={props.url}
    />
  </>
)

export default CreditListItemContent
