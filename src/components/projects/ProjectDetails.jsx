function ProjectDetails({ images, description }) {
	const imagePathPrefix = "./src/assets/images";

	const imageElements = images.map((e) => (
		<img
			src={imagePathPrefix + e}
			alt=''
			className='border border-black'
		/>
	));

	return (
		<div className='md:hidden flex md:group-hover:flex flex-col overflow-hidden h-full w-full '>
			<div className='h-[70%] flex gap-4 overflow-x-auto'>{imageElements}</div>
			<div className='h-[30%] bg-black text-white p-2 text-justify overflow-y-auto'>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ProjectDetails;
