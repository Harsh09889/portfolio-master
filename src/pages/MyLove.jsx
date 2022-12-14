import html from "../assets/images/skills/htmlLogo.png";
import css from "../assets/images/skills/cssLogo.png";
import js from "../assets/images/skills/jsLogo.png";
import nodeJS from "../assets/images/skills/nodeJSLogo.png";
import express from "../assets/images/skills/expressLogo.png";
import react from "../assets/images/skills/reactLogo.png";
import redux from "../assets/images/skills/reduxLogo.png";
import mongo from "../assets/images/skills/mongoLogo.png";
import java from "../assets/images/skills/javaLogo.png";
import python from "../assets/images/skills/pythonLogo.png";
import tailwind from "../assets/images/skills/tailwindLogo.png";
import linux from "../assets/images/skills/linuxLogo.png";
import "../styles/myLove.css";
import { motion } from "framer-motion";

function MyLove() {
	const slideUp = {
		hidden: {
			y: "100%",
		},
		visible: {
			y: 0,
		},
		exit: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial='hidden'
			animate='visible'
			// transition={{ duration: 1 }}
			exit='exit'
			className='grid place-items-center min-h-screen w-full md:w-[60%] pt-12 md:pt-28 md:p-6 bg-[#00C9FF] z-[49]'>
			<div className='cardsContainer  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12 '>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'>
						<p>
							HTML is the Basic Structure of a website.
							<br />
							HTML tags to a website are just like the bricks of a house.
						</p>
					</div>
					<img
						src={html}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'>
						<p>
							CSS is like the beatification of the HTML
							<br />
							It acts just like the OPPO, VIVO camera but for websites.
						</p>
					</div>
					<img
						src={css}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'>
						<p>
							We can add Logic, just like we decide in our house what button
							will turn on which fan the same can be achieved in website using
							JS.
						</p>
					</div>
					<img
						src={js}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={nodeJS}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={express}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={react}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={redux}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={mongo}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={java}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={python}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl grid place-items-center p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={tailwind}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative rounded-2xl p-1 md:p-8 bg-white'>
					<div className='cardOverlay'></div>
					<img
						src={linux}
						alt=''
						className='w-full '
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default MyLove;
