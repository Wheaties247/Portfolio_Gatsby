import React from "react"
import { Link } from "gatsby"
import Modal from "./Modal"
import styles from "./portfolioLayout.module.css"
const { links, hilighted, pageContent, layout,
contactModal, navBar, contact, contactInfo } = styles
const scrollLock = {
	overflow: "hidden",
	position: "fixed",
	top:0,
	left:0,
	right:0,
	bottom:0
}

class PortfolioLayout extends React.Component {
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
		const { children, page, imageData } = this.props
		const { showModal } = this.state

		return (
			<div className={layout}>
				{showModal ? (
					<Modal
						imageData={imageData}
						modalName="Contact Me"
						toggleModal={this.toggleModal}
					>
						<div className={contactModal}>
							<p className={contactInfo}>Email: LoweaTimothy@gmail.com</p>
							
								<a
								
								href="https://www.linkedin.com/in/timothy-lowe/">
								<p className={contactInfo} >Linkdin</p>
								</a>
							<a 
							href="https://github.com/Wheaties247">
								<p
								className={contactInfo}>
								GitHub
								</p></a>
							
						</div>
					</Modal>
				) : null}

				<div className={navBar}>
					{page === "home" ? (
						<Link className={hilighted} to="/">
							Home
						</Link>
					) : (
						<Link className={links} to="/">
							Home
						</Link>
					)}

					{page === "skills" ? (
						<Link className={hilighted} to="/skills">
							Skills
						</Link>
					) : (
						<Link className={links} to="/skills">
							Skills
						</Link>
					)}

					{page === "projects" ? (
						<Link className={hilighted} to="/projects">
							Projects
						</Link>
					) : (
						<Link className={links} to="/projects">
							Projects
						</Link>
					)}
				</div>
				<div style={showModal ? scrollLock : null} className={pageContent}>
				
					{children}
				
				</div>
				<div onClick={() => this.toggleModal()} className={contact}>
					<p>"Meta" info</p>
				</div>
			</div>
		)
	}
}
export default PortfolioLayout

//'Major Mono Display'
