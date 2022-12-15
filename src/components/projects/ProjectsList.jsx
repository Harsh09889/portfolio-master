function ProjectsList() {
	return (
		<ul>
			<li className='group p-4 border cursor-pointer border-b-0'>
				<div className='flex justify-between'>
					<h2 className='my-4 text-xl '>Instagram</h2>
					<button className='p-2 group-hover:bg-transparent transition-all duration-500 bg-white text-black px-8 border border-b-0'>
						Go Live
					</button>
				</div>
				<div className='md:h-0 mb-4 p-8 h-[70vh] md:p-0 md:group-hover:p-8  md:group-hover:h-[50vh] bg-white transition-all duration-500 linear'></div>
			</li>
			<li className='group p-4 border cursor-pointer border-b-0'>
				<div className='flex justify-between'>
					<h2 className='my-4 text-xl '>Myntra</h2>
					<button className='p-2 group-hover:bg-transparent transition-all duration-500 bg-white text-black px-8 border border-b-0'>
						Go Live
					</button>
				</div>
				<div className='md:h-0 mb-4 p-8 h-[70vh] md:p-0 md:group-hover:p-8  md:group-hover:h-[50vh] bg-white transition-all duration-500 linear'></div>
			</li>
			<li className='group p-4 border cursor-pointer border-b-0'>
				<div className='flex justify-between'>
					<h2 className='my-4 text-xl '>WhatsappLike</h2>
					<button className='p-2 group-hover:bg-transparent transition-all duration-500 bg-white text-black px-8 border border-b-0'>
						Go Live
					</button>
				</div>
				<div className='md:h-0 mb-4 p-8 h-[70vh] md:p-0 md:group-hover:p-8  md:group-hover:h-[50vh] bg-white transition-all duration-500 linear'></div>
			</li>
			<li className='group p-4 border cursor-pointer '>
				<div className='flex justify-between'>
					<h2 className='my-4 text-xl '>PortFolio</h2>
					<button className='p-2 group-hover:bg-transparent transition-all duration-500 bg-white text-black px-8 border border-b-0'>
						Go Live
					</button>
				</div>
				<div className='md:h-0 mb-4 p-8 h-[70vh] md:p-0 md:group-hover:p-8  md:group-hover:h-[50vh] bg-white transition-all duration-500 linear'></div>
			</li>
		</ul>
	);
}

export default ProjectsList;
