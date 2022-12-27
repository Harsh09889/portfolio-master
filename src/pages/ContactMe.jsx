import { motion } from "framer-motion";

function ContactMe() {
	const slideUp = {
		hidden: {
			right: "-100vw",
		},
		visible: {
			right: 0,
		},
		exit: {
			right: 0,
		},
	};
	return (
		<motion.div
			variants={slideUp}
			initial='hidden'
			animate='visible'
			exit='exit'
			transition={{ duration: 0.45, type: "spring", ease: "easeInOut" }}
			className='md:absolute right-0 top-0 md:w-[60%]  h-screen overflow-y-scroll w-full z-[49]'>
			<div className='grid place-items-center min-h-screen h-full w-full  bg-[#8fd82f] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit'></div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
