import '../assets/global.scss'

import App from 'next/app'
import React from 'react'

import { Footer, Header } from '../components'

class MovieMate extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default MovieMate
