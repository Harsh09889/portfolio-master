import { motion } from "framer-motion";

function ContactMe() {
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
			transition={{ duration: 1, ease: "easeInOut" }}
			className='md:absolute grid right-0 place-items-center h-screen w-full md:w-[60%] bg-[#8FD82F] px-10 z-[49]'></motion.div>
	);
}

export default ContactMe;
