import React from 'react'

import Helmet from "react-helmet"

import Footer from './Footer'
import Navbar from './Navbar'

import tpvlogo from '../../static/img/tpv-logo.svg'

import kibesuisselogo from '../../static/img/kibesuisse-logo-white.png'


//import 'bootstrap'
import './main.scss'


const TemplateWrapper = ({ children }) => {

  return (
    <React.Fragment>
          <Helmet>

          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet" />
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />


      </Helmet>
  <header className="logo-nav-top ">
    <div>
      <div>
        <div>
          <span className="organisation-logo">
            <a id="tpv-logo-link" href="#page-top" alt="tpv logo" className="js-scroll-trigger">
            <img className="tpvlogo" src={tpvlogo} alt="tpv" />
            </a>
          </span>
          <span className="organisation-name">
            tagesplatzvermittlung<br />
            REGION ENTLEBUCH
          </span>
        </div>

      <Navbar />

      </div>
    </div>
  </header>

    <main role="main" >
    <div className="ambient-img-fullwidth-claim">
      <div>
        <div>
          <div>
            <p>
              Wir vermitteln <br />
              Kinderbetreuung für <br />
              Klein- und Schulkinder in <br />
              Tagesfamilien.
            </p>
            <span>
              Stundenweise, mittags, halbtags und ganztags
            </span>
            <img className="kibesuisse-logo" src={kibesuisselogo} alt="kibesuisse logo" />
          </div>
        </div>
      </div>
    </div>
 {children}
</main>

     
      <Footer />
   </React.Fragment>
  )
}

export default TemplateWrapper
