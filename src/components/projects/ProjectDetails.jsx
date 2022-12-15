function ProjectDetails({ images, description }) {
	const imagePathPrefix = "./src/assets/images";

	const imageElements = images.map((e, id) => (
		<img
			key={id}
			src={imagePathPrefix + e}
			alt=''
			className='border border-black'
		/>
	));

	return (
		<div className='md:hidden flex md:group-hover:flex flex-col overflow-hidden h-full w-full'>
			<div className='h-[70%] flex gap-4 overflow-x-auto'>{imageElements}</div>
			<div className='h-[30%] bg-white text-black p-2 md:text-justify overflow-y-auto'>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectDetails;
