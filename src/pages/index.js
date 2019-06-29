import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from "../components/Modal"

// import Landing from "../components/Landing"
import PortfolioLayout from "../components/PortfolioLayout"
import styles from "../styles/landingStyles.module.css"

const {aboutMeModal,
leavesImg,
slowImg,
aboutString,
landingPage,
landingImgDiv,
pageName} = styles

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    console.log("Running")
    this.setState(prevState => (prevState.showModal = !prevState.showModal))
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            prospect: file(relativePath: { eq: "Prospect.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            closeButton: file(relativePath: { eq: "close.png" }) {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            leaves: file(relativePath: { eq: "leavesJump.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slow: file(relativePath: { eq: "slow.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          const { prospect, leaves, slow } = data
          const { showModal } = this.state

          const landingString = "< Tim_Lowe"
          const landingString2 =" is = { this.Web-Engineer } "
          const landingString3 = "/>"
          const aboutString1 =
            "I'm a Full Stack Web and Software Engineer with 8 years experience in client relations. As former client relations specialist, I'm intrigued to balance user experience with platform functionality."
            const aboutString2 = "Proficient in assimilating unfamiliar practices, schedules, and languages; I'm thrilled to use contemporary tools in revolutionary ways to increase the quality of life for clients and the work experience of fellow developers."
          return (
            <PortfolioLayout imageData={data} page="home">
              {showModal ? (
                <Modal
                  imageData={data}
                  modalName="About Me"
                  toggleModal={this.toggleModal}
                >
                  <div className={aboutMeModal}>
                    <div className={leavesImg}>
                      <Img fluid={leaves.childImageSharp.fluid} alt="leaves" />
                    </div>

                    
                    <p className={aboutString}>{aboutString1}</p>
                    <div className={slowImg}>
                      <Img fluid={slow.childImageSharp.fluid} alt="slow" />
                    </div>
                    <p className={aboutString}>{aboutString2}</p>

                    
                  </div>
                </Modal>
              ) : null}

              <div className={landingPage}>
                <div className={landingImgDiv}>
                  <Img fluid={prospect.childImageSharp.fluid} alt="prospect" />
                  <div className={pageName}
                   onClick={() => this.toggleModal()}>
                     <p> {landingString}</p><p>{landingString2}</p><p>{landingString3}</p>
                     
                     
                  </div>
                 
                </div>
                <div >
                  
                </div>
              </div>
              {console.log("graphql data", data)}
            </PortfolioLayout>
          )
        }}
      />
    )
  }
}

export default IndexPage
