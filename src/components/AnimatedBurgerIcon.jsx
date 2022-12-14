import { BurgerBoughie as Icon } from "react-icons-animated";

const AnimatedIcon = ({ sidebar, setSidebar }) => {
	return (
		<button
			onClick={() => setSidebar((sidebar) => !sidebar)}
			className='md:hidden h-10 mr-1 w-10 grid place-items-center p-0 animatedIcon rounded-md bg-black'>
			<Icon isClosed={sidebar} />
		</button>
	);
};

export default AnimatedIcon;
