import React from 'react'
import Layout from 'components/Layout'
import Front from 'components/Section/Front'
import Footer from 'components/Section/Footer'
import ImageContents from 'components/Section/ImageContents'

const Index: React.FC = () => (
  <Layout>
    <Front />
    <ImageContents />
    <Footer />
  </Layout>
)
export default Index
