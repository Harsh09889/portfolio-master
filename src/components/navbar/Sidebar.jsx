import { motion } from "framer-motion";
import SidebarItems from "./SidebarItems";

function Sidebar({ activeLink, setActiveLink }) {
	const slideRight = {
		hidden: { y: "100%", opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 100,
				type: "spring",
				damping: 30,
				stiffness: 500,
			},
		},
		exit: { y: "100%", opacity: 0 },
	};
	return (
		<motion.div
			variants={slideRight}
			initial='hidden'
			animate='visible'
			exit='exit'
			id='sidebar'
			onTouchMove={(e) => e.stopPropagation()}
			className='w-[90%] bg-black h-full text-white md:hidden fixed top-28 mx-[5%] rounded-lg p-8 z-50'>
			<SidebarItems
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>
		</motion.div>
	);
}

export default Sidebar;
