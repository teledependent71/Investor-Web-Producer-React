import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Limited Pleased Bear</title>
        <meta property="og:title" content="Limited Pleased Bear" />
      </Helmet>
    </div>
  )
}

export default Home
