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
			transition={{ duration: 1, ease: "easeInOut" }}
			className='md:absolute right-0 md:w-[60%]  bg-black h-screen overflow-y-scroll w-full z-[49]'>
			<div className='grid place-items-center min-h-screen w-full  bg-[#fab327] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit'></div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
