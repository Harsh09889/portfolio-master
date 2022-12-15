import { motion } from "framer-motion";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import ProjectsList from "../components/projects/ProjectsList";

function MyProjects() {
	const slideUp = {
		hidden: {
			y: "100%",
		},
		visible: {
			y: 0,
		},
		exit: {
			y: 0,
		},
	};

	const el = useRef("span");

	useEffect(() => {
		const typed1 = new Typed(
			el.current,
			{
				strings: ["KMW (Know My Work)"],
				startDelay: 200,
				typeSpeed: 120,
				backSpeed: 50,
				backDelay: 1500,
				smartBackspace: true,
				loop: true,
				showCursor: false,
			},
			"salutation"
		);

		// Destropying
		return () => {
			typed1.destroy();
		};
	}, []);

	return (
		<motion.div
			variants={slideUp}
			initial='hidden'
			animate='visible'
			exit='exit'
			transition={{ duration: 1, ease: "easeInOut" }}
			// transition={{ duration: 0.5 }}
			className='grid md:absolute right-0 pt-28 place-items-center min-h-screen w-full md:w-[60%] bg-[#FE614E] p-10 z-[49]'>
			<div className='justify-center flex flex-col gap-8 h-fit w-full'>
				<h1
					className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
					Projects
				</h1>

				<div className='flex justify-start gap-6 items-start w-full'>
					<span
						ref={el}
						className='text
						text-4xl 
						ease-out
						md:text-6xl 
						min-h-[65px]
						md:min-h-[90px]
						'></span>

					<motion.img
						className='h-16 w-16 md:h-24 md:w-24 bg-white p-2 -my-4 rounded-full'
						src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/man-technologist_1f468-200d-1f4bb.png'
					/>
				</div>

				<div className='projectsContainer'>
					<ProjectsList />
				</div>
			</div>
		</motion.div>
	);
}

export default MyProjects;
