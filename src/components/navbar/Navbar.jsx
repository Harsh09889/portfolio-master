import React, { useState } from "react";
import AnimatedBurgerIcon from "../AnimatedBurgerIcon";
import NavItemsLg from "./NavItemsLg";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeLink, setActiveLink }) {
	const [sidebar, setSidebar] = useState(false);

	return (
		<>
			<nav className='h-20 w-[98%] flex bg-[var(--nav-bg)] p-4 justify-between items-center rounded-lg mx-2 fixed top-4 left-0 z-50'>
				<div className='h-full w-fit grid place-items-center'>
					<motion.h1
						drag='x'
						dragConstraints={{ left: 1, right: 100 }}
						className='text-[#000] text-5xl font-extrabold'>
						Harsh
					</motion.h1>
				</div>
				<div className='h-full w-fit grid place-items-center'>
					<NavItemsLg
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
					<AnimatedBurgerIcon
						sidebar={sidebar}
						setSidebar={setSidebar}
					/>
				</div>
			</nav>

			<AnimatePresence
				initial={false}
				mode={"wait"}>
				{sidebar && (
					<Sidebar
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
