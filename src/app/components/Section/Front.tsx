import React from 'react'
import style from './Front.scss'

const Front: React.FC = () => (
  <>
    <style jsx>{style}</style>
    <div id="background" className="center"></div>
    <section id="front" className="center">
      <div className="front_display"></div>
    </section>
  </>
)

export default Front
