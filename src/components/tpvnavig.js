import React from 'react'
import { Link } from 'gatsby'
import tpvlogo from '../../static/img/tpv-logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <React.Fragment>







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
        <div className="mainnav">
          <nav className="navbar" data-target="navMenu"  id="mainNav">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsTpv" aria-controls="navbarsTpv" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.toggleHamburger()}>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>       
            </button>
            <div className={`navbar-collapse navbar-menu ${this.state.navBarActiveClass}`} id="navbarsTpv">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link js-scroll-trigger" href="#products">Angebot <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#club">Verein</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#news">News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#donation">Spenden</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Kontakt</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>



</React.Fragment>








    )
  }
}

export default Navbar
