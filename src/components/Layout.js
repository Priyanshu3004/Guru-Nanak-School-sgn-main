import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout(props) {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <Navbar />
      <div className="content">
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout