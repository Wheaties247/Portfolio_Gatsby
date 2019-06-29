import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortfolioLayout from "../components/PortfolioLayout"
import ContentContainer from "../components/ContentContainer"
import skillStyles from "../components/skillStyles.module.css"
const { skillPage, skill: singleSkillStyle } = skillStyles
const Skils = () => (
	<StaticQuery
		query={graphql`
			{
				closeButton: file(relativePath: { eq: "close.png" }) {
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				twoByTwo: file(relativePath: { eq: "twoByTwo.jpeg" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				threeByThree: file(relativePath: { eq: "cube.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				fourByFour: file(relativePath: { eq: "fourByFour.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => {
			console.log("skills data", data)
			const { twoByTwo, threeByThree, fourByFour } = data
			const thingsIKnow = [
				"Express",
				"Axios",
				"Node.js",
				"Npm",
				"React",
				"Postgresql",
				"Ruby",
				"Ruby on Rails",
				"Javascript",
				"mySQL",
				"Rest API's",
				"3rd Party API's",
			]
			const otherSkills = [
				"GitHub",
				"Sequalize",
				"FlexBox",
				"Web Sockets",
				"B-crypt",
				"Micro-service Architecture",
				"Redux",
				"Wire-framing",
				"React Native"
			]
			const workingOn = [
				"Angular",
				"Java",
				"Grid",
				"Nest.js",
				"Dev - Ops",
				"Hibernate",
				"C++",
			]
			const skillMap = skills => {
				return skills.map((skill, i) => {
					return (
						<div className={singleSkillStyle} key={i}>
							{skill}
						</div>
					)
				})
			}
			return (
				<PortfolioLayout page="skills" imageData={data}>
					<div className={skillPage}>
						<ContentContainer
							imageData={twoByTwo}
							title="Things I Know"
							alt={false}
						>
							{skillMap(thingsIKnow)}
						</ContentContainer>
						<ContentContainer
							imageData={threeByThree}
							title="Other Things I Know"
							alt={true}
						>
							{skillMap(otherSkills)}
						</ContentContainer>
						<ContentContainer
							imageData={fourByFour}
							title="Things I'm Working On"
							alt={false}
						>
							{skillMap(workingOn)}
						</ContentContainer>
					</div>
				</PortfolioLayout>
			)
		}}
	/>
)

export default Skils
