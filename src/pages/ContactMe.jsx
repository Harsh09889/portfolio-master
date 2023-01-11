import { motion } from "framer-motion";
import "../styles/contactme.css";

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
				<div className='h-fit '>
					<div className='wrapper w-[90vw] md:w-[50vw] '>
						<form
							method='post'
							action=''
							className='ccform'>
							<div className='ccfield-prepend'>
								<span className='ccform-addon'>
									<i className='fa fa-user fa-2x'></i>
								</span>
								<input
									className='ccformfield'
									type='text'
									placeholder='Full Name'
									required
								/>
							</div>
							<div className='ccfield-prepend'>
								<span className='ccform-addon'>
									<i className='fa fa-envelope fa-2x'></i>
								</span>
								<input
									className='ccformfield'
									type='text'
									placeholder='Email'
									required
								/>
							</div>
							<div className='ccfield-prepend'>
								<span className='ccform-addon'>
									<i className='fa fa-mobile-phone fa-2x'></i>
								</span>
								<input
									className='ccformfield'
									type='text'
									placeholder='Phone'
								/>
							</div>
							<div className='ccfield-prepend'>
								<span className='ccform-addon'>
									<i className='fa fa-info fa-2x'></i>
								</span>
								<input
									className='ccformfield'
									type='text'
									placeholder='Subject'
									required
								/>
							</div>
							<div className='ccfield-prepend'>
								<span className='ccform-addon'>
									<i className='fa fa-comment fa-2x'></i>
								</span>
								<textarea
									className='ccformfield'
									name='comments'
									rows='8'
									placeholder='Message'
									required></textarea>
							</div>
							<div className='ccfield-prepend'>
								<input
									className='ccbtn'
									type='submit'
									value='Submit'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
