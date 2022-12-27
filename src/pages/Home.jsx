import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

function Home() {
	const el = useRef("span");

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

	useEffect(() => {
		const typed1 = new Typed(
			el.current,
			{
				strings: [
					"नमस्ते",
					"Hello",
					"ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
					"Bonjour",
					"आदाब",
					"Hola",
					"Ciao",
					"Olá ",
				],
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
			className='md:absolute right-0 md:w-[60%]  bg-black h-screen overflow-y-scroll w-full z-[49]'>
			<div className='grid place-items-center min-h-screen w-full  bg-[#fab327] p-10 pt-28 z-[49]'>
				<div className='justify-center flex flex-col gap-8 h-fit'>
					<h1
						className='
						text-lg
						md:text-xl
						tracking-wider
						font-bold 
						text-[#1A1914]
						'>
						Introduction
					</h1>

					<div className='flex justify-start gap-6 items-start w-full'>
						<span
							ref={el}
							id='salutation'
							className='text
						text-4xl 
						ease-out
						md:text-6xl 
						min-h-[65px]
						md:min-h-[90px]
						'></span>

						<motion.img
							className='h-16 w-16 md:h-20 md:w-20 bg-white p-2 -m-2 rounded-full'
							src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png'
						/>
					</div>

					<h1
						className={`
						text-lg
						md:text-2xl
						text-justify
						font-normal font-sans md:min-h-[150px]`}>
						Analytical and detail-oriented aspiring Full Stack Developer.
						Capable of writing production-ready code using ReactJS, Redux, and
						CSS on the frontend, NodeJS and Express on the backend to build
						single page applications. Passionate about coding and strongly
						interested in working in a product-based company.
					</h1>

					<span
						style={{ fontFamily: "Montez, cursive" }}
						className='font text-4xl md:text-6xl underline underline-offset-8 text-black text-right -rotate-12 origin-center mt-8'>
						Harsh kumar
					</span>
				</div>
			</div>
		</motion.div>
	);
}

export default Home;
