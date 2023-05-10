import {createSignal, JSX} from "solid-js";

interface ButtonProps {
	onClick: () => void;
	text: string;
}

const OffsetButton: (props: ButtonProps) => JSX.Element = (props) => {
	const [hovered, setHovered] = createSignal(false);

	return (
		<div class="relative inline-block">
			<button
				class="relative z-10 px-4 py-2 text-white bg-black hover:bg-gray-800 focus:outline-none"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={props.onClick}
			>
				{props.text}
			</button>
			<div
				class={`absolute w-full h-full border-2 border-black opacity-50 transition-all duration-200 ease-in-out ${
					hovered() ? "-right-2.5 -bottom-2.5" : "-right-2 -bottom-2"
				}`}
			></div>
		</div>
	);
};

export default OffsetButton;
