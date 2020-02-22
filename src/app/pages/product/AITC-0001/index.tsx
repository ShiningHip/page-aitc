import React from 'react'
import Layout from 'app/components/Layout'
import Front from 'app/components/Section/Front'
import Contents from 'app/components/Section/Contents'
import Footer from 'app/components/Section/Footer'

const Index: React.FC = () => (
  <Layout>
    <Front />
    <Contents />
    <Footer />
  </Layout>
)

export default Index
