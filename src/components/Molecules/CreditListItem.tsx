import React from 'react'
import style from './CreditListItem.scss'
import ListItemContent from 'components/Atoms/ListItemContent'

interface Props {
  role: string
  children: React.ReactNode
}

const CreditListItem: React.FC<Props> = ({ role, children }) => (
  <>
    <style jsx>{style}</style>
    <li className="credit_list_item">
      <ListItemContent containerType="credit" contentName="sub" isBold={false} text={role} />
      {children}
    </li>
  </>
)

export default CreditListItem
