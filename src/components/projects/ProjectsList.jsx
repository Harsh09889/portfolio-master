import projectsData from "../../assets/data/projects.json";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
	const projectCards = projectsData.projects.map((e, i) => (
		<ProjectCard
			key={i}
			projectName={e.projectName}
			images={e.images}
			description={e.description}
		/>
	));

	return (
		<ul style={{ transform: "preserve3d", perspective: 1500 }}>
			{projectCards}
		</ul>
	);
}

export default ProjectsList;
