// OffsetText.tsx
import {JSX} from "solid-js";

interface Props {
	text: string;
}

export default function OffsetText(props: Props): JSX.Element {
	return (
		<span class="relative inline-block">
			<h1 class="relative text-4xl z-20 font-fatface tracking-wide transition-all duration-200 ease-in-out">
				{props.text}
			</h1>
			<span class="bg-gradient-to-r from-violet-300 to-blue-300 absolute top-6 w-full h-2/5 z-10 transition-all duration-200 ease-in-out"></span>
		</span>
	);
}
