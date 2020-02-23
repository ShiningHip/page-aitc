import React from 'react'
import style from './Soundcloud.scss'

const Soundcloud: React.FC = () => (
  <>
    <style jsx>{style}</style>
    <div className="soundcloud">
      <div className="soundcloud_container">
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/549842910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </div>
  </>
)

export default Soundcloud
