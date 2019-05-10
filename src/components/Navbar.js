import React from "react"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
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
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <React.Fragment>

              <div className="mainnav">
                <nav className="navbar" data-target="navMenu" id="mainNav">
                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsTpv"
                    aria-controls="navbarsTpv"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar" />
                    <span className="icon-bar middle-bar" />
                    <span className="icon-bar bottom-bar" />
                  </button>
                  <div className="navbar-collapse collapse" id="navbarsTpv">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a
                          className="nav-link js-scroll-trigger"
                          href="#products"
                        >
                          Angebot <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#club">
                          Verein
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#news">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link js-scroll-trigger"
                          href="#donation"
                        >
                          Spenden
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link js-scroll-trigger"
                          href="#contact"
                        >
                          Kontakt
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
 
      </React.Fragment>
    )
  }
}

export default Navbar
