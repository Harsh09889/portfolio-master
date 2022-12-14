import React from "react";
import { motion } from "framer-motion";

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
	return (
		<motion.div
			variants={slideUp}
			initial='hidden'
			animate='visible'
			exit='exit'
			className='grid place-items-center h-screen w-full md:w-[60%] bg-[#FE614E] z-[49]'></motion.div>
	);
}

export default MyProjects;
