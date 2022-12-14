import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
	const el = useRef("span");

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
				], // Strings to display
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
		<div className='grid place-items-center h-screen w-full md:w-[60%] bg-[var(--primary-color)] px-10'>
			<div className='justify-center flex flex-col gap-12 h-fit'>
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

				<span
					ref={el}
					id='salutation'
					className='text
					text-4xl 
					md:text-6xl 
					min-h-[65px]
					md:min-h-[90px]
					'></span>

				<h1
					className={`
						text-lg
						md:text-3xl
						font-normal font-sans md:min-h-[150px]`}>
					I am a Developer and Teacher by choice. Whether it be Designing a
					Website or Teaching someone something I do it in the best way
					possible.
				</h1>

				<span
					style={{ fontFamily: "Montez, cursive" }}
					className='font text-3xl md:text-6xl underline underline-offset-8 text-black text-right -rotate-12 origin-center'>
					Harsh kumar
				</span>
			</div>
		</div>
	);
}

export default Home;
