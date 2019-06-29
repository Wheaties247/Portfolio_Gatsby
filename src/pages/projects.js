import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PortfolioLayout from "../components/PortfolioLayout"
import ContentContainer from "../components/ContentContainer"
import projectStyles from "../components/projectStyles.module.css"

const { word: wordStyle, projectLinks, url:urlStyle, projectContainer } = projectStyles

const Projects = () => (
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
				reachGoal: file(relativePath: { eq: "reachGoal.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				reachGoalRemix: file(relativePath: { eq: "reachGoalRefactored.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				renew: file(relativePath: { eq: "renew.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				movieClub: file(relativePath: { eq: "movieClub.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				chewsy: file(relativePath: { eq: "chewsy.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
				perspective: file(relativePath: { eq: "views.png" }) {
					childImageSharp {
						fluid(maxWidth: 1400) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => {
			console.log("skills data", data)
			const {
				reachGoal,
				renew,
				reachGoalRemix,
				movieClub,
				chewsy,
				perspective,
			} = data
			const reachGoalString =
				"A simple two player dice game to reach a desired goal before your opponent"
			const reachGoalRemixString =
				"A simple two player dice game to reach a desired goal before your opponent refactored into a React Component built on Gatsby"
			const renewString =
				"A classified website that allows users to offer bicycle parts for cash or barter to fellow user"
			const movieClubString = "A fan site for movie enthusists"
			const chewsyString =
				"A recipie catalog for users with general dietary allergens or restricitons "
			const prespectiveString =
				"A static site that shows some of the many prespectives that this reality holds"
			const stringSplit = string => {
				const wordArray = string.split(" ")
				return wordArray.map((word, i) => {
					return (
						<p className={wordStyle} key={i}>
							{word}
						</p>
					)
				})
			}
			const projectInfo = [
				{
					name: "Reach The Goal",
					image: reachGoal,
					description: reachGoalString,
					url: "http://www.ReachGoal.surge.sh",
				},
				{
					name: "Reach Goal Refactored",
					image: reachGoalRemix,
					description: reachGoalRemixString,
					url: "http://www.ReachTheGoalReactRefactored.surge.sh",
				},
				{
					name: "Tim's Movie Club",
					image: movieClub,
					description: movieClubString,
					url: "https://tims-movie-club.herokuapp.com/",
				},
				{
					name: "Renew",
					image: renew,
					description: renewString,
					url: "http://renew.surge.sh/",
				},
				{
					name: "Chewsy",
					image: chewsy,
					description: chewsyString,
					url: "https://chewsy-app.herokuapp.com/",
				},
				{
					name: "Perspective",
					image: perspective,
					description: prespectiveString,
					url: "http://www.perspective.surge.sh",
				},
				// {
				// 	name: "Reach The Goal",
				// 	image: reachGoal,
				// 	description: reachGoalString,
				// 	url: "http://www.ReachGoal.surge.sh"
				// },
			]
			const projectMap = projectArray => {
				return projectArray.map((project, i)=>{
					const {name: title, image, description, url} = project
					return(
						<a key ={i} className={projectLinks} href={url}>
							<ContentContainer
								imageData={image}
								title={title}
								alt={i % 2 === 0? false: true}
							>
								{stringSplit(description)}
								<h6 className={urlStyle}>URL: {url}</h6>
							</ContentContainer>
						</a>
						)
				})
			}
			return (
				<PortfolioLayout page="projects" imageData={data}>
					<div className={projectContainer}>
						{projectMap(projectInfo)}
					</div>
				</PortfolioLayout>
			)
		}}
	/>
)

export default Projects
