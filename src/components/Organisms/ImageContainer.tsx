import React from 'react'
import style from './ImageContainer.scss'

interface Props {
  containerType: string
  children: React.ReactNode
}

const ImageContainer: React.FC<Props> = (props: Props) => (
  <>
    <style jsx>{style}</style>
    <div className={`${props.containerType} container`}>
      <div className={`${props.containerType}_container image`}>
        <ul className={`${props.containerType}_list image`}>{props.children}</ul>
      </div>
    </div>
  </>
)

export default ImageContainer
