import React from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import "jquery"
import "bootstrap"
import ReactMarkdown from "react-markdown";

import rehypeReact from "rehype-react"
import RenderYoutubeEl from "../components/RenderYoutubeEl"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const TpvProductsTemplate = ({ productsSection, productsSectionAst }) => {
  const cEAbgLeft = productsSection.abgebende_eltern.abgebende_eltern_left_columns
  //const cEAbgRight = productsSection.abgebende_eltern.abgebende_eltern_right_columns
  //const cETagLeft = productsSection.tagesfamilien.tagesfamilien_left_columns
  //const cETagRight = productsSection.tagesfamilien.tagesfamilien_right_columns

console.log(productsSection);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "render-youtube-element": RenderYoutubeEl},
}).Compiler

//console.log(productsSection);


  return (
    <React.Fragment>
      <section id="products" className="products">
        <div className="container">
          <div className="citation row">
            <div className="col-sm-12">
              {productsSection.product_claim}
            </div>
          </div>

          <div className="tpv-products-nav" id="tpv-products-nav">
            <div className="tpv-products-nav-header row">
              <div
                id="heading-abgebende"
                className="col-md-6 heading-abgebende "
              >
                <a
                  className="btn btn-tpv-products"
                  data-toggle="collapse"
                  href="#abgebende-eltern-content"
                  role="button"
                  aria-expanded="false"
                  aria-controls="abgebende-eltern-content"
                  data-target="#abgebende-eltern-content"
                >
                  <div>{productsSection.abgebende_eltern.heading}</div>
                  {productsSection.abgebende_eltern.subheading}
                </a>
              </div>

              <div
                id="heading-tagesfamilien"
                className="heading-tagesfamilien col-md-6"
              >
                <a
                  className="btn btn-tpv-products"
                  data-toggle="collapse"
                  href="#tagesfamilien-content"
                  role="button"
                  aria-expanded="false"
                  aria-controls="tagesfamilien-content"
                  data-target="#tagesfamilien-content"
                >
                  <div>{productsSection.tagesfamilien.heading}</div>
                  {productsSection.tagesfamilien.subheading}
                </a>
              </div>
            </div>
            <div className="tpv-products-contents">
              <div className="tpv-products-nav-header mobile">
                <div id="heading-abgebende" className="heading-abgebende ">
                  <a
                    className="btn btn-tpv-products"
                    data-toggle="collapse"
                    href="#abgebende-eltern-content"
                    role="button"
                    aria-expanded="false"
                    aria-controls="abgebende-eltern-content"
                    data-target="#abgebende-eltern-content"
                  >
                    <div>{productsSection.abgebende_eltern.heading}</div>
                    {productsSection.abgebende_eltern.subheading}
                  </a>
                </div>
              </div>

              <div
                className="collapse"
                id="abgebende-eltern-content"
                data-parent="#tpv-products-nav"
              >
                <div className="card card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-8">

                      {cEAbgLeft && (
                        <div >
                          {cEAbgLeft.map((contentElement, index) => (
                            <span key={index}>
                              <h4>{contentElement.headline}</h4>

{contentElement.contents}
<ReactMarkdown source={contentElement.contents} ></ReactMarkdown>

{renderAst(productsSectionAst)}

                            </span>
                          ))}
                        </div>
                      )}

                      <h4>Die Vermittlungsstelle bietet Ihnen:</h4>
                      <ul>
                        <li>
                          einen <a href="#tpvlink">Betreuungsplatz</a> in der
                          Tagesfamilie, die Ihren Bedürfnissen entspricht
                        </li>
                        <li>
                          Begleitung und Beratung während des
                          Betreuungsverhältnisses
                        </li>
                        <li>die Regelung der Tarifgestaltung</li>
                        <li>
                          die Regelung der Administration und des Inkassos
                        </li>
                        <li>Hilfe bei Versicherungsfragen</li>
                      </ul>

                      <h4>Unsere Leistungen im Detail</h4>

                      <div id="tpv-accordion" className="tpv-accordion">
                        <div className="card">
                          <div
                            className="card-header"
                            id="professional-support-heading"
                          >
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#professional-support"
                                aria-expanded="false"
                                aria-controls="professional-support"
                              >
                                Fachliche Unterstützung
                              </button>
                            </h5>
                          </div>
                          <div
                            id="professional-support"
                            className="collapse"
                            aria-labelledby="professional-support-heading"
                            data-parent="#tpv-accordion"
                          >
                            <div className="card-body">
                              <ul>
                                <li>
                                  Die Vermittlerin hilft Ihnen, eine für Ihr
                                  Kind passende Tagesmutter/Tagesvater zu suchen
                                  und führt gemeinsam mit Ihnen die Gespräche.
                                </li>
                                <li>
                                  Die Vermittlerin steht Ihnen bei Fragen und
                                  Problemen zu Verfügung und führt mit Ihnen und
                                  den Tageseltern regelmässige Gespräche, um
                                  auftauchende Unklarheiten oder Schwierigkeiten
                                  gemeinsam konstruktiv anzugehen.
                                </li>
                                <li>
                                  Sie können vom Weiterbildungs- und
                                  Veranstaltungsangebot der
                                  Tagesfamilien-Organisation Gebrauch machen.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div
                            className="card-header"
                            id="legal-security-heading"
                          >
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#legal-security"
                                aria-expanded="false"
                                aria-controls="legal-security"
                              >
                                Rechtliche Sicherung
                              </button>
                            </h5>
                          </div>
                          <div
                            id="legal-security"
                            className="collapse"
                            aria-labelledby="legal-security-heading"
                            data-parent="#tpv-accordion"
                          >
                            <div className="card-body">
                              <ul>
                                <li>
                                  Die Tagesfamilien-Organisation schliesst mit
                                  Ihnen einen Vertrag ab, worin alle
                                  Vereinbarungen klar geregelt sind.
                                </li>
                                <li>
                                  Die Tagesfamilien-Organisation sorgt dafür,
                                  dass die rechtlichen Bestimmungen der
                                  Pflegekinderverordnung eingehalten werden
                                  (Meldepflicht der Tagesmutter/Tagesvater und
                                  gegebenenfalls Bewilligung).
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4 tpv-side-bar">
                      <h4>Downloads</h4>
                      <ul className="file-download-list">
                        <li>
                          <a href="#tpvlink" className="pdflink">
                            Informationsblatt für Eltern
                          </a>
                        </li>
                        <li>
                          <a href="#tpvlink" className="pdflink">
                            Anmeldung
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tpv-products-nav-header mobile">
                <div
                  id="heading-tagesfamilien"
                  className="heading-tagesfamilien"
                >
                  <a
                    className="btn btn-tpv-products"
                    data-toggle="collapse"
                    href="#tagesfamilien-content"
                    role="button"
                    aria-expanded="false"
                    aria-controls="tagesfamilien-content"
                    data-target="#tagesfamilien-content"
                  >
                    <div>Tagesfamilien</div>
                    Möchten Sie in Ihrer Familie Kinder betreuen?
                  </a>
                </div>
              </div>

              <div
                className="collapse"
                id="tagesfamilien-content"
                data-parent="#tpv-products-nav"
              >
                <div className="card card-body">
                  Als Tagesfamilie haben Sie:
                  <ul>
                    <li>Freude und Erfahrung im Umgang mit Kindern</li>
                    <li>die Bereitschaft, die Familie zu öffnen</li>
                    <li>genügend Zeit und Platz</li>
                    <li>Verständnis, Geduld und Toleranz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export const TpvInfosTemplate = ({ infoSections }) => {
  return (
    <React.Fragment>
      {infoSections.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
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
        )
      })}
    </React.Fragment>
  )
}

class TpvOnepage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    const { frontmatter: productsSection, htmlAst: productsSectionAst } = data.productsSection.edges[0].node
    const infoSections = data.infoSections.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <TpvProductsTemplate productsSection={productsSection} productsSectionAst={productsSectionAst} />
        <TpvInfosTemplate infoSections={infoSections} />
      </Layout>
    )
  }
}


TpvOnepage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TpvOnepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    ...ApiQueriesFragment
  }
`
