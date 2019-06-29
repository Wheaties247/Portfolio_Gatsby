import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const Landing = (props) =>{

	return(
		<div>
			 <Img fluid={data.prospect.childImageSharp.fluid}/>
		</div>
		)
}

export default Landing

// export const query = graphql`
// query ProspectImageQuery {
//     prospect: file(relativePath: { eq: "Prospect.jpg" }) {
//     	childImageSharp{
// 			fluid(maxWidth: 1240 ) {
// 			        ...GatsbyImageSharpFluid
// 			      }
//     	}
      
//     }
//   }
//   `