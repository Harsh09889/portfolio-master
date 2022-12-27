import ProjectDetails from "./ProjectDetails";
import "../../styles/projects.css";

function ProjectCard({ projectName, images, description }) {
	return (
		<li
			id='projectCard'
			style={{
				transform: "rotateX(45deg)",
				boxShadow: "0px 40px 10px rgba(0,0,0,0.5)",
			}}
			className='group p-4 my-2 cursor-pointer bg-[rgba(255,255,255,0.25)] transition-all duration-500 w-full linear'>
			<div className='flex justify-between'>
				<h2 className='my-4 text-xl '>{projectName}</h2>
				<button className='p-2 group-hover:bg-transparent transition-all duration-500 bg-white text-black px-8 border border-b-0'>
					Go Live
				</button>
			</div>
			<div className='md:h-0 mb-4 p-8 h-[70vh] md:p-0 md:group-hover:p-8  md:group-hover:h-[50vh] bg-white transition-all duration-500 linear'>
				<ProjectDetails
					images={images}
					description={description}
				/>
			</div>
		</li>
	);
}

export default ProjectCard;
