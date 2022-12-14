import html from "../assets/images/skills/htmlLogo.png";
import css from "../assets/images/skills/cssLogo.png";
import js from "../assets/images/skills/jsLogo.png";
import nodeJS from "../assets/images/skills/nodeJSLogo.png";
import express from "../assets/images/skills/expressLogo.png";
import react from "../assets/images/skills/reactLogo.png";
import redux from "../assets/images/skills/reduxLogo.png";
import mongo from "../assets/images/skills/mongoLogo.png";
import python from "../assets/images/skills/pythonLogo.png";
import tailwind from "../assets/images/skills/tailwindLogo.png";
import linux from "../assets/images/skills/linuxLogo.png";
import "../styles/myLove.css";

function MyLove() {
	return (
		<div className='grid place-items-center min-h-screen w-full md:w-[60%] pt-28 p-12 bg-[#00C9FF] z-[49]'>
			<div className='cardsContainer grid grid-cols-4 gap-4 px-12 '>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={html}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={css}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={js}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={nodeJS}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={express}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={react}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={redux}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={mongo}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={python}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={tailwind}
						alt=''
						className='w-full '
					/>
				</div>
				<div className='relative p-8 bg-white'>
					<div id='cardOverlay'></div>
					<img
						src={linux}
						alt=''
						className='w-full '
					/>
				</div>
			</div>
		</div>
	);
}

export default MyLove;
