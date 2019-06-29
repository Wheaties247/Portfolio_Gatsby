import React from "react"
import Img from "gatsby-image"
import modalStyles from "./modal.module.css"

const {container, modalContent, title, closeButton:buttonStyle} = modalStyles
const Modal = props =>{
	const {modalName, toggleModal, imageData, children} = props
	const {closeButton} = imageData
	console.log(window.scrollY, "window.scrollY")
	return(
		<div className ={container}
		onClick ={toggleModal}>
		
			<div onClick ={e=> e.stopPropagation()} 
			className ={modalContent}>
				<div 
				className ={buttonStyle}
				onClick ={toggleModal}
				>
					<Img 
			        fluid ={closeButton.childImageSharp.fluid} 
			        alt = "close"
		          	/>
				</div>
				
				<h1 className= {title}>{modalName}</h1>
				<div className = "modalText">
					
				</div>

				{children}
			</div>
		</div>
		)
}
export default Modal