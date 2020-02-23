import React from 'react'
import Header from 'components/Header'
import styleFont from './Font.scss'
import styleGlobal from './Global.scss'
import styleMain from './Layout.scss'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <style jsx>{styleFont}</style>
    <style jsx>{styleGlobal}</style>
    <style jsx>{styleMain}</style>
    <Header />
    {children}
  </>
)

export default Layout
