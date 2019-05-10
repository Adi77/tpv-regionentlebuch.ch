import React from "react"
import { Link, graphql } from "gatsby"
import "jquery"
import "bootstrap"


import Layout from "../components/layout"
import SEO from "../components/seo"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const sections = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
 
        {sections.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
<React.Fragment>
<section id="products" class="products">
      <div class="container">

        <div class="citation row">
          <div class="col-sm-12">
            Kinder fühlen sich dort zu Hause, wo sie sich wohl fühlen.
          </div>
        </div>

        <div class="tpv-products-nav" id="tpv-products-nav">

          <div class="tpv-products-nav-header row">
            <div id="heading-abgebende" class="col-md-6 heading-abgebende ">
              <a class="btn btn-tpv-products" data-toggle="collapse" href="#abgebende-eltern-content" role="button" aria-expanded="false" aria-controls="abgebende-eltern-content" data-target="#abgebende-eltern-content">
                <div>
                  Abgebende Eltern
                </div>
                Suchen Sie für Ihr Kind einen Betreuungsplatz in einer Tagesfamilie?
              </a>
            </div>


            <div id="heading-tagesfamilien" class="heading-tagesfamilien col-md-6">
              <a class="btn btn-tpv-products" data-toggle="collapse" aria-expanded="false" href="#tagesfamilien-content" role="button" aria-expanded="false" aria-controls="tagesfamilien-content" data-target="#tagesfamilien-content">
                <div>
                  Tagesfamilien
                </div>
                Möchten Sie in Ihrer Familie Kinder betreuen?
              </a>
            </div>
          </div>
          <div class="tpv-products-contents">


            <div class="tpv-products-nav-header mobile">

              <div id="heading-abgebende" class="heading-abgebende ">
                <a class="btn btn-tpv-products" data-toggle="collapse" href="#abgebende-eltern-content" role="button" aria-expanded="false" aria-controls="abgebende-eltern-content" data-target="#abgebende-eltern-content">
                  <div>
                    Abgebende Eltern
                  </div>
                  Suchen Sie für Ihr Kind einen Betreuungsplatz in einer Tagesfamilie?
                </a>
              </div>

            </div>


            <div class="collapse" id="abgebende-eltern-content" data-parent="#tpv-products-nav">
              <div class="card card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-8">
                    <h4>
                      Die Vermittlungsstelle bietet Ihnen:
                    </h4>
                    <ul>
                      <li> 
                        einen <a href="#">Betreuungsplatz</a> in der Tagesfamilie, die Ihren Bedürfnissen entspricht
                      </li>
                      <li>Begleitung und Beratung während des Betreuungsverhältnisses
                      </li>
                      <li>die Regelung der Tarifgestaltung
                      </li>
                      <li>die Regelung der Administration und des Inkassos
                      </li>
                      <li>Hilfe bei Versicherungsfragen
                      </li>
                    </ul>
                    <h4>
                      Unsere Leistungen im Detail
                    </h4>

                    <div id="tpv-accordion" class="tpv-accordion">
                      <div class="card">
                        <div class="card-header" id="professional-support-heading">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#professional-support" aria-expanded="false" aria-controls="professional-support">
                              Fachliche Unterstützung
                            </button>
                          </h5>
                        </div>
                        <div id="professional-support" class="collapse" aria-labelledby="professional-support-heading" data-parent="#tpv-accordion">
                          <div class="card-body">
                            <ul>
                              <li>
                                Die Vermittlerin hilft Ihnen, eine für Ihr Kind passende Tagesmutter/Tagesvater zu suchen und
                                führt gemeinsam mit Ihnen die Gespräche.
                              </li>
                              <li>
                                Die Vermittlerin steht Ihnen bei Fragen und Problemen zu Verfügung und führt mit Ihnen und
                                den Tageseltern regelmässige Gespräche, um auftauchende Unklarheiten oder
                                Schwierigkeiten gemeinsam konstruktiv anzugehen.
                              </li>
                              <li>
                                Sie können vom Weiterbildungs- und Veranstaltungsangebot der Tagesfamilien-Organisation
                                Gebrauch machen.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="legal-security-heading">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#legal-security" aria-expanded="false" aria-controls="legal-security">
                              Rechtliche Sicherung
                            </button>
                          </h5>
                        </div>
                        <div id="legal-security" class="collapse" aria-labelledby="legal-security-heading" data-parent="#tpv-accordion">
                          <div class="card-body">
                            <ul>
                              <li>
                                Die Tagesfamilien-Organisation schliesst mit Ihnen einen Vertrag ab, worin alle
                                Vereinbarungen klar geregelt sind.
                              </li>
                              <li>
                                Die Tagesfamilien-Organisation sorgt dafür, dass die rechtlichen Bestimmungen der
                                Pflegekinderverordnung eingehalten werden (Meldepflicht der Tagesmutter/Tagesvater und
                                gegebenenfalls Bewilligung).
                              </li>
                            </ul>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-4 tpv-side-bar">
                    <h4>
                      Downloads
                    </h4>
                    <ul class="file-download-list">
                      <li>
                        <a href="#" class="pdflink" >
                          Informationsblatt für Eltern
                        </a>
                      </li>
                      <li>
                        <a href="#" class="pdflink" >
                          Anmeldung
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="tpv-products-nav-header mobile">

              <div id="heading-tagesfamilien" class="heading-tagesfamilien">
                <a class="btn btn-tpv-products" data-toggle="collapse" aria-expanded="false" href="#tagesfamilien-content" role="button" aria-expanded="false" aria-controls="tagesfamilien-content" data-target="#tagesfamilien-content">
                  <div>
                    Tagesfamilien
                  </div>
                  Möchten Sie in Ihrer Familie Kinder betreuen?
                </a>
              </div>

            </div>

            <div class="collapse" id="tagesfamilien-content" data-parent="#tpv-products-nav">
              <div class="card card-body">
                Als Tagesfamilie haben Sie:
                <ul>
                  <li>Freude und Erfahrung im Umgang mit Kindern
                  </li>
                  <li>die Bereitschaft, die Familie zu öffnen
                  </li>
                  <li>genügend Zeit und Platz
                  </li>
                  <li>Verständnis, Geduld und Toleranz
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


            <div key={node.fields.slug}>
<h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>



</React.Fragment>

          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
