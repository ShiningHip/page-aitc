import React from 'react'
import { Context } from 'vm'

const Index = () => <></>
Index.getInitialProps = async ({ res }: Context) => {
  if (res) {
    res.writeHead(302, { Location: '/product/AITC-0001' })
    res.end()
  }
}
export default Index
