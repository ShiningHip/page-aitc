import React from 'react'
import style from './Footer.scss'

const Footer: React.FC = () => (
  <>
    <style jsx>{style}</style>
    <footer>
      <div className="footer_ground">
        <div className="footer_logo"></div>
        <span>Copyright 2020 AITC All Rights Reserved.</span>
      </div>
    </footer>
  </>
)

export default Footer
