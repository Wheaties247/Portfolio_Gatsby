import React from "react"
import Img from "gatsby-image"

import containerStyles from "./contentContainer.module.css"
const { 
	container, 
	title: titleStyle, 
	altTitle,
	altImageContainer,
	imageContainer,
	
	 } = containerStyles
const ContentContainer = props => {
	const { imageData, title , children, alt} = props

	return (
		<div className={container}>
			<h1 className={alt ? altTitle: titleStyle }>{title} :</h1>

			<div className={alt?  altImageContainer: imageContainer}>
				<Img fluid={imageData.childImageSharp.fluid} alt="2x2" />
			</div>

			{children}
		</div>
	)
}

export default ContentContainer
