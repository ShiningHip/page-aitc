import React from 'react'
import style from './Container.scss'

interface Props {
  containerType: string
  subtitle?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = (props: Props) => (
  <>
    <style jsx>{style}</style>
    <div className={`${props.containerType} container`}>
      <div className={`${props.containerType}_container`}>
        {props.subtitle ? <h1 className="subtitle">{props.subtitle}</h1> : null}
        <ul className={`${props.containerType}_list`}>{props.children}</ul>
      </div>
    </div>
  </>
)

export default Container
