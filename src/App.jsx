import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/ProfileContainer";
import PageContainer from "./components/PageContainer";

function App() {
	const [activeLink, setActiveLink] = useState(1);

	const dropIn = {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.1,
				type: "spring",
				damping: 15,
				stiffness: 500,
			},
		},
		exit: { y: 100, opacity: 0 },
	};

	return (
		<div className='App '>
			<Navbar
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>
			<div className='flex flex-col md:flex-row'>
				<motion.div
					whileTap={{ scale: 0.2 }}
					transition={{
						duration: 1,
					}}
					className=' w-full mb-40 md:mb-0 md:w-[40%] h-fit sticky top-28 '>
					<ProfileContainer activeLink={activeLink} />
				</motion.div>
				<AnimatePresence
					initial={false}
					mode={"wait"}>
					<PageContainer activeLink={activeLink} />
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
